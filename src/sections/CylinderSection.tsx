import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '')
const cyl  = (f: string) => `${BASE}/assets/cylinder/${f}`

/* 8 landscape project screens — Brands Redesign cylinder */
const PHOTOS = [
  cyl('amazon-landing.jpg'),
  cyl('buyerfolio.jpg'),
  cyl('green-apple.jpg'),
  cyl('huagen.png'),
  cyl('kindle.png'),
  cyl('micro-ingredients.png'),
  cyl('nutribites.png'),
  cyl('ridgeline-homes.png'),
]

/** Crop texture like object-fit: cover for panel aspect ratio */
function fitTextureCover(texture: THREE.Texture, image: HTMLImageElement, panelAspect: number) {
  const imageAspect = image.width / image.height
  texture.colorSpace = THREE.SRGBColorSpace
  if (imageAspect > panelAspect) {
    const scale = panelAspect / imageAspect
    texture.repeat.set(scale, 1)
    texture.offset.set((1 - scale) / 2, 0)
  } else {
    const scale = imageAspect / panelAspect
    texture.repeat.set(1, scale)
    texture.offset.set(0, (1 - scale) / 2)
  }
}

export default function CylinderSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const hintRef   = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const hint   = hintRef.current
    if (!canvas) return

    /* ── Scene ────────────────────────────────────────────── */
    const scene = new THREE.Scene()
    scene.fog = new THREE.Fog(0xf5f5f3, 7, 20)   // matches #f5f5f3 page white

    const sizes = { width: window.innerWidth, height: window.innerHeight }

    const camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height, 0.1, 100)
    camera.position.set(0, 0.25, 8.8)
    scene.add(camera)

    /* alpha:true → transparent canvas; cream bg div shows through */
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.outputColorSpace = THREE.SRGBColorSpace

    /* ── Cylinder geometry (identical to HTML) ───────────── */
    const group      = new THREE.Group()
    const innerGroup = new THREE.Group()
    group.add(innerGroup)
    scene.add(group)

    const textureLoader = new THREE.TextureLoader()

    const panelCount  = PHOTOS.length
    const radius      = 4.35
    /* landscape panels — width < arc spacing to avoid seam overlap */
    const panelWidth  = 2.88
    const panelHeight = 1.88
    const panelAspect = panelWidth / panelHeight
    const arcAngle    = panelWidth / radius
    const panels: THREE.Mesh[] = []
    const textures: THREE.Texture[] = []

    /* default diagonal tilt: left high, right low */
    const DEFAULT_TILT_X = -0.08
    const DEFAULT_TILT_Z =  0.13
    /* auto-spin: counter-clockwise (panels drift right → left on screen) */
    const AUTO_SPIN = 0.0015

    function createCurvedPanelGeometry(w: number, h: number, r: number, arc: number) {
      const geo = new THREE.PlaneGeometry(w, h, 36, 6)
      const pos = geo.attributes.position as THREE.BufferAttribute
      const uv  = geo.attributes.uv       as THREE.BufferAttribute
      for (let i = 0; i < pos.count; i++) {
        const theta = (uv.getX(i) - 0.5) * arc
        pos.setXYZ(i, Math.sin(theta) * r, pos.getY(i), r - Math.cos(theta) * r)
      }
      /* inward panels are viewed from outside — flip U so screenshots read L→R */
      for (let i = 0; i < uv.count; i++) {
        uv.setX(i, 1 - uv.getX(i))
      }
      geo.computeVertexNormals()
      return geo
    }
    const geometry = createCurvedPanelGeometry(panelWidth, panelHeight, radius, arcAngle)

    PHOTOS.forEach((url, index) => {
      const texture = textureLoader.load(url, (tex) => {
        const img = tex.image as HTMLImageElement
        if (img?.width) fitTextureCover(tex, img, panelAspect)
        tex.anisotropy = renderer.capabilities.getMaxAnisotropy()
      })
      textures.push(texture)
      const material = new THREE.MeshBasicMaterial({
        map: texture,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0,
        depthWrite: true,
      })
      const panel = new THREE.Mesh(geometry, material)
      const angle = (index / panelCount) * Math.PI * 2
      panel.position.x    = Math.sin(angle) * radius
      panel.position.z    = Math.cos(angle) * radius
      panel.rotation.y    = angle + Math.PI
      panel.userData.baseAngle  = angle
      panel.userData.phase      = Math.random() * Math.PI * 2
      panel.userData.fadeStart  = performance.now() + index * 80
      innerGroup.add(panel)
      panels.push(panel)
    })

    scene.add(new THREE.AmbientLight(0xffffff, 2.25))

    /* ── State (mirrors HTML) ────────────────────────────── */
    const state = {
      targetY: 0,        currentY: 0,
      autoVelocity: AUTO_SPIN,
      scrollVelocity: 0,
      dragVelocity: 0,
      targetX: DEFAULT_TILT_X,    currentX: DEFAULT_TILT_X,
      targetZ: DEFAULT_TILT_Z,      currentZ: DEFAULT_TILT_Z,
      cameraX: 0,        cameraY: 0,
      scrollDirection: 1,
      lastScrollY: window.scrollY,
      isDragging: false,
      lastPointerX: 0,   lastPointerY: 0,
    }

    const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v))

    /* Push cylinder up-right; diagonal tilt clears bottom-left copy */
    function layout() {
      group.position.x  = sizes.width < 760 ? 0.25 : 1.75
      group.position.y  = sizes.width < 760 ? 0.75 : 0.25
      camera.position.z = sizes.width < 760 ? 10.7 : 8.8
      camera.updateProjectionMatrix()
    }
    layout()

    /* ── Pointer events (identical to HTML) ──────────────── */
    function onPointerDown(e: PointerEvent) {
      state.isDragging   = true
      state.lastPointerX = e.clientX
      state.lastPointerY = e.clientY
      state.dragVelocity = 0
      if (hint) hint.style.opacity = '0'
      canvas.setPointerCapture(e.pointerId)
      canvas.style.cursor = 'grabbing'
    }
    function onPointerMove(e: PointerEvent) {
      if (!state.isDragging) return
      const dx = e.clientX - state.lastPointerX
      const dy = e.clientY - state.lastPointerY
      state.lastPointerX = e.clientX
      state.lastPointerY = e.clientY

      state.targetY += dx * 0.0068
      state.targetX += dy * 0.00125
      state.targetZ += dx * -0.00042
      state.cameraX += dx * -0.00022
      state.cameraY += dy * 0.00024
      state.dragVelocity = dx * 0.00082

      state.targetX = clamp(state.targetX, -0.28,  0.22)
      state.targetZ = clamp(state.targetZ, -0.095, 0.095)
      state.cameraX = clamp(state.cameraX, -0.085, 0.085)
      state.cameraY = clamp(state.cameraY, -0.075, 0.095)
    }
    function onPointerUp() {
      state.isDragging   = false
      state.autoVelocity = clamp(state.dragVelocity, -0.035, 0.035)
      canvas.style.cursor = 'grab'
    }

    canvas.addEventListener('pointerdown',   onPointerDown)
    canvas.addEventListener('pointermove',   onPointerMove)
    canvas.addEventListener('pointerup',     onPointerUp)
    canvas.addEventListener('pointercancel', onPointerUp)

    /* ── Scroll tracking (mirrors HTML updateFromScroll) ─── */
    function onScroll() {
      const delta = window.scrollY - state.lastScrollY
      state.lastScrollY = window.scrollY
      if (Math.abs(delta) > 0) {
        state.scrollDirection = delta > 0 ? 1 : -1
        state.scrollVelocity += clamp(delta * 0.00009, -0.055, 0.055)
        state.targetY        += delta * 0.0022
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('wheel', (e: WheelEvent) => {
      state.scrollVelocity += clamp(e.deltaY * 0.000035, -0.026, 0.026)
    }, { passive: true })

    /* ── Resize ───────────────────────────────────────────── */
    function onResize() {
      sizes.width  = window.innerWidth
      sizes.height = window.innerHeight
      camera.aspect = sizes.width / sizes.height
      camera.updateProjectionMatrix()
      renderer.setSize(sizes.width, sizes.height)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      layout()
    }
    window.addEventListener('resize', onResize)

    /* ── Render loop (identical to HTML tick) ────────────── */
    const clock = new THREE.Clock()
    let animId: number
    let alive = true

    function tick() {
      if (!alive) return
      const elapsed = clock.getElapsedTime()
      const now     = performance.now()
      const base    = 0.0014 * state.scrollDirection
      const vel     = state.autoVelocity + state.scrollVelocity + base

      if (!state.isDragging) {
        state.targetY       += vel
        state.autoVelocity  *= 0.982
        state.scrollVelocity *= 0.91
        if (Math.abs(state.autoVelocity) < 0.0012)
          state.autoVelocity = 0.0012 * state.scrollDirection
      }

      state.currentY += (state.targetY - state.currentY) * 0.09
      state.currentX += (state.targetX - state.currentX) * 0.06
      state.currentZ += (state.targetZ - state.currentZ) * 0.055

      group.rotation.y = state.currentY
      group.rotation.x = state.currentX
      group.rotation.z = state.currentZ + Math.sin(elapsed * 0.4) * 0.004

      camera.position.x += (state.cameraX - camera.position.x) * 0.045
      camera.position.y += ((0.25 + state.cameraY) - camera.position.y) * 0.045
      camera.lookAt(0.25, 0.15, 0)
      state.cameraX *= 0.93
      state.cameraY *= 0.94
      if (!state.isDragging) {
        state.targetZ *= 0.96
        state.targetX += (DEFAULT_TILT_X - state.targetX) * 0.012
        state.targetZ += (DEFAULT_TILT_Z - state.targetZ) * 0.012
      }

      panels.forEach((panel, index) => {
        const mat        = panel.material as THREE.MeshBasicMaterial
        const fp         = Math.min(Math.max((now - (panel.userData.fadeStart as number)) / 900, 0), 1)
        const worldAngle = (panel.userData.baseAngle as number) + state.currentY
        const facing     = Math.cos(worldAngle)

        panel.visible = true
        const scale = THREE.MathUtils.mapLinear(facing, -1, 1, 0.78, 1.1)
        panel.scale.setScalar(scale)
        mat.opacity = fp * THREE.MathUtils.mapLinear(facing, -1, 1, 0.22, 1)
        panel.renderOrder = Math.round((1 - facing) * 100)
        panel.position.y = Math.sin(elapsed * 0.55 + (panel.userData.phase as number)) * 0.025
        panel.rotation.z = Math.sin(elapsed * 0.45 + index) * 0.006
      })

      renderer.render(scene, camera)
      animId = requestAnimationFrame(tick)
    }
    tick()

    /* Fade out drag hint after 2.4 s */
    if (hint) {
      setTimeout(() => {
        hint.style.transition = 'opacity 0.8s ease'
        hint.style.opacity    = '0'
      }, 2400)
    }

    /* ── Cleanup ──────────────────────────────────────────── */
    return () => {
      alive = false
      cancelAnimationFrame(animId)
      window.removeEventListener('resize',  onResize)
      window.removeEventListener('scroll',  onScroll)
      canvas.removeEventListener('pointerdown',   onPointerDown)
      canvas.removeEventListener('pointermove',   onPointerMove)
      canvas.removeEventListener('pointerup',     onPointerUp)
      canvas.removeEventListener('pointercancel', onPointerUp)
      renderer.dispose()
      geometry.dispose()
      panels.forEach(p => (p.material as THREE.MeshBasicMaterial).dispose())
      textures.forEach(t => t.dispose())
    }
  }, [])

  /* ── JSX ──────────────────────────────────────────────── */
  return (
    <section
      style={{
        position: 'relative',
        /*
         * z-index: 4 creates an isolated stacking context.
         * The fixed Color Bends canvas (z-index: 1 globally) is below this
         * stacking context and cannot bleed into this section.
         */
        zIndex: 4,
        height: '100vh',
        overflow: 'hidden',
        fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, sans-serif',
        color: '#171717',
      }}
      aria-label="Digital brands that move"
    >
      {/* Opaque white background — same as SelectedWorks (#f5f5f3) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          background: '#f5f5f3',
        }}
      />

      {/* Three.js canvas — z-index 1, alpha:true, top-left anchored */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 1,
          display: 'block',
          cursor: 'grab',
          touchAction: 'none',
        }}
      />

      {/* Vignette — adapted to #f5f5f3 page white */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 3,
          pointerEvents: 'none',
          background: `
            linear-gradient(90deg, rgba(245,245,243,0.98) 0%, rgba(245,245,243,0.46) 24%, rgba(245,245,243,0) 54%),
            linear-gradient(0deg,  rgba(245,245,243,0.88) 0%, rgba(245,245,243,0)    36%),
            radial-gradient(circle at 78% 50%, rgba(245,245,243,0) 0%, rgba(245,245,243,0.15) 44%, rgba(245,245,243,0.76) 100%)
          `,
        }}
      />

      {/* Hero copy — mirrors .hero-copy, no buttons */}
      <div
        style={{
          position: 'absolute',
          left:   'clamp(24px, 5vw, 76px)',
          bottom: 'clamp(34px, 7vh, 86px)',
          width: 'min(540px, 86vw)',
          zIndex: 5,
          pointerEvents: 'none',
        }}
      >
        {/* Eyebrow — mirrors .eyebrow from HTML */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            marginBottom: 18,
            padding: '9px 14px',
            border: '1px solid rgba(23,23,23,0.12)',
            borderRadius: 999,
            background: 'rgba(255,255,255,0.42)',
            backdropFilter: 'blur(12px)',
            fontSize: 12,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: 'rgba(23,23,23,0.72)',
          }}
        >
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#101010', display: 'inline-block' }} />
          Scroll + Drag the Carousel
        </div>

        <h2
          style={{
            margin: 0,
            fontSize: 'clamp(48px, 9vw, 124px)',
            lineHeight: 0.86,
            letterSpacing: '-0.075em',
            fontWeight: 850,
            maxWidth: 760,
            color: '#171717',
          }}
        >
          Brands
          <br />
          <em
            style={{
              display: 'block',
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontStyle: 'italic',
              fontWeight: 500,
              letterSpacing: '-0.08em',
            }}
          >
            Redesign
          </em>
        </h2>
        <p
          style={{
            margin: '22px 0 0',
            maxWidth: 470,
            fontSize: 15,
            lineHeight: 1.65,
            color: 'rgba(23,23,23,0.68)',
          }}
        >
          We create websites, Shopify stores, UI/UX systems, logos, and packaging
          that help brands look sharper, feel stronger, and grow online.
        </p>
      </div>

      {/* Drag hint — mirrors .drag-hint from HTML */}
      <div
        ref={hintRef}
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 5,
          padding: '10px 14px',
          borderRadius: 999,
          background: 'rgba(16,16,16,0.86)',
          color: '#fff',
          fontSize: 12,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          pointerEvents: 'none',
          opacity: 0.92,
        }}
      >
        DRAG
      </div>
    </section>
  )
}
