import { useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { digitalCheckFormNoticeText, personalDigitalCheckOffer } from '../../config/digitalCheckOffer.js'
import { useCampaignAttribution } from '../../hooks/useCampaignAttribution.js'
import {
  buildDigitalCheckTrackingParameters,
  normalizeDigitalCheckErrorCategory,
  trackDigitalCheckEvent,
} from '../../lib/digitalCheckTracking.js'
import { digitalCheckContactOptions, digitalCheckIndustries } from './digitalCheckData.js'

export const DIGITAL_CHECK_SUCCESS_KEY = 'struktiva-digital-check-success-v1'

function createSubmissionId() {
  if (globalThis.crypto?.randomUUID) return globalThis.crypto.randomUUID()
  return `dc-${Date.now()}-${Math.random().toString(36).slice(2, 12)}`
}

function createInitialState() {
  return {
    name: '',
    company: '',
    email: '',
    phone: '',
    companyWebsite: '',
    industry: '',
    primaryChallenge: '',
    preferredContact: '',
    privacyAccepted: false,
    contactTrap: '',
  }
}

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = 'Bitte geben Sie Ihren Namen ein.'
  if (!form.company.trim()) errors.company = 'Bitte nennen Sie Ihren Betrieb oder Ihr Unternehmen.'
  if (!form.email.trim()) errors.email = 'Bitte geben Sie Ihre E-Mail-Adresse ein.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) errors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.'
  if (!form.industry) errors.industry = 'Bitte wählen Sie Ihre Branche aus.'
  if (!form.primaryChallenge.trim()) errors.primaryChallenge = 'Bitte beschreiben Sie kurz Ihre wichtigste digitale Frage.'
  else if (form.primaryChallenge.trim().length < 12) errors.primaryChallenge = 'Bitte beschreiben Sie Ihre Frage etwas genauer.'
  if (form.companyWebsite.trim() && !/^(https?:\/\/)?[^\s.]+\.[^\s]+$/i.test(form.companyWebsite.trim())) errors.companyWebsite = 'Bitte geben Sie eine gültige Website-Adresse ein.'
  if (!form.privacyAccepted) errors.privacyAccepted = 'Bitte bestätigen Sie die Datenschutzhinweise.'
  return errors
}

function FieldError({ id, children }) {
  return children ? <span id={id} className="dc-form__error">{children}</span> : null
}

function InputField({ label, name, type = 'text', value, onChange, error, required, ...props }) {
  const fieldId = `dc-${name}`
  const errorId = `${fieldId}-error`
  return (
    <div className="dc-form__field">
      <label htmlFor={fieldId}>{label}{required ? <span aria-hidden="true"> *</span> : null}</label>
      <input id={fieldId} name={name} type={type} value={value} onChange={onChange} required={required} aria-required={required || undefined} aria-invalid={Boolean(error)} aria-describedby={error ? errorId : undefined} {...props} />
      <FieldError id={errorId}>{error}</FieldError>
    </div>
  )
}

export default function DigitalCheckLeadForm() {
  const attribution = useCampaignAttribution()
  const [form, setForm] = useState(createInitialState)
  const [submissionId, setSubmissionId] = useState(createSubmissionId)
  const [errors, setErrors] = useState({})
  const [submitState, setSubmitState] = useState('idle')
  const [statusMessage, setStatusMessage] = useState('')
  const formRef = useRef(null)
  const startedRef = useRef(false)
  const submitLockRef = useRef(false)

  const eventParameters = (additions = {}) => buildDigitalCheckTrackingParameters(attribution, additions)

  const handleStart = () => {
    if (startedRef.current) return
    startedRef.current = true
    trackDigitalCheckEvent('digital_check_form_start', eventParameters(), { onceKey: submissionId })
  }

  const handleChange = (event) => {
    handleStart()
    const { name, type, checked, value } = event.target
    setForm((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }))
    setErrors((current) => {
      if (!current[name]) return current
      const next = { ...current }
      delete next[name]
      return next
    })
  }

  const focusValidationError = (nextErrors) => {
    const names = Object.keys(nextErrors)
    window.requestAnimationFrame(() => {
      formRef.current?.querySelector(`[name="${names[0]}"]`)?.focus()
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (submitLockRef.current) return

    const nextErrors = validate(form)
    setErrors(nextErrors)
    setStatusMessage('')
    if (Object.keys(nextErrors).length) {
      trackDigitalCheckEvent('digital_check_form_submit_error', eventParameters({ error_category: 'validation' }))
      focusValidationError(nextErrors)
      return
    }

    submitLockRef.current = true
    setSubmitState('submitting')

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          leadType: personalDigitalCheckOffer.leadType,
          name: form.name.trim(),
          company: form.company.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          companyWebsite: form.companyWebsite.trim(),
          industry: form.industry,
          primaryChallenge: form.primaryChallenge.trim(),
          preferredContact: form.preferredContact,
          privacyAccepted: form.privacyAccepted,
          contactTrap: form.contactTrap,
          landingPage: attribution.landingPage,
          source: attribution.source,
          medium: attribution.medium,
          campaign: attribution.campaign,
          content: attribution.content,
          term: attribution.term,
          referrer: attribution.referrer,
          gclid: attribution.gclid,
          submissionId,
        }),
      })
      const payload = await response.json().catch(() => ({}))
      if (!response.ok) {
        const error = new Error(payload.error || 'Die Anfrage konnte gerade nicht gesendet werden.')
        error.category = payload.errorCode || (response.status === 429 ? 'rate_limited' : 'server')
        throw error
      }

      trackDigitalCheckEvent(
        'digital_check_form_submit_success',
        eventParameters({
          event_id: submissionId,
          preferred_contact: form.preferredContact,
          industry: form.industry,
        }),
        { onceKey: submissionId },
      )
      window.sessionStorage.setItem(DIGITAL_CHECK_SUCCESS_KEY, JSON.stringify({ submissionId, createdAt: Date.now() }))
      window.history.pushState({}, '', '/digital-check/danke')
      window.dispatchEvent(new PopStateEvent('popstate'))
    } catch (error) {
      const category = normalizeDigitalCheckErrorCategory(error.category || (error instanceof TypeError ? 'network' : 'unknown'))
      trackDigitalCheckEvent('digital_check_form_submit_error', eventParameters({ error_category: category }))
      setSubmitState('error')
      setStatusMessage(error.message || 'Die Anfrage konnte gerade nicht gesendet werden. Bitte versuchen Sie es erneut.')
      submitLockRef.current = false
    }
  }

  return (
    <form ref={formRef} className="dc-form" noValidate onSubmit={handleSubmit} onFocusCapture={handleStart}>
      {Object.keys(errors).length > 1 ? (
        <div className="dc-form__error-summary" role="alert">
          <strong>Bitte prüfen Sie die markierten Felder.</strong>
          <ul>{Object.entries(errors).map(([name, message]) => <li key={name}><a href={`#dc-${name}`}>{message}</a></li>)}</ul>
        </div>
      ) : null}

      <p className="dc-form__legend">Mit <span aria-hidden="true">*</span> gekennzeichnete Felder sind Pflichtfelder.</p>
      <div className="dc-form__grid">
        <InputField label="Vor- und Nachname" name="name" value={form.name} onChange={handleChange} error={errors.name} required maxLength={120} autoComplete="name" />
        <InputField label="Betrieb / Unternehmen" name="company" value={form.company} onChange={handleChange} error={errors.company} required maxLength={160} autoComplete="organization" />
        <InputField label="E-Mail-Adresse" name="email" type="email" value={form.email} onChange={handleChange} error={errors.email} required maxLength={160} autoComplete="email" inputMode="email" />
        <InputField label="Telefonnummer" name="phone" type="tel" value={form.phone} onChange={handleChange} error={errors.phone} maxLength={50} autoComplete="tel" inputMode="tel" />
        <div className="dc-form__field">
          <label htmlFor="dc-industry">Branche <span aria-hidden="true">*</span></label>
          <select id="dc-industry" name="industry" value={form.industry} onChange={handleChange} required aria-required="true" aria-invalid={Boolean(errors.industry)} aria-describedby={errors.industry ? 'dc-industry-error' : undefined}>
            <option value="">Bitte auswählen</option>
            {digitalCheckIndustries.map((item) => <option key={item}>{item}</option>)}
          </select>
          <FieldError id="dc-industry-error">{errors.industry}</FieldError>
        </div>
        <InputField label="Website" name="companyWebsite" type="url" value={form.companyWebsite} onChange={handleChange} error={errors.companyWebsite} maxLength={300} autoComplete="url" inputMode="url" placeholder="https://www.ihr-betrieb.de" />
      </div>

      <fieldset className="dc-form__radios">
        <legend>Wie dürfen wir Sie am besten erreichen?</legend>
        <div>{digitalCheckContactOptions.map((option) => <label key={option}><input type="radio" name="preferredContact" value={option} checked={form.preferredContact === option} onChange={handleChange} /><span>{option}</span></label>)}</div>
      </fieldset>

      <div className="dc-form__field">
        <label htmlFor="dc-primaryChallenge">Was ist aktuell Ihre wichtigste digitale Frage? <span aria-hidden="true">*</span></label>
        <textarea id="dc-primaryChallenge" name="primaryChallenge" rows={6} value={form.primaryChallenge} onChange={handleChange} required aria-required="true" maxLength={2000} aria-invalid={Boolean(errors.primaryChallenge)} aria-describedby={`dc-primaryChallenge-help${errors.primaryChallenge ? ' dc-primaryChallenge-error' : ''}`} />
        <span id="dc-primaryChallenge-help" className="dc-form__help">Zum Beispiel: wenige Anfragen über die Website, unklare Kontaktwege oder ein kaum genutztes Google-Profil. Bitte keine Passwörter oder sensiblen Daten eintragen.</span>
        <FieldError id="dc-primaryChallenge-error">{errors.primaryChallenge}</FieldError>
      </div>

      <div className="dc-form__honeypot" aria-hidden="true">
        <label htmlFor="dc-contactTrap">Dieses Feld leer lassen</label>
        <input id="dc-contactTrap" name="contactTrap" tabIndex={-1} autoComplete="off" value={form.contactTrap} onChange={handleChange} />
      </div>

      <div className="dc-form__consent">
        <label htmlFor="dc-privacyAccepted">
          <input id="dc-privacyAccepted" name="privacyAccepted" type="checkbox" checked={form.privacyAccepted} onChange={handleChange} required aria-required="true" aria-invalid={Boolean(errors.privacyAccepted)} aria-describedby={errors.privacyAccepted ? 'dc-privacyAccepted-error' : undefined} />
          <span>Ich habe die <a href="/datenschutz">Datenschutzerklärung</a> gelesen und bin damit einverstanden, dass STRUKTIVA meine Angaben zur Bearbeitung meiner Anfrage verarbeitet. *</span>
        </label>
        <FieldError id="dc-privacyAccepted-error">{errors.privacyAccepted}</FieldError>
      </div>

      <div className="dc-form__status" aria-live="polite">{statusMessage}</div>
      <button className="campaign-button dc-form__submit" type="submit" disabled={submitState === 'submitting'}>
        <span>{submitState === 'submitting' ? 'Wird gesendet …' : 'Anfrage zum Digital-Check senden'}</span>
        <ArrowRight aria-hidden="true" />
      </button>
      <p className="dc-form__order-note">{digitalCheckFormNoticeText}</p>
    </form>
  )
}
