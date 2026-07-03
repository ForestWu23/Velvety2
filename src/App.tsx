import { Routes, Route } from 'react-router-dom'
import { ProjectFormProvider } from '@/components/ProjectFormWidget'
import HomePage from '@/pages/HomePage'
import AboutPage from '@/pages/AboutPage'
import ServicesPage from '@/pages/ServicesPage'
import ContactPage from '@/pages/ContactPage'

export default function App() {
  return (
    <ProjectFormProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </ProjectFormProvider>
  )
}
