# Tereeza

A responsive website for Tereeza's everyday tech services, built with HTML, CSS and JavaScript.

## Features

- Separate Home, Services, How it works and Meet Tereeza pages with the updated image-led layouts.
- Manrope headings and Inter body text via Google Fonts, with matching offline fallbacks.
- Original emerald, midnight and warm amber palette in light and dark modes.
- Service-category filtering and the supplied Tereeza favicon in browser and device formats.
- Light and dark modes with a saved preference.
- Mobile navigation and accessible form controls.
- Service buttons that select the matching option in the Home inquiry form.
- A WhatsApp inquiry flow that prepares a message for the visitor to review and send.
- Original Tereeza logos and Samuel Nangoli's founder portrait.

## Preview locally

Open `public/index.html` directly in a browser, or serve the `public` folder:

```sh
python3 -m http.server 8000 --directory public
```

Then open <http://localhost:8000>.

No packages, build step, environment variables or backend are required. Internet access and WhatsApp access are needed to send an inquiry.

## Deploy on Vercel

1. In Vercel, choose **Add New → Project**.
2. Import **SamuelNangoli/Tereeza** from GitHub.
3. Keep **Root Directory** at the repository root (`./`).
4. Use **Other** as the framework, an empty **Build Command**, and `public` as the **Output Directory**.
5. Select **Deploy**.

The included `vercel.json` provides these settings and enables clean page URLs such as `/services`, `/how-it-works` and `/meet-tereeza`.

Configuration reference: [Vercel project configuration](https://vercel.com/docs/project-configuration/vercel-json).

## Files

```text
public/
  index.html
  services.html
  how-it-works.html
  meet-tereeza.html
  favicon.svg
  assets/
    site.css
    site.js
    ...logos and founder portrait
vercel.json
```

Update page content in the four HTML files, shared appearance in `public/assets/site.css`, and shared behavior in `public/assets/site.js`.

## Contact

- WhatsApp: [+256 753 480 959](https://wa.me/256753480959)
- Instagram: [@tereezatech](https://www.instagram.com/tereezatech/)

Inquiries are sent only when the visitor sends the prepared message in WhatsApp. The website does not store inquiries on a server.

See `public/ASSET-NOTES.md` for image provenance, font licenses and the plan for replacing the supporting service imagery with the original service posters.
