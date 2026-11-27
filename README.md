# CREDCO website

This project recreates the public CREDCO website as 33 HTML pages plus a branded 404. It includes the original layout, copy, project and blog detail pages, consultation popup, gallery, and locally hosted images and fonts.

## Open in VS Code

1. Extract the ZIP and open the `credco-website` folder in VS Code.
2. In the VS Code terminal, run `node preview.mjs` with Node.js 22 or later.
3. Open [the local preview](http://127.0.0.1:4173/) in your browser.

The preview needs no package installation. It serves the original clean URLs and returns HTTP 404 for missing pages.

## Edit the site

| File or folder | What to edit |
| --- | --- |
| `js/credco.js` | Page copy, data, layouts, and interactive components |
| `js/site-config.js` | Canonical origin, email, Instagram, and Facebook |
| `css/credco.css` | Original layout styles |
| `css/site.css` | Cursor, focus treatment, and reduced motion |
| `media/` | Original photos in responsive WebP sizes and the custom cursor image |
| `js/vendor.js` | Bundled browser dependencies |

The HTML files contain pre-rendered copies of each page for fast initial rendering and indexing. The browser uses `js/credco.js` for interactive page content. Make persistent copy or layout edits there, then run `npm install` once and `npm run render` after changes to refresh the HTML, sitemap, and robots file.

Get Consultation is the highlighted action on the opening slide. The original navigation and secondary actions are still available. The consultation, contact, and feedback forms validate inputs and open a prefilled WhatsApp draft. Visitors send the message themselves in WhatsApp. Setup requires no API keys or frontend credentials. The site points the sample reel cards to the supplied Instagram profile where an individual reel URL is unavailable.

## Deploy on GitHub Pages

- Push the folder contents to the repository root and enable GitHub Pages (Settings > Pages) for that branch. The `CNAME` file keeps the custom domain `credcodesign.in` set on every deploy.
- The canonical origin is `https://credcodesign.in`. It is set once in `js/site-config.js` (`SITE_ORIGIN`) and in `businessWebsite` in `js/credco.js`. If the domain ever changes, edit both and run `npm run render` to regenerate every canonical URL, the sitemap and `robots.txt`.
- Any other domain (a `www` or secondary domain) should redirect to `https://credcodesign.in`, never serve a copy of the site.
- After deploying, submit `https://credcodesign.in/sitemap.xml` in Google Search Console.
- The privacy policy and terms carry over the old pages and add the email contact and relevant browser-storage disclosure. Have CREDCO confirm the policy language reflects its current data-handling and project practices before publication.

## Verification

All 33 routes, 33 distinct internal link destinations, and 51 referenced assets were checked in the local preview. Every page has a unique title, a description, and a canonical URL. The custom 404 returns HTTP 404 and is excluded from the sitemap. Desktop and mobile checks covered the popup, hero carousel, mobile navigation, and gallery lightbox.

The ten full-size photos total 1.66 MB as WebP, down from 8.75 MB as JPEG, an 81% reduction. In a local Chromium test, homepage load events completed in 285 ms at 1280 × 720 and 204 ms at 390 × 844. These are unthrottled loopback measurements. Production timings depend on hosting, network, and device conditions.
