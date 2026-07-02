import { Routes, Route } from 'react-router-dom'
import { ProjectFormProvider } from '@/components/ProjectFormWidget'
import HomePage from '@/pages/HomePage'
import AboutPage from '@/pages/AboutPage'

export default function App() {
  return (
    <ProjectFormProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </ProjectFormProvider>
  )
}
