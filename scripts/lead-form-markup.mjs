const privacy = '<label class="lead-form__consent"><input type="checkbox" name="consent" required> <span>Ich stimme zu, dass STRUKTIVA meine Angaben zur Bearbeitung meiner Anfrage verarbeitet. Mehr dazu in der <a href="/datenschutz">Datenschutzerklärung</a>.</span></label>';
const trap = '<div class="lead-form__trap" aria-hidden="true"><label>Dieses Feld leer lassen<input type="text" name="contactTrap" tabindex="-1" autocomplete="off"></label></div>';

export const contactForm = `
<form class="lead-form" id="lead-contact-form" data-struktiva-lead="contact">
  <div class="lead-form__grid">
    <label>Ihr Name <span aria-hidden="true">*</span><input name="name" autocomplete="name" maxlength="120" required></label>
    <label>Unternehmen<input name="company" autocomplete="organization" maxlength="160"></label>
    <label>E-Mail-Adresse <span aria-hidden="true">*</span><input name="email" type="email" autocomplete="email" maxlength="160" required></label>
    <label>Telefon<input name="phone" type="tel" autocomplete="tel" maxlength="50"></label>
    <label>Bevorzugter Kontaktweg<select name="preferredContact"><option value="">Bitte auswählen</option><option>E-Mail</option><option>Telefon</option><option>WhatsApp</option></select></label>
    <label>Wobei dürfen wir helfen?<select name="interest"><option value="">Bitte auswählen</option><option>Website / Landingpage</option><option>Google-Sichtbarkeit</option><option>KI &amp; Automatisierung</option><option>Kundenanfragen-System</option><option>Digitale Ordnung</option><option>Unternehmens-App / Dashboard</option><option>Ich bin mir noch unsicher</option></select></label>
    <label>Wann soll es losgehen?<select name="projectStart"><option value="">Noch offen</option><option>Sofort</option><option>In den nächsten Wochen</option><option>In den nächsten Monaten</option></select></label>
    <label>Budgetrahmen<select name="budgetRange"><option value="">Noch offen</option><option>Unter 500 €</option><option>500 € – 1.000 €</option><option>1.000 € – 2.500 €</option><option>Über 2.500 €</option></select></label>
  </div>
  <label>Ihr Anliegen <span aria-hidden="true">*</span><textarea name="message" rows="5" minlength="12" maxlength="5000" placeholder="Beschreiben Sie kurz, was Sie erreichen möchten." required></textarea></label>
  ${trap}
  ${privacy}
  <div class="lead-form__footer"><button class="button" type="submit">Anfrage senden →</button><p>Kostenlos und unverbindlich. Wir melden uns persönlich bei Ihnen.</p></div>
  <p class="lead-form__status" role="status" aria-live="polite"></p>
</form>`;

export const digitalCheckForm = `
<form class="lead-form lead-form--check" id="digital-check-anfrage" data-struktiva-lead="digital_check">
  <div class="lead-form__heading"><p class="eyebrow eyebrow--blue">Digital-Check anfragen</p><h2>Erzählen Sie uns von Ihrem Unternehmen.</h2><p>Ein kurzer Überblick genügt. Wir prüfen Ihre Anfrage persönlich und besprechen den passenden nächsten Schritt.</p></div>
  <div class="lead-form__grid">
    <label>Ihr Name <span aria-hidden="true">*</span><input name="name" autocomplete="name" maxlength="120" required></label>
    <label>Unternehmen <span aria-hidden="true">*</span><input name="company" autocomplete="organization" maxlength="160" required></label>
    <label>E-Mail-Adresse <span aria-hidden="true">*</span><input name="email" type="email" autocomplete="email" maxlength="160" required></label>
    <label>Telefon<input name="phone" type="tel" autocomplete="tel" maxlength="50"></label>
    <label>Branche <span aria-hidden="true">*</span><select name="industry" required><option value="">Bitte auswählen</option><option>Handwerk</option><option>Gesundheit &amp; Beauty</option><option>Gastronomie</option><option>Einzelhandel</option><option>Lokale Dienstleistung</option><option>B2B-Dienstleistung</option><option>Andere Branche</option></select></label>
    <label>Website (falls vorhanden)<input name="companyWebsite" type="text" inputmode="url" placeholder="beispiel.de" maxlength="300"></label>
    <label>Bevorzugter Kontaktweg<select name="preferredContact"><option value="">Bitte auswählen</option><option>E-Mail</option><option>Telefon</option><option>WhatsApp</option></select></label>
  </div>
  <label>Was ist Ihre wichtigste digitale Frage? <span aria-hidden="true">*</span><textarea name="primaryChallenge" rows="5" minlength="12" maxlength="2000" placeholder="Zum Beispiel: Wie gewinnen wir mehr passende Anfragen über unsere Website?" required></textarea></label>
  ${trap}
  ${privacy}
  <div class="lead-form__footer"><button class="button" type="submit">Digital-Check anfragen →</button><p>Der Digital-Check ist kostenlos. Mit der Anfrage entsteht kein Auftrag.</p></div>
  <p class="lead-form__status" role="status" aria-live="polite"></p>
</form>`;
