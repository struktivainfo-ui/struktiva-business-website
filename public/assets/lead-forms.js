for (const form of document.querySelectorAll('[data-struktiva-lead]')) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const button = form.querySelector('button[type="submit"]');
    const status = form.querySelector('.lead-form__status');
    const values = Object.fromEntries(new FormData(form));
    const leadType = form.dataset.struktivaLead;
    const payload = {
      ...values,
      leadType,
      source: 'STRUKTIVA Website',
      contactTrap: values.contactTrap || '',
    };
    delete payload.consent;
    if (leadType === 'digital_check') {
      payload.privacyAccepted = true;
      payload.submissionId = crypto.randomUUID();
      payload.landingPage = '/digital-check';
      payload.referrer = document.referrer;
    } else {
      payload.privacyConsent = true;
    }

    button.disabled = true;
    status.textContent = 'Ihre Anfrage wird gesendet …';
    status.dataset.success = 'false';
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (!response.ok || !result.ok) throw new Error(result.error || 'Die Anfrage konnte nicht gesendet werden.');
      form.reset();
      if (leadType === 'digital_check') {
        window.location.assign('/digital-check/danke');
        return;
      }
      status.textContent = result.message || 'Vielen Dank. Ihre Anfrage wurde erfolgreich übermittelt.';
      status.dataset.success = 'true';
    } catch (error) {
      status.textContent = error.message || 'Die Anfrage konnte gerade nicht gesendet werden. Bitte versuchen Sie es erneut.';
    } finally {
      button.disabled = false;
    }
  });
}
