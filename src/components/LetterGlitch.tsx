import { useEffect, useRef } from 'react'

/**
 * LetterGlitch — canvas background matching
 * https://reactbits.dev/tools/background-studio?bg=letter-glitch&centerVignette=false
 *
 * Characters rendered in a tight grid, each independently glitching at a
 * random interval. Colour noise shifts hue each frame. No external deps.
 */

interface Props {
  /** Base colour for the glitch characters, hex or rgb string */
  glitchColors?: [string, string, string]
  /** How fast characters swap (ms between glitches per cell) */
  glitchSpeed?: number
  /** If true a soft radial vignette is drawn over the canvas */
  centerVignette?: boolean
  /** If true outer corners are darkened */
  outerVignette?: boolean
  smooth?: boolean
}

const CHARS =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*<>/?!;:~'

function randChar() {
  return CHARS[Math.floor(Math.random() * CHARS.length)]
}

export default function LetterGlitch({
  glitchColors    = ['#2b4539', '#61dca3', '#61b3dc'],
  glitchSpeed     = 50,
  centerVignette  = false,
  outerVignette   = true,
  smooth          = true,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const wrapRef   = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const wrap   = wrapRef.current
    if (!canvas || !wrap) return

    const ctx = canvas.getContext('2d')!
    const FONT_SIZE  = 16
    const FONT_FACE  = `${FONT_SIZE}px "SFMono-Regular", Consolas, monospace`

    let cols = 0
    let rows = 0
    let grid: { char: string; color: string; nextSwap: number }[] = []
    let animId = 0
    let alive  = true

    function pickColor() {
      return glitchColors[Math.floor(Math.random() * glitchColors.length)]
    }

    function initGrid(w: number, h: number) {
      cols = Math.ceil(w / FONT_SIZE)
      rows = Math.ceil(h / FONT_SIZE)
      grid = Array.from({ length: cols * rows }, () => ({
        char:     randChar(),
        color:    pickColor(),
        nextSwap: performance.now() + Math.random() * glitchSpeed,
      }))
    }

    function resize() {
      const r = wrap.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      canvas.width  = r.width  * dpr
      canvas.height = r.height * dpr
      canvas.style.width  = r.width  + 'px'
      canvas.style.height = r.height + 'px'
      ctx.scale(dpr, dpr)
      initGrid(r.width, r.height)
    }

    const ro = new ResizeObserver(resize)
    ro.observe(wrap)
    resize()

    function draw(ts: number) {
      if (!alive) return
      const W = canvas.clientWidth
      const H = canvas.clientHeight

      ctx.fillStyle = '#060606'
      ctx.fillRect(0, 0, W, H)

      ctx.font = FONT_FACE
      ctx.textBaseline = 'top'

      for (let i = 0; i < grid.length; i++) {
        const cell = grid[i]
        if (ts >= cell.nextSwap) {
          cell.char     = randChar()
          cell.color    = pickColor()
          cell.nextSwap = ts + glitchSpeed + Math.random() * glitchSpeed * 2
        }
        const col = i % cols
        const row = Math.floor(i / cols)
        ctx.fillStyle = cell.color
        ctx.fillText(cell.char, col * FONT_SIZE, row * FONT_SIZE)
      }

      /* Outer corner vignette */
      if (outerVignette) {
        const grad = ctx.createRadialGradient(W / 2, H / 2, H * 0.25, W / 2, H / 2, H * 0.85)
        grad.addColorStop(0, 'rgba(0,0,0,0)')
        grad.addColorStop(1, 'rgba(0,0,0,0.85)')
        ctx.fillStyle = grad
        ctx.fillRect(0, 0, W, H)
      }

      /* Centre vignette */
      if (centerVignette) {
        const grad2 = ctx.createRadialGradient(W / 2, H / 2, 0, W / 2, H / 2, H * 0.55)
        grad2.addColorStop(0, 'rgba(0,0,0,0.6)')
        grad2.addColorStop(1, 'rgba(0,0,0,0)')
        ctx.fillStyle = grad2
        ctx.fillRect(0, 0, W, H)
      }

      animId = requestAnimationFrame(draw)
    }
    animId = requestAnimationFrame(draw)

    return () => {
      alive = false
      cancelAnimationFrame(animId)
      ro.disconnect()
    }
  }, [glitchColors, glitchSpeed, centerVignette, outerVignette, smooth])

  return (
    <div
      ref={wrapRef}
      style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}
    >
      <canvas
        ref={canvasRef}
        style={{ display: 'block', width: '100%', height: '100%' }}
      />
    </div>
  )
}
