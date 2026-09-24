# GECK REKT website and mailing-list launch checklist

## Already completed

- [x] Create the standalone GECK REKT repository and landing page.
- [x] Deploy the production build through the `Build` branch and `/docs` folder.
- [x] Connect `geckrekt.com` and `www.geckrekt.com` to GitHub Pages.
- [x] Preserve the existing Porkbun email-forwarding MX and TXT records.
- [x] Add the custom domain to GitHub Pages and serve the site over HTTPS.
- [x] Add branded `/check-email/` and `/confirmed/` pages.
- [x] Add Simple Analytics and GoatCounter to the landing page.
- [x] Add canonical and social-sharing metadata.

## Publish the current changes

- [ ] Commit and push the portfolio redirect so every old GECK REKT URL forwards to `https://geckrekt.com/`.
- [ ] Commit and push the new site's `robots.txt`, `sitemap.xml`, and structured game metadata.
- [ ] After both deployments finish, test the old URLs in a private browser window:
  - `https://avivhauyn.com/geck-wrecked/`
  - `https://avivhauyn.com/geck-rekt/`
  - `https://avivhauyn.com/geckrekt/`
- [ ] Confirm each old URL lands on `https://geckrekt.com/` and preserves HTTPS without warnings.

## Brevo sender and domain

- [ ] Decide whether to keep sending from the authenticated personal domain for now or create a sender such as `updates@geckrekt.com` later. The existing authenticated personal-domain sender is technically fine.
- [ ] If moving email to `geckrekt.com`, add only the exact DKIM, SPF, and DMARC records Brevo provides. Do not delete the GitHub A/AAAA/CNAME records or Porkbun MX records.
- [ ] Verify the sender shows as authenticated in Brevo before sending a campaign.
- [ ] Set a recognizable sender name, such as `GECK REKT`.
- [ ] Set and test a monitored reply-to address.
- [ ] Fill in Brevo's required organization/contact information. Use an appropriate business mailing address rather than exposing a home address unnecessarily.

## Brevo contacts and preferences

- [ ] Keep one main GECK REKT contacts list and document its name.
- [ ] Confirm the four signup interests map to the correct Brevo values:
  - Playtests
  - Tournaments and events
  - Steam page and release
  - Development updates
- [ ] Submit one test signup for every interest and confirm the resulting Brevo contact has the expected attributes or list memberships.
- [ ] Decide how existing contacts, if any, should be imported. Import only contacts with valid marketing consent.

## Brevo signup and double opt-in

- [ ] Open the active Brevo signup form and confirm double opt-in is enabled.
- [ ] Confirm the form action currently used by `geckrekt.com` is the intended production form.
- [ ] Set the successful form-submission redirect to `https://geckrekt.com/check-email/`.
- [ ] Select the branded GECK REKT double-opt-in confirmation email.
- [ ] Make the confirmation button obvious and verify its link is Brevo's generated confirmation link, not a hard-coded site URL.
- [ ] Set the post-confirmation redirect to `https://geckrekt.com/confirmed/`.
- [ ] Confirm the double-opt-in email includes the sender identity and a working preference/unsubscribe mechanism where required.
- [ ] Test the entire flow with a fresh email address:
  1. Submit the website form.
  2. Arrive on `/check-email/`.
  3. Receive the confirmation email.
  4. Click its confirmation button.
  5. Arrive on `/confirmed/`.
  6. Confirm the contact is marked subscribed in Brevo with the correct interests.
- [ ] Test expired, already-confirmed, and duplicate-signup behavior.

## Brevo campaign template

- [ ] Import `email-templates/geck-rekt-brevo-shell.html` into Brevo's HTML editor.
- [ ] Send test emails to Gmail, Outlook, and a mobile device.
- [ ] Verify the logo, headings, body copy, buttons, and dark background render correctly.
- [ ] Verify `View in browser`, `Update preferences`, and `Unsubscribe` work in a real Brevo test campaign.
- [ ] Confirm every campaign has useful alt text, a plain-text version, and no placeholder links.
- [ ] Save the final version as the default GECK REKT campaign template.

## Privacy and trust

- [ ] Add a short privacy page explaining what signup data is collected, why it is used, Brevo's role as the email provider, retention/deletion, and how to contact you.
- [ ] Link the privacy page beside the signup consent text and in marketing-email footers.
- [ ] Confirm the consent wording accurately describes the selected email categories.
- [ ] Keep evidence of consent and never pre-check optional marketing interests.
- [ ] Confirm unsubscribe works immediately and suppression is respected in later campaigns.

## Search visibility

- [ ] Add `geckrekt.com` as a Domain property in Google Search Console.
- [ ] Copy Google's TXT verification record into Porkbun DNS and complete verification.
- [ ] Submit `https://geckrekt.com/sitemap.xml` in Search Console.
- [ ] Use URL Inspection to request indexing for `https://geckrekt.com/`.
- [ ] Add the site to Bing Webmaster Tools and submit the same sitemap.
- [ ] Link to `https://geckrekt.com/` from the portfolio and every official GECK REKT profile using the exact game name.
- [ ] Keep the name `GECK REKT` in the page title, main heading, descriptions, video titles, and future update posts without repetitive keyword stuffing.
- [ ] Create or update official Steam, YouTube, itch.io, and social profiles as they become available, all linking back to the same canonical domain.
- [ ] Check Search Console weekly for indexing, mobile usability, and search queries. A brand-new domain can take days or weeks to settle into results.

## Analytics and launch QA

- [ ] Create a test signup and confirm Simple Analytics and GoatCounter record the visit without recording personal form data.
- [ ] Track important anonymous events: signup started, signup submitted, confirmation page viewed, and outbound media/store clicks.
- [ ] Exclude your own test traffic where practical.
- [ ] Test the site on phone and desktop, including keyboard navigation.
- [ ] Check the root page, `www`, `/check-email/`, `/confirmed/`, `robots.txt`, and `sitemap.xml`.
- [ ] Test the social preview in at least one sharing/debugging tool after deployment.
- [ ] Compress the largest images and video assets when doing the first performance pass.
- [ ] Keep the old redirect pages available for at least one year; longer is better for bookmarks and search engines.
