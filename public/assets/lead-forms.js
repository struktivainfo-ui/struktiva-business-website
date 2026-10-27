for (const form of document.querySelectorAll('[data-struktiva-lead]')) {
  if (form.dataset.struktivaLead === 'contact') {
    const packageKey = new URLSearchParams(window.location.search).get('paket');
    const packages = {
      'website-start': ['Website / Landingpage', 'Ich interessiere mich für das Paket Website START (490 € netto).'],
      'website-plus': ['Website / Landingpage', 'Ich interessiere mich für das Paket Website PLUS (790 € netto).'],
      'website-individuell': ['Website / Landingpage', 'Ich möchte mein individuelles Website-Projekt besprechen (ab 990 € netto).'],
      'sichtbarkeit-start': ['Google-Sichtbarkeit', 'Ich interessiere mich für Lokale Sichtbarkeit START (ab 149 € netto).'],
      'sichtbarkeit-plus': ['Google-Sichtbarkeit', 'Ich interessiere mich für Lokale Sichtbarkeit PLUS (ab 249 € netto).'],
      kundenfuehrung: ['Kundenanfragen-System', 'Ich möchte die digitale Kundenführung besprechen (ab 349 € netto).'],
    };
    const selectedPackage = packages[packageKey];
    if (selectedPackage) {
      const interest = form.elements.namedItem('interest');
      const message = form.elements.namedItem('message');
      if (interest) interest.value = selectedPackage[0];
      if (message && !message.value) message.value = selectedPackage[1];
    }
  }

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
