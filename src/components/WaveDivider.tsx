import { useEffect, useRef } from 'react'

/**
 * WaveDivider — scroll-speed-reactive string/wave boundary between two sections.
 *
 * Visual metaphor: a guitar string stretched across the full viewport width.
 * When the user scrolls, the string is "plucked" — it vibrates with a standing-wave
 * pattern (fundamental + harmonics) and decays naturally back to flat using spring
 * physics. Faster scrolling = more amplitude.
 *
 * Implementation:
 *  - A zero-height anchor div sits at the exact boundary in document flow.
 *  - A position:fixed canvas tracks the anchor's viewport Y, so it always floats
 *    exactly at the boundary regardless of overflow:hidden on adjacent sections.
 *  - Spring physics: velocity is driven by scroll speed, decays with damping.
 *  - The canvas paints two filled regions separated by the animated string path.
 */

interface Props {
  /** Color of the section above the boundary */
  topColor: string
  /** Color of the section below the boundary */
  bottomColor: string
}

const HEIGHT    = 80    // canvas height (px) — wave centred here
const MAX_AMP   = 38    // maximum wave amplitude (px)
const HARMONICS = [1, 2, 3] as const   // string harmonics to render

export default function WaveDivider({ topColor, bottomColor }: Props) {
  const anchorRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const anchor = anchorRef.current
    const canvas = canvasRef.current
    if (!anchor || !canvas) return

    /* ── Canvas sizing ──────────────────────────────────── */
    let W = window.innerWidth
    canvas.width  = W * window.devicePixelRatio
    canvas.height = HEIGHT * window.devicePixelRatio
    canvas.style.width  = W + 'px'
    canvas.style.height = HEIGHT + 'px'
    const ctx = canvas.getContext('2d')!
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio)

    /* ── Amplitude — no velocity, pure exponential decay ── */
    let amp = 0

    /* ── Scroll tracking ────────────────────────────────── */
    let lastScrollY   = window.scrollY
    let scrollDir     = 1   // +1 down, -1 up
    let scrollImpulse = 0   // accumulated scroll this frame

    function onScroll() {
      const dy = window.scrollY - lastScrollY
      if (dy !== 0) scrollDir = dy > 0 ? 1 : -1
      scrollImpulse += Math.abs(dy)
      lastScrollY = window.scrollY
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    /* ── Resize ─────────────────────────────────────────── */
    function onResize() {
      W = window.innerWidth
      canvas.width  = W * window.devicePixelRatio
      canvas.height = HEIGHT * window.devicePixelRatio
      canvas.style.width  = W + 'px'
      canvas.style.height = HEIGHT + 'px'
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }
    window.addEventListener('resize', onResize)

    /* ── Render loop ────────────────────────────────────── */
    const clockStart = performance.now()
    let animId: number

    function animate() {
      /* position fixed canvas to track the boundary */
      const rect    = anchor.getBoundingClientRect()
      const boundY  = rect.top   // viewport Y of the boundary
      const top     = boundY - HEIGHT / 2

      canvas.style.top = top + 'px'

      /* only paint when boundary is near the viewport */
      const inView = boundY > -HEIGHT && boundY < window.innerHeight + HEIGHT
      if (inView) {
        canvas.style.visibility = 'visible'

        /* ── Overdamped decay — pluck up, glide back, no bounce ── */
        if (scrollImpulse > 0) {
          // Direct amplitude injection (no velocity → no overshoot)
          amp = Math.min(amp + scrollImpulse * 0.40, MAX_AMP)
          scrollImpulse = 0
        }
        // Exponential decay: ~0.91^60 ≈ half-life ~0.7 s at 60 fps
        amp *= 0.91
        if (Math.abs(amp) < 0.15) amp = 0

        /* ── Draw ─────────────────────────────────────────── */
        const elapsed  = (performance.now() - clockStart) / 1000
        const centerY  = HEIGHT / 2

        ctx.clearRect(0, 0, W, HEIGHT)

        // Background: topColor fills everything
        ctx.fillStyle = topColor
        ctx.fillRect(0, 0, W, HEIGHT)

        // Build the wave path separating topColor and bottomColor
        ctx.beginPath()
        ctx.moveTo(0, centerY)

        for (let px = 0; px <= W; px += 2) {
          const t = px / W  // 0..1 along string

          // Standing wave harmonics (string fixed at both ends)
          // Each harmonic oscillates at its natural frequency
          let y = 0
          HARMONICS.forEach((n, i) => {
            const spatialMode = Math.sin(n * Math.PI * t)
            const decay       = Math.pow(0.45, i)         // higher harmonics quieter
            // Slow natural frequencies: 1.8 / 3.0 / 4.5 rad/s → dignified sway
            const freq        = 1.8 + n * 1.2
            const osc         = Math.cos(freq * elapsed) * decay
            y += spatialMode * osc
          })

          // Scale by current spring amplitude (scroll-driven)
          // scrollDir flips which side of center the peak goes
          ctx.lineTo(px, centerY - amp * y * scrollDir)
        }

        ctx.lineTo(W, HEIGHT)
        ctx.lineTo(0, HEIGHT)
        ctx.closePath()
        ctx.fillStyle = bottomColor
        ctx.fill()
      } else {
        canvas.style.visibility = 'hidden'
        amp *= 0.91
        scrollImpulse = 0
      }

      animId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [topColor, bottomColor])

  return (
    <>
      {/*
       * Anchor: a zero-height in-flow element placed exactly at the section boundary.
       * getBoundingClientRect() gives us the boundary's viewport Y at any scroll position.
       */}
      <div
        ref={anchorRef}
        style={{ position: 'relative', height: 0, pointerEvents: 'none' }}
      />

      {/*
       * Fixed canvas: paints the animated wave at the boundary.
       * position:fixed avoids overflow:hidden clipping from adjacent sections.
       * z-index 50 ensures it renders above all section content.
       */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          left: 0,
          zIndex: 50,
          pointerEvents: 'none',
          display: 'block',
          visibility: 'hidden',
        }}
      />
    </>
  )
}
