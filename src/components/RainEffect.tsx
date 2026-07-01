import { useEffect, useRef } from 'react'
import Raindrops from '@/rain/raindrops'
import RainRenderer from '@/rain/rain-renderer'
import loadImages from '@/rain/image-loader'
import { random } from '@/rain/random'
import times from '@/rain/times'

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '')
const asset = (path: string) => `${BASE}${path}`

type Props = {
  className?: string
  citySrc?: string
  /** Lock rain to the viewport (for window-mask sections). */
  fixed?: boolean
  /** When set, skips internal IntersectionObserver. */
  active?: boolean
  zIndex?: number
}

export default function RainEffect({
  className,
  citySrc = asset('/assets/images/city-footer.jpg'),
  fixed = false,
  active = true,
  zIndex,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const wrapRef   = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!active) return

    const canvas = canvasRef.current
    const wrap   = wrapRef.current
    if (!canvas || !wrap) return

    let alive = true
    let raindrops: InstanceType<typeof Raindrops> | null = null
    let renderer: InstanceType<typeof RainRenderer> | null = null

    const measure = () => {
      if (fixed) return { w: window.innerWidth, h: window.innerHeight }
      return { w: Math.max(1, wrap.clientWidth), h: Math.max(1, wrap.clientHeight) }
    }

    const resize = () => {
      const dpi = window.devicePixelRatio || 1
      const { w, h } = measure()
      canvas.width  = w * dpi
      canvas.height = h * dpi
      canvas.style.width  = `${w}px`
      canvas.style.height = `${h}px`
    }

    const init = async () => {
      try {
        const images = await loadImages([
          { name: 'dropAlpha', src: asset('/assets/rain/drop-alpha.png') },
          { name: 'dropColor', src: asset('/assets/rain/drop-color.png') },
          { name: 'dropShine', src: asset('/assets/rain/drop-shine2.png') },
        ])
        if (!alive) return

        const city = new Image()
        city.src = citySrc
        await city.decode()
        if (!alive) return

        resize()

        raindrops = new Raindrops(
          canvas.width,
          canvas.height,
          window.devicePixelRatio || 1,
          images.dropAlpha.img,
          images.dropColor.img,
          {
            minR: 18,
            maxR: 42,
            rainChance: 0.35,
            rainLimit: 6,
            dropletsRate: 24,
            globalTimeScale: 0.5,
            trailRate: 1,
            dropFallMultiplier: 0.25,
            trailScaleRange: [0.2, 0.35],
            autoShrink: true,
            spawnArea: [-0.2, 0.95],
            collisionRadius: 0.45,
            collisionRadiusIncrease: 0,
            collisionBoost: 0.35,
            collisionBoostMultiplier: 0.025,
          },
        )

        times(40, () => {
          raindrops?.addDrop(
            raindrops.createDrop({
              x: random(canvas.width),
              y: random(canvas.height),
              r: random(8, 18),
            }),
          )
        })

        renderer = new RainRenderer(
          canvas,
          raindrops.canvas,
          city,
          city,
          images.dropShine.img,
          {
            renderShadow: true,
            minRefraction: 128,
            maxRefraction: 512,
            brightness: 1.04,
            alphaMultiply: 7,
            alphaSubtract: 3,
          },
        )
      } catch (err) {
        console.warn('[RainEffect] init failed:', err)
      }
    }

    init()

    const onResize = () => resize()
    const ro = fixed ? null : new ResizeObserver(onResize)
    if (ro) ro.observe(wrap)
    if (fixed) window.addEventListener('resize', onResize)

    return () => {
      alive = false
      ro?.disconnect()
      if (fixed) window.removeEventListener('resize', onResize)
      raindrops?.destroy()
      renderer?.destroy()
      raindrops = null
      renderer = null
    }
  }, [active, citySrc, fixed])

  if (!active) return null

  return (
    <div
      ref={wrapRef}
      className={className}
      style={{
        position: fixed ? 'fixed' : 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        ...(zIndex != null ? { zIndex } : {}),
      }}
      aria-hidden
    >
      <canvas
        ref={canvasRef}
        style={{ display: 'block', width: '100%', height: '100%' }}
      />
    </div>
  )
}
