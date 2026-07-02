import { useEffect, useState, type FormEvent } from 'react'
import { useForm, ValidationError } from '@formspree/react'

const FORMSPREE_ID = 'mnjkgkkl'

type FieldErrors = Partial<Record<'name' | 'email' | 'phone' | 'budget' | 'idea', string>>

type Props = {
  onClose: () => void
}

function validateForm(form: HTMLFormElement): FieldErrors {
  const fd = new FormData(form)
  const errors: FieldErrors = {}

  const name = String(fd.get('name') ?? '').trim()
  const email = String(fd.get('email') ?? '').trim()
  const phone = String(fd.get('phone') ?? '').trim()
  const budgetRaw = String(fd.get('budget') ?? '').trim()
  const idea = String(fd.get('idea') ?? '').trim()

  if (!name) errors.name = 'Name is required.'
  if (!email) errors.email = 'Email is required.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Please enter a valid email address.'
  if (!phone) errors.phone = 'Phone is required.'
  if (!budgetRaw) errors.budget = 'Budget is required.'
  else if (Number.isNaN(Number(budgetRaw)) || Number(budgetRaw) < 0) {
    errors.budget = 'Please enter a valid budget amount.'
  }
  if (!idea) errors.idea = 'Idea is required.'

  return errors
}

function RequiredMark() {
  return <span className="project-form__asterisk" aria-hidden="true"> *</span>
}

export default function ProjectFormPanel({ onClose }: Props) {
  const [state, handleSubmit] = useForm(FORMSPREE_ID)
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})

  useEffect(() => {
    if (!state.succeeded) return
    const t = window.setTimeout(onClose, 2800)
    return () => window.clearTimeout(t)
  }, [state.succeeded, onClose])

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const errors = validateForm(e.currentTarget)
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors)
      return
    }
    setFieldErrors({})
    handleSubmit(e)
  }

  const fieldClass = (field: keyof FieldErrors) =>
    fieldErrors[field] ? 'project-form__field project-form__field--invalid' : 'project-form__field'

  if (state.succeeded) {
    return (
      <div className="project-form-success">
        <p className="project-form-success__title">Thanks — we got it.</p>
        <p className="project-form-success__body">
          We&rsquo;ll review your idea and get back to you shortly.
        </p>
      </div>
    )
  }

  return (
    <form className="project-form" onSubmit={onFormSubmit} noValidate>
      <label className={fieldClass('name')}>
        <span>Name<RequiredMark /></span>
        <input
          type="text"
          name="name"
          autoComplete="name"
          placeholder="Your name"
          aria-invalid={!!fieldErrors.name}
          aria-describedby={fieldErrors.name ? 'error-name' : undefined}
        />
        {fieldErrors.name && (
          <span id="error-name" className="project-form__error" role="alert">{fieldErrors.name}</span>
        )}
        <ValidationError prefix="Name" field="name" errors={state.errors} className="project-form__error" />
      </label>

      <label className={fieldClass('email')}>
        <span>Email<RequiredMark /></span>
        <input
          type="email"
          name="email"
          autoComplete="email"
          placeholder="you@company.com"
          aria-invalid={!!fieldErrors.email}
          aria-describedby={fieldErrors.email ? 'error-email' : undefined}
        />
        {fieldErrors.email && (
          <span id="error-email" className="project-form__error" role="alert">{fieldErrors.email}</span>
        )}
        <ValidationError prefix="Email" field="email" errors={state.errors} className="project-form__error" />
      </label>

      <label className={fieldClass('phone')}>
        <span>Phone<RequiredMark /></span>
        <input
          type="tel"
          name="phone"
          autoComplete="tel"
          placeholder="+1 (555) 000-0000"
          aria-invalid={!!fieldErrors.phone}
          aria-describedby={fieldErrors.phone ? 'error-phone' : undefined}
        />
        {fieldErrors.phone && (
          <span id="error-phone" className="project-form__error" role="alert">{fieldErrors.phone}</span>
        )}
        <ValidationError prefix="Phone" field="phone" errors={state.errors} className="project-form__error" />
      </label>

      <label className={fieldClass('budget')}>
        <span>Budget (USD)<RequiredMark /></span>
        <input
          type="number"
          name="budget"
          min={0}
          step={100}
          inputMode="decimal"
          placeholder="10000"
          aria-invalid={!!fieldErrors.budget}
          aria-describedby={fieldErrors.budget ? 'error-budget' : undefined}
        />
        {fieldErrors.budget && (
          <span id="error-budget" className="project-form__error" role="alert">{fieldErrors.budget}</span>
        )}
        <ValidationError prefix="Budget" field="budget" errors={state.errors} className="project-form__error" />
      </label>

      <label className={`${fieldClass('idea')} project-form__field--full`}>
        <span>Idea<RequiredMark /></span>
        <textarea
          name="idea"
          rows={4}
          placeholder="Tell us about the project, goals, and timeline…"
          aria-invalid={!!fieldErrors.idea}
          aria-describedby={fieldErrors.idea ? 'error-idea' : undefined}
        />
        {fieldErrors.idea && (
          <span id="error-idea" className="project-form__error" role="alert">{fieldErrors.idea}</span>
        )}
        <ValidationError prefix="Idea" field="idea" errors={state.errors} className="project-form__error" />
      </label>

      <ValidationError errors={state.errors} className="project-form__error project-form__error--form" />

      <button type="submit" className="project-form__submit" disabled={state.submitting}>
        {state.submitting ? 'Sending…' : 'Submit'}
      </button>
    </form>
  )
}
