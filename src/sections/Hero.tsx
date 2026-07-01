import { useRef, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import WavesCanvas from '@/components/WavesCanvas'

export default function Hero() {
  const orbRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = orbRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: true })!

    /* ── Utilities ──────────────────────────────────────── */
    const clamp = (v: number, mn: number, mx: number) => Math.max(mn, Math.min(mx, v))
    const rand = (a: number, b: number) => a + Math.random() * (b - a)
    const easeOut = (v: number) => { v = clamp(v, 0, 1); return 1 - Math.pow(1 - v, 3) }
    const easeInOut = (v: number) => { v = clamp(v, 0, 1); return v < 0.5 ? 4 * v * v * v : 1 - Math.pow(-2 * v + 2, 3) / 2 }
    const noise = (n: number) => { const x = Math.sin(n * 127.1 + 311.7) * 43758.5453123; return x - Math.floor(x) }

    const mobile = matchMedia('(max-width: 760px)').matches
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches

    /* ── State ──────────────────────────────────────────── */
    let w = 1, h = 1, dpr = 1, cx = 0, cy = 0, baseR = 260
    let raf = 0, lastTime = performance.now()

    const controls = {
      baseSpin: 0.18, mouseSpin: 0.36, inertia: 0.90, outerGravity: 1.05, innerFluid: 1.05,
      implodeStrength: 1.55, implodePoint: 0.18, expandStrength: 0.90,
      explodeStrength: 1.55, explodePoint: 0.28, vanishPoint: 0.44, vanishSpeed: 1.35,
      centerText: '',
      textSize: 0.72, textAlpha: 0.82, textGlow: 0.72, textExplode: 0.82,
    }

    const pointer = { active: false, x: 0, y: 0, tx: 0, ty: 0, px: -9999, py: -9999, vx: 0, vy: 0, outer: 0, inner: 0, pulse: 0, last: 0 }
    const rotation = { x: -0.22, y: -0.62, z: -0.08, vx: 0.003, vy: 0.005, vz: 0.001 }
    const scrollFx = { value: 0, target: 0, progress: 0, implode: 0, expand: 0, explode: 0, vanish: 0, flash: 0 }

    type Dot = { x: number; y: number; z: number; stream?: number; phase: number; twinkle?: number; size: number; alpha: number }
    type ArcPoint = { x: number; y: number; z: number } | null
    type Arc = { points: ArcPoint[]; phase: number; alpha: number; size: number }

    const shellDots: Dot[] = [], dustDots: Dot[] = [], arcs: Arc[] = []

    /* ── 3-D helpers ────────────────────────────────────── */
    function rotate3(x: number, y: number, z: number, ax: number, ay: number, az: number) {
      let c = Math.cos(ax), s = Math.sin(ax)
      let y1 = y * c - z * s, z1 = y * s + z * c; y = y1; z = z1
      c = Math.cos(ay); s = Math.sin(ay)
      let x1 = x * c + z * s; z1 = -x * s + z * c; x = x1; z = z1
      c = Math.cos(az); s = Math.sin(az)
      x1 = x * c - y * s; y1 = x * s + y * c
      return { x: x1, y: y1, z }
    }

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, mobile ? 1.15 : 1.55)
      w = Math.max(1, innerWidth); h = Math.max(1, innerHeight)
      canvas.width = Math.floor(w * dpr); canvas.height = Math.floor(h * dpr)
      canvas.style.width = w + 'px'; canvas.style.height = h + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      cx = w * 0.5; cy = h * 0.5; baseR = Math.min(w, h) * (mobile ? 0.34 : 0.36)
    }

    function makeField() {
      shellDots.length = dustDots.length = arcs.length = 0
      const shellCount = mobile ? 1550 : 3900
      const dustCount = mobile ? 290 : 680
      for (let i = 0; i < shellCount; i++) {
        const u = Math.random()
        let theta = Math.PI * 2 * u
        const zVal = rand(-0.88, 0.88)
        const phi = Math.acos(zVal)
        const stream = Math.floor(rand(0, 6))
        const streamPhase = stream * 1.047 + noise(i) * 0.65
        theta += Math.sin(phi * 4.2 + streamPhase) * 0.33
        const broken = Math.sin(theta * 2.8 + phi * 5.4 + streamPhase) * 0.5 + 0.5
        if (noise(i * 3.3 + stream * 17.7) > 0.83 && broken < 0.62) continue
        if (Math.abs(zVal) < 0.18 && broken < 0.33) continue
        const rr = rand(0.89, 1.04) + Math.sin(theta * 5 + phi * 3) * 0.018
        const x = Math.sin(phi) * Math.cos(theta) * rr
        const y = Math.sin(phi) * Math.sin(theta) * rr
        const z = Math.cos(phi) * rr
        const eq = Math.pow(1 - Math.abs(zVal), 0.55)
        shellDots.push({ x, y, z, stream, phase: rand(0, Math.PI * 2), twinkle: rand(0.55, 1), size: Math.random() < 0.92 ? rand(0.50, 1.15) : rand(1.15, 1.95), alpha: rand(0.52, 1) * eq })
      }
      for (let i = 0; i < dustCount; i++) {
        const theta = rand(0, Math.PI * 2), phi = Math.acos(rand(-0.8, 0.8))
        const rr = Math.pow(rand(0.18, 0.82), 1.8); if (rr < 0.24 && Math.random() < 0.7) continue
        dustDots.push({ x: Math.sin(phi) * Math.cos(theta) * rr, y: Math.sin(phi) * Math.sin(theta) * rr, z: Math.cos(phi) * rr, phase: rand(0, Math.PI * 2), size: rand(0.42, 1), alpha: rand(0.16, 0.38) })
      }
      const arcCount = mobile ? 8 : 14
      for (let i = 0; i < arcCount; i++) {
        const points: ArcPoint[] = [], start = rand(0, Math.PI * 2), len = rand(Math.PI * 0.55, Math.PI * 1.55)
        const tx = rand(-1.2, 1.2), ty = rand(-1.1, 1.1), tz = rand(-0.55, 0.55), rr = rand(0.78, 1.08)
        for (let j = 0; j < 110; j++) {
          const t = j / 109
          const gap = Math.sin(t * Math.PI * rand(2, 5.5) + i) * 0.5 + 0.5
          if (gap < 0.22 || (t > 0.44 && t < 0.55 && i % 3 === 0)) { points.push(null); continue }
          const a = start + len * t
          points.push(rotate3(Math.cos(a) * rr, Math.sin(a) * rr, Math.sin(a * 1.7 + i) * 0.07, tx, ty, tz))
        }
        arcs.push({ points, phase: rand(0, Math.PI * 2), alpha: rand(0.24, 0.50), size: rand(0.38, 0.76) })
      }
    }

    function project(p: { x: number; y: number; z: number }, rotX: number, rotY: number, rotZ: number, scale: number) {
      const r = rotate3(p.x, p.y, p.z, rotX, rotY, rotZ)
      const persp = 1.55 / (1.55 - r.z * 0.34)
      return { x: cx + r.x * baseR * scale * persp, y: cy + r.y * baseR * scale * persp, z: r.z, p: persp }
    }

    function dot(x: number, y: number, r: number, a: number) {
      if (a <= 0.006 || r <= 0) return
      ctx.globalAlpha = a
      ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill()
    }

    function updateScrollFx() {
      const p = clamp(scrollFx.value, 0, 1)
      const explodePoint = clamp(controls.explodePoint, 0.20, 0.90)
      const implodePoint = clamp(Math.min(controls.implodePoint, explodePoint - 0.08), 0.08, 0.62)
      const peak = Math.max(0.09, implodePoint * 0.72)
      const releaseEnd = Math.max(implodePoint + 0.12, explodePoint - 0.04)
      const implodeIn = easeOut(p / peak)
      const implodeRelease = 1 - easeInOut((p - peak) / Math.max(0.001, releaseEnd - peak))
      const expand = easeOut((p - implodePoint) / Math.max(0.001, explodePoint - implodePoint))
      const explode = easeOut((p - explodePoint) / Math.max(0.001, 1 - explodePoint))
      const vanishPoint = clamp(Math.max(controls.vanishPoint, explodePoint + 0.03), explodePoint + 0.03, 0.99)
      const vanish = easeOut((p - vanishPoint) / Math.max(0.012, (1 - vanishPoint) / Math.max(0.25, controls.vanishSpeed)))
      scrollFx.progress = p
      scrollFx.implode = p <= peak ? implodeIn : Math.max(0, implodeRelease)
      scrollFx.expand = expand * (1 - explode * 0.15)
      scrollFx.explode = explode
      scrollFx.vanish = vanish
      scrollFx.flash += ((explode > 0.04 && vanish < 0.94 ? explode * (1 - vanish) : 0) - scrollFx.flash) * 0.12
    }

    function scrollWarp(p: { x: number; y: number; z: number }, meta: Dot | Arc | { phase: number }, motion: number, kind: string) {
      if (scrollFx.progress <= 0.002) return p
      const len = Math.hypot(p.x, p.y, p.z) || 1
      const ux = p.x / len, uy = p.y / len, uz = p.z / len
      const seed = noise((meta.phase || 0) * 53.7 + (('stream' in meta ? meta.stream : 0) || 0) * 17.1 + (kind === 'dust' ? 9.5 : 0))
      const ki = kind === 'dust' ? 1.22 : kind === 'arc' ? 0.70 : 1.05
      const ke = kind === 'dust' ? 0.76 : kind === 'arc' ? 0.42 : 0.60
      const kx = kind === 'dust' ? 1.18 : kind === 'arc' ? 0.58 : 0.92
      let mult = Math.max(0.08, 1 - scrollFx.implode * controls.implodeStrength * ki) + scrollFx.expand * controls.expandStrength * ke
      if (scrollFx.explode > 0.001) mult += scrollFx.explode * controls.explodeStrength * kx * (0.55 + seed * 0.90)
      const swirl = Math.sin(motion * 5.2 + (meta.phase || 0) * 4.7 + len * 3) * scrollFx.explode
      const tear = Math.cos(motion * 3.4 + (meta.phase || 0) * 2.9) * scrollFx.explode * (0.10 + seed * 0.16)
      return { x: p.x * mult + (-uy * swirl + uz * tear) * 0.34, y: p.y * mult + (ux * swirl - uz * tear) * 0.34, z: p.z * mult + (ux * tear + uy * swirl) * 0.24 }
    }

    function pointerWarp(pr: { x: number; y: number; z: number; p: number }, meta: Dot | Arc | { phase: number }, motion: number, scale: number, kind: string) {
      if (!pointer.active || (pointer.outer < 0.01 && pointer.inner < 0.01)) return pr
      const orbR = baseR * scale
      const mx = pointer.px - cx, my = pointer.py - cy, md = Math.hypot(mx, my) || 1
      const ux = mx / md, uy = my / md
      const px = pr.x - cx, py = pr.y - cy, pd = Math.hypot(px, py) || 1
      const pux = px / pd, puy = py / pd
      let x = pr.x, y = pr.y

      if (kind === 'shell' && pointer.outer > 0.01) {
        const facing = clamp((pux * ux + puy * uy - 0.32) / 0.68, 0, 1)
        const near = 1 - clamp(Math.hypot(pr.x - pointer.px, pr.y - pointer.py) / (orbR * 0.88), 0, 1)
        const band = clamp((pd / orbR - 0.36) / 0.70, 0, 1)
        const pull = Math.pow(clamp(pointer.outer * controls.outerGravity * Math.max(facing, near * 0.92) * band * (0.72 + noise((meta.phase || 0) * 41.7) * 0.92), 0, 1), 1.05)
        if (pull > 0.01) {
          const wave = Math.sin(motion * 3.6 + (meta.phase || 0) * 2.7) * orbR * 0.035
          const targetX = pointer.px + ux * orbR * 0.10, targetY = pointer.py + uy * orbR * 0.10
          x += (targetX - x) * pull * 0.80 * controls.outerGravity + (-uy * wave * pull)
          y += (targetY - y) * pull * 0.80 * controls.outerGravity + (ux * wave * pull)
        }
      }

      if (pointer.inner > 0.01) {
        const dx = pr.x - pointer.px, dy = pr.y - pointer.py
        const dist = Math.hypot(dx, dy) || 1
        const rx = dx / dist, ry = dy / dist
        const range = orbR * (kind === 'dust' ? 0.58 : 0.42)
        const near = 1 - clamp(dist / range, 0, 1)
        const push = Math.pow(clamp(pointer.inner * controls.innerFluid * near * (0.62 + noise((meta.phase || 0) * 61.3) * 0.78), 0, 1), 0.72)
        if (push > 0.01) {
          const curl = Math.sin(motion * 6.1 + (meta.phase || 0) * 5.3 + pd * 0.015)
          const strength = orbR * (kind === 'dust' ? 0.30 : 0.22) * controls.innerFluid
          x += rx * strength * push + (-ry * curl * orbR * 0.095 * push)
          y += ry * strength * push + (rx * curl * orbR * 0.095 * push)
        }
      }
      return { x, y, z: pr.z, p: pr.p }
    }

    function drawText(motion: number, scale: number, keep: number) {
      const label = String(controls.centerText || '').trim()
      if (!label) return
      const vanish = clamp(scrollFx.vanish, 0, 0.98)
      const baseAlpha = clamp(controls.textAlpha, 0, 1) * keep * (1 - vanish)
      if (baseAlpha <= 0.01) return

      const implodeScale = 1 - scrollFx.implode * controls.implodeStrength * 0.16
      const expandScale = 1 + scrollFx.expand * controls.expandStrength * 0.10
      const explodeScale = 1 + scrollFx.explode * (controls.textExplode || 1) * 0.32
      const pulse = Math.max(0.18, implodeScale * expandScale * explodeScale)
      const fontSize = Math.max(22, baseR * 0.23 * controls.textSize * scale * pulse)
      const yLift = Math.sin(motion * 1.25) * 1.8 - baseR * scrollFx.implode * 0.03
      const explode = easeOut(scrollFx.explode)
      const spread = baseR * controls.explodeStrength * (controls.textExplode || 1) * explode
      const implodePull = baseR * scrollFx.implode * controls.implodeStrength * 0.055

      ctx.save()
      ctx.globalCompositeOperation = 'screen'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.font = `950 ${fontSize}px Inter, ui-sans-serif, system-ui, sans-serif`
      ctx.lineJoin = 'round'
      ctx.shadowColor = 'rgba(255,255,255,.72)'

      const chars = Array.from(label)
      const widths = chars.map(ch => Math.max(2, ctx.measureText(ch).width))
      const gap = fontSize * 0.025
      const total = widths.reduce((a, b) => a + b, 0) + gap * Math.max(0, chars.length - 1)
      let cursor = -total / 2

      for (let i = 0; i < chars.length; i++) {
        const ch = chars[i]
        const localX = cursor + widths[i] / 2
        cursor += widths[i] + gap
        const seed = noise((i + 1) * 91.17 + label.length * 13.9)
        const angle = -Math.PI * 0.5 + (i - (chars.length - 1) / 2) * 0.72 + (seed - 0.5) * 1.05
        const side = chars.length <= 1 ? 0 : (i / (chars.length - 1) - 0.5)
        const jitter = Math.sin(motion * (2.6 + seed * 2.1) + seed * 9.0) * baseR * 0.018 * explode
        const x = cx + localX * (1 - scrollFx.implode * 0.34) + Math.cos(angle) * spread * (0.32 + seed * 0.85) + side * spread * 0.42
        const y = cy + yLift + Math.sin(angle) * spread * (0.30 + seed * 0.78) + jitter - implodePull
        const rot = (seed - 0.5) * 1.55 * explode + side * 0.28 * explode
        const charAlpha = baseAlpha * (1 - explode * 0.18) * (1 - vanish * 0.42)

        ctx.save()
        ctx.translate(x, y)
        ctx.rotate(rot)
        const width = Math.max(fontSize, widths[i])
        const g = ctx.createLinearGradient(-width * 0.55, -fontSize * 0.45, width * 0.55, fontSize * 0.55)
        g.addColorStop(0, 'rgba(255,255,255,.98)')
        g.addColorStop(0.55, 'rgba(248,246,238,.76)')
        g.addColorStop(1, 'rgba(255,255,255,.95)')
        ctx.shadowBlur = 18 * controls.textGlow * (1 + explode * 0.7)
        ctx.globalAlpha = charAlpha * 0.20
        ctx.lineWidth = Math.max(1.2, fontSize * 0.045)
        ctx.strokeStyle = 'rgba(248,246,238,.88)'
        ctx.strokeText(ch, 0, 0)
        ctx.globalAlpha = charAlpha
        ctx.shadowBlur = 9 * controls.textGlow * (1 + explode * 0.55)
        ctx.fillStyle = g
        ctx.fillText(ch, 0, 0)
        ctx.restore()
      }

      const cursorOn = Math.floor(performance.now() / 520) % 2 === 0
      if (cursorOn && scrollFx.explode < 0.05 && scrollFx.vanish < 0.05) {
        const cursorX = cx + total / 2 + fontSize * 0.13
        ctx.globalAlpha = baseAlpha * 0.78
        ctx.shadowBlur = 8 * controls.textGlow
        ctx.strokeStyle = 'rgba(248,246,238,.82)'
        ctx.lineWidth = Math.max(1.2, fontSize * 0.028)
        ctx.beginPath()
        ctx.moveTo(cursorX, cy + yLift - fontSize * 0.35)
        ctx.lineTo(cursorX, cy + yLift + fontSize * 0.35)
        ctx.stroke()
      }
      ctx.restore()
    }

    function draw(time?: number) {
      const now = time ?? performance.now()
      const dt = Math.min(50, now - lastTime); lastTime = now
      pointer.x += (pointer.tx - pointer.x) * 0.095
      pointer.y += (pointer.ty - pointer.y) * 0.095
      pointer.vx *= 0.88; pointer.vy *= 0.88
      scrollFx.value += (scrollFx.target - scrollFx.value) * 0.065; updateScrollFx()

      const idle = reduced ? 0 : controls.baseSpin
      const mouseEnergy = pointer.active ? clamp(Math.hypot(pointer.vx, pointer.vy) * controls.mouseSpin, 0, 1.05) : 0
      const dtSec = dt * 0.001
      rotation.vx += (-idle * 0.030 + pointer.vy * controls.mouseSpin * 0.20) * dtSec
      rotation.vy += (idle * 0.050 + pointer.vx * controls.mouseSpin * 0.26) * dtSec
      rotation.vz += (idle * 0.010 + (pointer.vx - pointer.vy) * controls.mouseSpin * 0.050) * dtSec
      rotation.vx *= controls.inertia; rotation.vy *= controls.inertia; rotation.vz *= controls.inertia
      rotation.x += rotation.vx * (1 + mouseEnergy * 0.22)
      rotation.y += rotation.vy * (1 + mouseEnergy * 0.28)
      rotation.z += rotation.vz * (1 + mouseEnergy * 0.15)

      const pDist = Math.hypot(pointer.px - cx, pointer.py - cy)
      const orbEdge = baseR * (1 + scrollFx.value * 0.04)
      const outside = pointer.active ? clamp((pDist - orbEdge * 0.72) / (orbEdge * 0.58), 0, 1) * (1 - clamp((pDist - orbEdge * 1.78) / (orbEdge * 0.50), 0, 1)) : 0
      const inside = pointer.active ? 1 - clamp(pDist / (orbEdge * 0.82), 0, 1) : 0
      pointer.outer += (outside - pointer.outer) * 0.14
      pointer.inner += (inside - pointer.inner) * 0.18
      pointer.pulse += ((pointer.outer + pointer.inner) - pointer.pulse) * 0.10

      ctx.clearRect(0, 0, w, h)
      const motion = reduced ? 0 : now * 0.001
      const scale = Math.max(0.22, 1 + scrollFx.value * 0.01 - scrollFx.implode * controls.implodeStrength * 0.19 + scrollFx.expand * controls.expandStrength * 0.05)
      const rotX = rotation.x + pointer.y * 0.085 + Math.sin(motion * 0.34) * 0.045
      const rotY = rotation.y + pointer.x * 0.105
      const rotZ = rotation.z + Math.sin(motion * 0.22) * 0.038
      const keep = scrollFx.progress < 0.02 ? 1 : 1 - clamp(scrollFx.vanish, 0, 0.96)

      ctx.save()
      ctx.globalCompositeOperation = 'source-over'
      const coreR = Math.max(8, baseR * (0.50 - scrollFx.implode * 0.20 + scrollFx.explode * 0.24))
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, coreR)
      grad.addColorStop(0, 'rgba(0,0,0,.32)')
      grad.addColorStop(0.55, 'rgba(0,0,0,.19)')
      grad.addColorStop(1, 'rgba(0,0,0,0)')
      ctx.fillStyle = grad; ctx.globalAlpha = 0.75
      ctx.beginPath(); ctx.arc(cx, cy, coreR, 0, Math.PI * 2); ctx.fill()
      ctx.globalAlpha = 1

      drawText(motion, scale, keep)
      ctx.fillStyle = '#fffdf6'; ctx.shadowColor = 'rgba(255,255,255,.45)'; ctx.shadowBlur = 0

      for (const arc of arcs) {
        for (let i = 0; i < arc.points.length; i++) {
          const ap = arc.points[i]; if (!ap) continue
          const warped = scrollWarp({ x: ap.x, y: ap.y, z: ap.z + Math.sin(motion * 0.42 + arc.phase + i * 0.035) * 0.018 }, { phase: arc.phase + i * 0.013 }, motion, 'arc')
          const pr = project(warped, rotX, rotY, rotZ, scale)
          const rim = clamp((pr.z + 1.08) / 2.16, 0, 1)
          dot(pr.x, pr.y, arc.size * pr.p, Math.min(1, arc.alpha * 1.28 * (0.32 + rim * 0.80) * (0.72 + Math.sin(motion * 2 + i * 0.8) * 0.12) * keep))
        }
      }

      for (const d of dustDots) {
        const wobble = Math.sin(motion * 0.65 + d.phase) * 0.018
        const p = scrollWarp({ x: d.x * (1 + wobble), y: d.y, z: d.z }, d, motion, 'dust')
        const pr = pointerWarp(project(p, rotX * 0.96, rotY * 1.08, rotZ, scale), d, motion, scale, 'dust')
        const depth = clamp((pr.z + 1) / 2, 0, 1)
        const tw = 0.7 + Math.sin(motion * 2.1 + d.phase) * 0.18
        dot(pr.x, pr.y, d.size * pr.p, Math.min(1, d.alpha * 1.32 * tw * (0.28 + depth * 0.62) * keep))
      }

      for (const d of shellDots) {
        const wave = Math.sin(motion * (0.55 + (d.stream || 0) * 0.015) + d.phase + d.y * 3) * 0.020
        const swirl = Math.cos(motion * 0.38 + d.phase + d.x * 2) * 0.012
        const p = scrollWarp({ x: d.x + d.y * swirl, y: d.y + wave, z: d.z - d.x * swirl }, d, motion, 'shell')
        const pr = pointerWarp(project(p, rotX, rotY, rotZ, scale), d, motion, scale, 'shell')
        const depth = clamp((pr.z + 1.1) / 2.2, 0, 1)
        const rim = Math.hypot(pr.x - cx, pr.y - cy) / (baseR * scale)
        const rimBoost = clamp((rim - 0.48) / 0.46, 0, 1)
        const flicker = 0.76 + Math.sin(motion * (1.4 + (d.twinkle || 1)) + d.phase * 3) * 0.18
        const glow = 1.18 + scrollFx.explode * controls.explodeStrength * 1.15
        const alpha = d.alpha * 1.55 * flicker * (0.23 + depth * 0.80) * (0.46 + rimBoost * 0.88) * glow * keep
        const size = d.size * pr.p * (depth > 0.63 ? 1.08 : 0.80) * (1 + scrollFx.explode * controls.explodeStrength * 0.52)
        dot(pr.x, pr.y, size, scrollFx.progress < 0.02 ? Math.min(Math.max(alpha, 0.105), 0.96) : Math.min(alpha, 0.96))
      }

      ctx.shadowBlur = 7; ctx.shadowColor = 'rgba(255,255,255,.55)'
      for (let i = 0; i < shellDots.length; i += 83) {
        const d = shellDots[i]
        const pr = pointerWarp(project(scrollWarp(d, d, motion, 'shell'), rotX, rotY, rotZ, scale), d, motion, scale, 'shell')
        const depth = clamp((pr.z + 1.1) / 2.2, 0, 1); if (depth < 0.56) continue
        dot(pr.x, pr.y, 1.15 * pr.p, scrollFx.progress < 0.02 ? Math.max(0.48 * depth * keep, 0.11) : 0.40 * depth * keep)
      }
      ctx.shadowBlur = 0

      if (pointer.active && pointer.pulse > 0.02) {
        ctx.save(); ctx.globalCompositeOperation = 'screen'
        ctx.strokeStyle = 'rgba(248,246,238,.42)'; ctx.fillStyle = '#f8f6ee'
        ctx.globalAlpha = 0.08 + pointer.pulse * 0.14
        ctx.beginPath(); ctx.arc(pointer.px, pointer.py, baseR * (0.05 + pointer.pulse * 0.055), 0, Math.PI * 2); ctx.stroke()
        dot(pointer.px, pointer.py, 1.6 + pointer.pulse * 2.2, 0.20 + pointer.pulse * 0.36); ctx.restore()
      }
      if (scrollFx.flash > 0.02) {
        ctx.save(); ctx.globalCompositeOperation = 'screen'
        ctx.strokeStyle = 'rgba(248,246,238,.28)'; ctx.lineWidth = 1
        ctx.globalAlpha = scrollFx.flash * 0.34
        ctx.beginPath(); ctx.arc(cx, cy, baseR * (0.76 + scrollFx.explode * controls.explodeStrength * 0.55), 0, Math.PI * 2); ctx.stroke()
        ctx.globalAlpha = scrollFx.flash * 0.13
        ctx.beginPath(); ctx.arc(cx, cy, baseR * (0.45 + scrollFx.explode * controls.explodeStrength * 0.36), 0, Math.PI * 2); ctx.stroke()
        ctx.restore()
      }
      ctx.restore()
      raf = requestAnimationFrame(draw)
    }

    /* ── Typewriter ─────────────────────────────────────── */
    let typewriterAlive = true
    const sleep = (ms: number) => new Promise(r => setTimeout(r, ms))

    async function typeInto(text: string, opts = { min: 58, max: 185 }) {
      for (const ch of Array.from(text)) {
        if (!typewriterAlive) return
        controls.centerText += ch
        await sleep(rand(opts.min, opts.max))
      }
    }
    async function deleteFrom(opts = { min: 32, max: 96 }) {
      while (controls.centerText.length && typewriterAlive) {
        controls.centerText = Array.from(controls.centerText).slice(0, -1).join('')
        await sleep(rand(opts.min, opts.max))
      }
    }
    async function runTypewriter() {
      await sleep(520)
      while (typewriterAlive) {
        controls.centerText = ''
        await typeInto('Hello...', { min: 70, max: 210 })
        await sleep(760)
        await deleteFrom({ min: 34, max: 90 })
        await sleep(260)
        await typeInto('Welcome to', { min: 52, max: 165 })
        await sleep(760)
        await deleteFrom({ min: 30, max: 82 })
        await sleep(240)
        await typeInto('VelvetY', { min: 78, max: 220 })
        await sleep(1800)
        await deleteFrom({ min: 30, max: 82 })
        await sleep(300)
      }
    }

    /* ── Intro scroll state ─────────────────────────────── */
    const introState = { virtualP: 0, unlocked: false, touchY: null as number | null }
    const ORB_UNLOCK_POINT = 0.62
    const PIANO_START = 0.62
    const PIANO_LAST_KEY_START = 0.82
    const PIANO_SPAN = 0.16

    function introMaxScroll() {
      const intro = document.querySelector('.intro-scroll')
      return intro ? Math.max(1, intro.scrollHeight - innerHeight) : Math.max(1, document.documentElement.scrollHeight - innerHeight)
    }

    /** Past intro zone → orb stops blocking clicks on lower sections */
    function updateOrbPassThrough() {
      const max = introMaxScroll()
      canvas.classList.toggle('pass-through', scrollY > max - 2)
    }

    function setIntroProgress(p: number) {
      p = clamp(p, 0, 1)
      scrollFx.target = p
      document.documentElement.style.setProperty('--p', p > 0.995 ? '1' : p.toFixed(4))

      const guideOpacity = p < PIANO_START - 0.001 ? 0 : 1
      document.documentElement.style.setProperty('--white-guide-opacity', guideOpacity.toFixed(3))

      const keys = Array.from(document.querySelectorAll<HTMLElement>('.piano-key'))
      const visibleKeys = keys.filter(k => getComputedStyle(k).display !== 'none')
      const count = Math.max(1, visibleKeys.length)
      visibleKeys.forEach((key, i) => {
        const stagger = count <= 1 ? 0 : (PIANO_LAST_KEY_START - PIANO_START) / (count - 1)
        const start = PIANO_START + i * stagger
        const t = easeInOut((p - start) / PIANO_SPAN)
        const scaleY = Math.max(0.0001, 1 - t)
        const pianoActive = p >= PIANO_START - 0.001 && t < 0.985
        key.style.transform = `scaleY(${scaleY})`
        key.style.opacity = t > 0.985 ? '0' : '1'
        key.style.borderRightColor = pianoActive ? 'rgba(255,255,255,.10)' : 'rgba(255,255,255,0)'
        key.style.boxShadow = pianoActive ? '0 22px 70px rgba(0,0,0,.58)' : 'none'
      })
    }

    function syncScrollDriven() {
      const max = introMaxScroll()
      const pageP = clamp(scrollY / max, 0, 1)
      if (scrollY <= 1 && !introState.unlocked) {
        setIntroProgress(introState.virtualP)
        updateOrbPassThrough()
        return
      }
      if (scrollY <= 1 && introState.unlocked && introState.virtualP < ORB_UNLOCK_POINT) {
        introState.unlocked = false
        setIntroProgress(introState.virtualP)
        updateOrbPassThrough()
        return
      }
      const p = ORB_UNLOCK_POINT + pageP * (1 - ORB_UNLOCK_POINT)
      setIntroProgress(p)
      updateOrbPassThrough()
    }

    function consumeDelta(deltaY: number, event?: Event) {
      const atTop = scrollY <= 1
      const goingUp = deltaY < 0
      if (atTop && (!introState.unlocked || (goingUp && introState.virtualP > 0))) {
        if (event && (event as WheelEvent).cancelable) event.preventDefault()
        const max = introMaxScroll()
        introState.virtualP = clamp(introState.virtualP + deltaY / (max * 0.78), 0, ORB_UNLOCK_POINT)
        introState.unlocked = introState.virtualP >= ORB_UNLOCK_POINT - 0.0008
        setIntroProgress(introState.virtualP)
        return true
      }
      if (!atTop && goingUp && scrollY < 4) introState.virtualP = ORB_UNLOCK_POINT
      return false
    }

    /* ── Pointer events ─────────────────────────────────── */
    function onPointerMove(e: PointerEvent) {
      const nx = (e.clientX / innerWidth - 0.5) * 2
      const ny = -(e.clientY / innerHeight - 0.5) * 2
      const now = performance.now()
      const moveDt = Math.max(12, now - (pointer.last || now))
      if (pointer.active) {
        pointer.vx += clamp((nx - pointer.tx) / moveDt * 1000, -1.6, 1.6)
        pointer.vy += clamp((ny - pointer.ty) / moveDt * 1000, -1.6, 1.6)
      }
      pointer.px = e.clientX; pointer.py = e.clientY
      pointer.active = true; pointer.last = now; pointer.tx = nx; pointer.ty = ny
    }
    function onPointerLeave() { pointer.active = false }

    function onWheel(e: WheelEvent) {
      if (consumeDelta(e.deltaY, e)) return
      // Past intro: orb is pass-through so native wheel won't move the page — drive manually
      if (canvas.classList.contains('pass-through')) {
        if (e.cancelable) e.preventDefault()
        window.scrollBy(0, e.deltaY)
      }
      requestAnimationFrame(syncScrollDriven)
    }
    function onTouchStart(e: TouchEvent) {
      introState.touchY = e.touches[0]?.clientY ?? null
    }
    function onTouchMove(e: TouchEvent) {
      const t = e.touches[0]; if (!t || introState.touchY === null) return
      const deltaY = introState.touchY - t.clientY
      introState.touchY = t.clientY
      if (consumeDelta(deltaY, e)) return
      if (canvas.classList.contains('pass-through')) {
        if (e.cancelable) e.preventDefault()
        window.scrollBy(0, deltaY)
      }
    }
    function onKeyDown(e: KeyboardEvent) {
      const keys: Record<string, number> = { ArrowDown: 80, PageDown: 360, ' ': 360, ArrowUp: -80, PageUp: -360, Home: -9999 }
      if (!(e.key in keys)) return
      if (e.key === 'Home') introState.virtualP = 0
      consumeDelta(keys[e.key], e)
    }

    function onResize() { resize() }
    function onScroll() { syncScrollDriven() }
    function onVisibilityChange() {
      if (document.hidden) cancelAnimationFrame(raf)
      else { lastTime = performance.now(); raf = requestAnimationFrame(draw) }
    }

    /* ── Boot ───────────────────────────────────────────── */
    resize(); makeField(); syncScrollDriven(); updateOrbPassThrough()
    raf = requestAnimationFrame(draw)
    runTypewriter()

    addEventListener('resize', onResize, { passive: true })
    addEventListener('scroll', onScroll, { passive: true })
    addEventListener('wheel', onWheel, { passive: false })
    addEventListener('touchstart', onTouchStart, { passive: true })
    addEventListener('touchmove', onTouchMove, { passive: false })
    addEventListener('keydown', onKeyDown, { passive: false })
    addEventListener('pointermove', onPointerMove, { passive: true })
    addEventListener('pointerleave', onPointerLeave, { passive: true })
    document.addEventListener('visibilitychange', onVisibilityChange)

    return () => {
      typewriterAlive = false
      cancelAnimationFrame(raf)
      removeEventListener('resize', onResize)
      removeEventListener('scroll', onScroll)
      removeEventListener('wheel', onWheel)
      removeEventListener('touchstart', onTouchStart)
      removeEventListener('touchmove', onTouchMove)
      removeEventListener('keydown', onKeyDown)
      removeEventListener('pointermove', onPointerMove)
      removeEventListener('pointerleave', onPointerLeave)
      document.removeEventListener('visibilitychange', onVisibilityChange)
      document.documentElement.style.removeProperty('--p')
      document.documentElement.style.removeProperty('--white-guide-opacity')
      canvas.classList.remove('pass-through')
    }
  }, [])

  return (
    <>
      {/* Waves grid overlay — fixed, behind orb */}
      <WavesCanvas />

      {/* Particle orb canvas — fixed, covers viewport */}
      <canvas
        ref={orbRef}
        className="orb-canvas"
        aria-label="Animated VelvetY orbital particle field"
      />

      {/* 200vh scroll container — drives the intro animation */}
      <section className="intro-scroll" aria-label="VelvetY animated intro">
        <div className="site-shell">
          <div className="white-guide" aria-hidden="true" />

          <Navigation />

          <main className="hero" aria-label="VelvetY homepage hero" />

          {/* Piano-key curtain */}
          <div className="piano-curtain" aria-hidden="true">
            <span className="piano-key k1" />
            <span className="piano-key k2" />
            <span className="piano-key k3" />
            <span className="piano-key k4" />
            <span className="piano-key k5" />
            <span className="piano-key k6" />
          </div>

          <div className="scroll-hint">scroll to interact</div>
        </div>
      </section>
    </>
  )
}
