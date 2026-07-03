import { MessageSquare } from 'lucide-react'
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import ProjectFormPanel from './ProjectFormPanel'

type ProjectFormContextValue = {
  open: boolean
  openForm: () => void
  closeForm: () => void
  toggleForm: () => void
}

const ProjectFormContext = createContext<ProjectFormContextValue | null>(null)

export function useProjectForm() {
  const ctx = useContext(ProjectFormContext)
  if (!ctx) throw new Error('useProjectForm must be used within ProjectFormProvider')
  return ctx
}

export function ProjectFormProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)

  const openForm   = useCallback(() => setOpen(true), [])
  const closeForm  = useCallback(() => setOpen(false), [])
  const toggleForm = useCallback(() => setOpen(v => !v), [])

  return (
    <ProjectFormContext.Provider value={{ open, openForm, closeForm, toggleForm }}>
      {children}
      <ProjectFormWidget />
    </ProjectFormContext.Provider>
  )
}

function ProjectFormWidget() {
  const { open, closeForm, toggleForm } = useProjectForm()
  const panelRef = useRef<HTMLDivElement>(null)
  const [formKey, setFormKey] = useState(0)

  const handleClose = useCallback(() => {
    closeForm()
    setFormKey(k => k + 1)
  }, [closeForm])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, handleClose])

  useEffect(() => {
    if (!open) return
    const onPointer = (e: PointerEvent) => {
      const panel = panelRef.current
      const btn   = document.getElementById('project-form-trigger')
      if (panel?.contains(e.target as Node)) return
      if (btn?.contains(e.target as Node)) return
      handleClose()
    }
    document.addEventListener('pointerdown', onPointer)
    return () => document.removeEventListener('pointerdown', onPointer)
  }, [open, handleClose])

  return (
    <div className="project-form-root" aria-live="polite">
      <div
        ref={panelRef}
        className={`project-form-panel${open ? ' is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-form-title"
        aria-hidden={!open}
      >
        <div className="project-form-panel__head">
          <div>
            <p className="project-form-panel__eyebrow">New inquiry</p>
            <h2 id="project-form-title" className="project-form-panel__title">Start a project</h2>
          </div>
          <button
            type="button"
            className="project-form-panel__close"
            onClick={handleClose}
            aria-label="Close form"
          >
            ×
          </button>
        </div>
        <ProjectFormPanel key={formKey} onClose={handleClose} />
      </div>

      <button
        id="project-form-trigger"
        type="button"
        className={`inquiry-fab${open ? ' is-open' : ''}`}
        onClick={toggleForm}
        aria-expanded={open}
        aria-controls="project-form-title"
      >
        <span className="inquiry-fab__ring" aria-hidden="true" />
        <span className="inquiry-fab__icon" aria-hidden="true">
          <MessageSquare size={17} strokeWidth={2.2} />
        </span>
        <span className="inquiry-fab__label">{open ? 'Close' : 'Free Inquiry'}</span>
      </button>
    </div>
  )
}