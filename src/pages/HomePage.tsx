import ColorBends from '@/components/ColorBends'
import WaveDivider from '@/components/WaveDivider'
import Hero from '@/sections/Hero'
import SelectedWorks from '@/sections/SelectedWorks'
import ShowcaseSection from '@/sections/ShowcaseSection'
import CylinderSection from '@/sections/CylinderSection'
import VideoSection2 from '@/sections/VideoSection2'
import ClientsStrip from '@/sections/ClientsStrip'
import Footer from '@/sections/Footer'

export default function HomePage() {
  return (
    <div style={{ background: '#000' }}>
      {/*
       * Color Bends — truly fixed, covers the whole viewport at z-index 1.
       * Hero (z-index 4) and SelectedWorks (z-index 2, solid bg) cover it.
       * ShowcaseSection is transparent → the rectangle "window" reveals it.
       * pointerEvents:none lets the window's own pointer logic win.
       */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 1,
          pointerEvents: 'none',
        }}
      >
        <ColorBends
          rotation={285}
          colors={['#e83d0d', '#1e52bf', '#7cff67']}
          speed={0.18}
          frequency={1.1}
          warpStrength={1.2}
          noise={0.08}
          iterations={3}
          intensity={1.2}
          bandWidth={5}
          transparent={false}
          mouseInfluence={0.6}
          parallax={0.3}
        />
      </div>

      <Hero />
      <SelectedWorks />
      {/* String-wave boundary: white SelectedWorks → black ShowcaseSection */}
      <WaveDivider topColor="#f5f5f3" bottomColor="#000000" />
      <ShowcaseSection />
      {/* String-wave boundary: black ShowcaseSection → white CylinderSection */}
      <WaveDivider topColor="#000000" bottomColor="#f5f5f3" />
      <CylinderSection />
      {/* String-wave boundary: white CylinderSection → black VideoSection2 */}
      <WaveDivider topColor="#f5f5f3" bottomColor="#000000" />
      <VideoSection2 />
      {/* Clients logo strip — white background */}
      <ClientsStrip />
      {/* Footer — black background */}
      <Footer />
    </div>
  )
}
