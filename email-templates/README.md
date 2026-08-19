# GECK REKT Brevo marketing email

## Import into Brevo

1. Open **Marketing → Templates → Email template**.
2. Choose **Create from scratch → HTML custom code**.
3. Paste the complete contents of `geck-rekt-marketing-email.html`.
4. Preview it on desktop and mobile, then send yourself a test email.
5. Save and activate the template.

## Replace for each campaign

- Browser title and hidden preview text.
- Issue label, headline, introduction, and closing note.
- Hero image URL and alt text.
- Three update highlights.
- Primary button text and destination.
- Campaign-level sender, subject, and preview text in Brevo.

Search the HTML for `REPLACE` to find every editable area.

## Included Brevo placeholders

- `{{ contact.FIRSTNAME|default:"there" }}` personalizes the greeting safely.
- `{{ mirror }}` opens the browser version.
- `{{ update_profile }}` opens subscription preferences.
- `{{ unsubscribe }}` provides the mandatory unsubscribe link.

The image and CTA currently use the existing `avivhauyn.com` landing page. Replace those URLs after the standalone GECK REKT domain launches.
