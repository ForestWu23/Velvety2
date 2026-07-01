import { useEffect, useRef, useState } from 'react'
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
}

export default function RainEffect({
  className,
  citySrc = asset('/assets/images/city-footer.jpg'),
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const wrapRef   = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const wrap = wrapRef.current
    if (!wrap) return

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActive(true)
      },
      { rootMargin: '200px' },
    )
    io.observe(wrap)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!active) return

    const canvas = canvasRef.current
    const wrap   = wrapRef.current
    if (!canvas || !wrap) return

    let alive = true
    let raindrops: InstanceType<typeof Raindrops> | null = null
    let renderer: InstanceType<typeof RainRenderer> | null = null

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

        const dpi = window.devicePixelRatio || 1
        const w   = Math.max(1, wrap.clientWidth)
        const h   = Math.max(1, wrap.clientHeight)
        canvas.width  = w * dpi
        canvas.height = h * dpi
        canvas.style.width  = `${w}px`
        canvas.style.height = `${h}px`

        raindrops = new Raindrops(
          canvas.width,
          canvas.height,
          dpi,
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

    const onResize = () => {
      if (!wrap || !canvas) return
      const dpi = window.devicePixelRatio || 1
      const w   = Math.max(1, wrap.clientWidth)
      const h   = Math.max(1, wrap.clientHeight)
      canvas.width  = w * dpi
      canvas.height = h * dpi
      canvas.style.width  = `${w}px`
      canvas.style.height = `${h}px`
    }

    const ro = new ResizeObserver(onResize)
    ro.observe(wrap)

    return () => {
      alive = false
      ro.disconnect()
      raindrops?.destroy()
      renderer?.destroy()
      raindrops = null
      renderer = null
    }
  }, [active, citySrc])

  return (
    <div
      ref={wrapRef}
      className={className}
      style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}
      aria-hidden
    >
      <canvas
        ref={canvasRef}
        style={{ display: 'block', width: '100%', height: '100%' }}
      />
    </div>
  )
}
