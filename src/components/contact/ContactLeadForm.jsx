import { useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { trackContactFormLeadConversion } from '../../cookieConsent.jsx'

const siteLinks = {
  datenschutz: '/datenschutz',
}

const leadInterestOptions = [
  'Website / Landingpage',
  'Google-Sichtbarkeit',
  'KI & Automatisierung',
  'Kundenanfragen-System',
  'Digitale Ordnung',
  'Unternehmens-App / Dashboard',
  'Ich bin mir noch unsicher',
]

const leadProjectStartOptions = [
  'Sofort',
  'In den nächsten Wochen',
  'In den nächsten Monaten',
  'Noch offen',
]

const leadBudgetOptions = [
  'Unter 500 €',
  '500 € – 1.000 €',
  '1.000 € – 2.500 €',
  'Über 2.500 €',
  'Noch offen',
]

const leadPreferredContactOptions = ['E-Mail', 'Telefon', 'WhatsApp']

const initialFormState = {
  name: '',
  company: '',
  email: '',
  phone: '',
  preferredContact: '',
  interest: '',
  projectStart: '',
  budgetRange: '',
  message: '',
  privacyConsent: false,
  website: '',
}

function LeadField({ label, name, type = 'text', value, onChange, error, placeholder, autoComplete, required = false }) {
  const fieldId = `lead-${name}`
  const errorId = `${fieldId}-error`

  return (
    <div className="struktiva-contact-form__field">
      <label htmlFor={fieldId}>
        {label}
        {required ? <span aria-hidden="true">*</span> : null}
      </label>
      <input
        id={fieldId}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={error ? errorId : undefined}
      />
      {error ? (
        <span id={errorId} className="struktiva-contact-form__error">
          {error}
        </span>
      ) : null}
    </div>
  )
}

function LeadSelect({ label, name, value, onChange, options, error, placeholder, helper }) {
  const fieldId = `lead-${name}`
  const errorId = `${fieldId}-error`
  const helperId = helper ? `${fieldId}-helper` : undefined
  const describedBy = [helperId, error ? errorId : undefined].filter(Boolean).join(' ') || undefined

  return (
    <div className="struktiva-contact-form__field">
      <label htmlFor={fieldId}>{label}</label>
      <select
        id={fieldId}
        name={name}
        value={value}
        onChange={onChange}
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={describedBy}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {helper ? (
        <span id={helperId} className="struktiva-contact-form__helper">
          {helper}
        </span>
      ) : null}
      {error ? (
        <span id={errorId} className="struktiva-contact-form__error">
          {error}
        </span>
      ) : null}
    </div>
  )
}

export default function ContactLeadForm() {
  const [form, setForm] = useState(initialFormState)
  const [errors, setErrors] = useState({})
  const [submitState, setSubmitState] = useState('idle')
  const [responseMessage, setResponseMessage] = useState('')
  const formRef = useRef(null)

  const handleChange = (event) => {
    const target = event.target
    const { name, type } = target
    const value = type === 'checkbox' ? target.checked : target.value

    setForm((current) => ({
      ...current,
      [name]: value,
    }))

    setErrors((current) => {
      if (!current[name]) return current
      const next = { ...current }
      delete next[name]
      return next
    })
  }

  const validateForm = () => {
    const nextErrors = {}

    if (!form.name.trim()) nextErrors.name = 'Bitte Namen eingeben.'
    if (!form.email.trim()) {
      nextErrors.email = 'Bitte E-Mail-Adresse eingeben.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = 'Bitte eine gültige E-Mail-Adresse eingeben.'
    }

    if (!form.message.trim()) {
      nextErrors.message = 'Bitte kurz beschreiben, worum es geht.'
    } else if (form.message.trim().length < 12) {
      nextErrors.message = 'Bitte Nachricht etwas genauer beschreiben.'
    }

    if (!form.privacyConsent) {
      nextErrors.privacyConsent = 'Bitte der Verarbeitung der Anfrage zustimmen.'
    }

    return nextErrors
  }

  const focusFirstInvalidField = (nextErrors) => {
    const firstInvalidName = Object.keys(nextErrors)[0]
    if (!firstInvalidName) return
    window.requestAnimationFrame(() => {
      formRef.current?.querySelector(`[name="${firstInvalidName}"]`)?.focus()
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const nextErrors = validateForm()
    setErrors(nextErrors)
    setResponseMessage('')

    if (Object.keys(nextErrors).length > 0) {
      focusFirstInvalidField(nextErrors)
      return
    }

    setSubmitState('submitting')

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name.trim(),
          company: form.company.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          preferredContact: form.preferredContact,
          interest: form.interest,
          projectStart: form.projectStart,
          budgetRange: form.budgetRange,
          message: form.message.trim(),
          privacyConsent: form.privacyConsent,
          website: form.website,
          source: 'Website',
        }),
      })

      const payload = await response.json().catch(() => ({}))

      if (!response.ok) {
        throw new Error(payload?.error || 'Die Anfrage konnte gerade nicht gesendet werden. Bitte versuche es erneut.')
      }

      trackContactFormLeadConversion()
      setSubmitState('success')
      setResponseMessage('Vielen Dank für deine Anfrage. Deine Nachricht wurde erfolgreich übermittelt. STRUKTIVA meldet sich zeitnah bei dir.')
      setForm(initialFormState)
      setErrors({})
    } catch (error) {
      setSubmitState('error')
      setResponseMessage(error.message || 'Die Anfrage konnte gerade nicht gesendet werden. Bitte versuche es erneut.')
    }
  }

  return (
    <form ref={formRef} className="struktiva-contact-form" onSubmit={handleSubmit} noValidate>
      <div className="struktiva-contact-form__grid">
        <LeadField
          label="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          error={errors.name}
          placeholder="Vor- und Nachname"
          autoComplete="name"
          required
        />
        <LeadField
          label="Firma"
          name="company"
          value={form.company}
          onChange={handleChange}
          error={errors.company}
          placeholder="Optional"
          autoComplete="organization"
        />
      </div>

      <div className="struktiva-contact-form__grid">
        <LeadField
          label="E-Mail"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          error={errors.email}
          placeholder="name@unternehmen.de"
          autoComplete="email"
          required
        />
        <LeadField
          label="Telefon"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          error={errors.phone}
          placeholder="Optional"
          autoComplete="tel"
        />
      </div>

      <div className="struktiva-contact-form__grid">
        <LeadSelect
          label="Gewünschter Kontaktweg"
          name="preferredContact"
          value={form.preferredContact}
          onChange={handleChange}
          options={leadPreferredContactOptions}
          error={errors.preferredContact}
          placeholder="Bitte auswählen"
        />
        <LeadSelect
          label="Interesse / Bedarf"
          name="interest"
          value={form.interest}
          onChange={handleChange}
          options={leadInterestOptions}
          error={errors.interest}
          placeholder="Bitte auswählen"
        />
      </div>

      <div className="struktiva-contact-form__grid">
        <LeadSelect
          label="Projektstart"
          name="projectStart"
          value={form.projectStart}
          onChange={handleChange}
          options={leadProjectStartOptions}
          error={errors.projectStart}
          placeholder="Bitte auswählen"
        />
        <LeadSelect
          label="Budgetrahmen"
          name="budgetRange"
          value={form.budgetRange}
          onChange={handleChange}
          options={leadBudgetOptions}
          error={errors.budgetRange}
          placeholder="Bitte auswählen"
          helper="Grobe Orientierung, falls schon bekannt."
        />
      </div>

      <div className="struktiva-contact-form__field">
        <label htmlFor="lead-message">
          Nachricht
          <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="lead-message"
          name="message"
          rows={6}
          value={form.message}
          onChange={handleChange}
          placeholder="Beschreiben Sie kurz Ihr Unternehmen und was Sie gerade bewegt."
          aria-invalid={errors.message ? 'true' : undefined}
          aria-describedby={errors.message ? 'lead-message-error' : undefined}
        />
        {errors.message ? (
          <span id="lead-message-error" className="struktiva-contact-form__error">
            {errors.message}
          </span>
        ) : null}
      </div>

      <div className="struktiva-contact-form__honeypot" aria-hidden="true">
        <label htmlFor="lead-website">
          Website
          <input id="lead-website" type="text" name="website" tabIndex="-1" autoComplete="off" value={form.website} onChange={handleChange} />
        </label>
      </div>

      <div className="struktiva-contact-form__consent">
        <label htmlFor="lead-privacyConsent">
          <input
            id="lead-privacyConsent"
            type="checkbox"
            name="privacyConsent"
            checked={form.privacyConsent}
            onChange={handleChange}
            aria-invalid={errors.privacyConsent ? 'true' : undefined}
            aria-describedby={errors.privacyConsent ? 'lead-privacyConsent-error' : undefined}
          />
          <span>
            Ich stimme zu, dass meine Angaben zur Bearbeitung meiner Anfrage verarbeitet werden. Weitere Informationen
            finden sich in der{' '}
            <a href={siteLinks.datenschutz}>
              Datenschutzerklärung
            </a>
            .
          </span>
        </label>
        {errors.privacyConsent ? (
          <span id="lead-privacyConsent-error" className="struktiva-contact-form__error">
            {errors.privacyConsent}
          </span>
        ) : null}
      </div>

      {responseMessage ? (
        <div
          aria-live="polite"
          className={`struktiva-contact-form__status ${
            submitState === 'success' ? 'struktiva-contact-form__status--success' : 'struktiva-contact-form__status--error'
          }`}
        >
          {responseMessage}
        </div>
      ) : null}

      <button type="submit" disabled={submitState === 'submitting'} className="struktiva-contact-form__submit">
        {submitState === 'submitting' ? 'Anfrage wird gesendet ...' : 'Anfrage senden'}
        <ArrowRight aria-hidden="true" />
      </button>
    </form>
  )
}
