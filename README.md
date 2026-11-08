# Badaami website

Static website ready for GitHub Pages or Cloudflare Pages.

## Deploy with GitHub Pages
1. Create a GitHub repository.
2. Upload **the contents of this folder** to the repository root (not the ZIP itself).
3. Open **Settings → Pages** and select **Deploy from a branch**, branch **main**, folder **/(root)**.
4. Save and wait for GitHub to publish the site.

The site requires no build step. The homepage is `index.html`.

## Included
- `index.html` — homepage with retail availability and WhatsApp/phone ordering
- `about.html` — About Us page
- `styles.css` — responsive styling
- `script.js` — mobile navigation
- `assets/` — site images and logos

WhatsApp and phone: +977 9709132802. Retail: Nina and Hagar, Gairidhara and Jhamsikhel.

The chocolate hero image is a cropped AI-generated concept visual. It is not a photograph of the actual Badaami product. Replace with approved product photography if needed.

## Mobile homepage update
The mobile hero now places the headline, Nina and Hagar availability, WhatsApp order button, and call number near the top of the first screen. On short-height phones, the secondary description is hidden to prioritize those actions. Refresh the deployed page after replacing `styles.css` to see the changes.

Mobile update: Hero copy is center-aligned and vertically balanced within the initial viewport. Shorter screens use compact spacing.


Viewport-fit update: removed fixed 850px hero minimum, reduced desktop hero content, and centered mobile content within 100svh without blank bottom space.

### Latest desktop-only adjustment
- Removed the “Made in Nepal” eyebrow above the homepage headline on desktop.
- Improved Home / About Us navigation contrast using a dark chocolate background with cream text.
- Mobile styles and layout remain unchanged.

## Cinematic mobile image reveal
Mobile only: photo and overlay gently settle over 1.8 seconds; all content (including the WhatsApp link) is visible and clickable from the start. No spacing, sizing, or layout rules were changed. Reduced-motion preferences disable animation. The previous approved version is `badaami-github-mobile-centered-label.zip`.
