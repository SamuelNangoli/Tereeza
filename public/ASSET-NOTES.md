# Tereeza image and font notes

The supplied Tereeza logos, glyphs, favicon, existing amber laptop image and Samuel Nangoli portrait were retained. The portrait is displayed as an optimized WebP; its original PNG remains in assets.

The six service posters mentioned in the earlier ChatGPT conversation were not available in either recovered ZIP or the live site's source. The new service pictures are illustrative studio images, not the user's original posters or photographs of completed customer work.

## New supporting assets

Generated using the built-in image generation tool, then exported to WebP for the website:

- `assets/service-wifi.webp` — Wi-Fi router and Ethernet cable.
- `assets/service-hardware.webp` — opened laptop and precision tool.
- `assets/service-setup.webp` — laptop, phone and mouse.

These filenames are used in both `index.html` and `services.html`. Replace them when the original service posters become available. Keep service names, descriptions and inquiry buttons as real HTML. Preserve text inside a complete poster with `object-fit: contain`; do not crop contact information or overlay another heading over the poster. Inspect all six posters before deciding whether they represent four services, additional services, or alternate versions of the same service. Any new service also needs a matching form option and entry in the choices map in `assets/site.js`.

## Generation prompts

Wi-Fi: Use case: product-mockup. Asset: photographic image for Tereeza Wi-Fi connectivity service card. One premium photorealistic studio product photograph, 4:3 landscape. A modern matte charcoal wireless router with three elegant antennas and one short neatly coiled ethernet cable on a dark midnight green pedestal. Front three-quarter angle. Rich midnight #070d0c and forest #101c19 background, restrained emerald #00e6aa edge lighting and a tiny warm amber #ffb800 status light. Realistic material texture, sharp considered commercial still life, soft shadows, subtle mist-free studio backdrop, minimal uncluttered composition, entire router in center with generous negative space above. No words, no letters, no numbers, no logos, no watermarks, no neon streaks. Preserve black, emerald and amber palette; no blue or purple.

Hardware: A single premium photorealistic studio product photograph, landscape 4:3, for Tereeza hardware troubleshooting service. Carefully opened graphite laptop underside revealing green motherboard and copper heat pipe, precision screwdriver beside it, slightly overhead 3/4 view. Midnight green #070d0c table, dark forest #101c19 backdrop, restrained emerald #00e6aa rim light, tiny warm amber #ffb800 glint on tool. Realistic material texture, sharp detailed parts, soft shadow, uncluttered product still life. Device centered, generous breathing room. No people. No words, labels, numbers, logos, watermark. No blue or purple.

Setup: A single premium photorealistic studio product photograph, landscape 4:3, for Tereeza device setup service. Matte graphite laptop open on dark pedestal with wireless mouse and a phone leaning beside the laptop. Screen shows only abstract smooth emerald green wave. Midnight #070d0c and forest #101c19 seamless backdrop, emerald #00e6aa edge lighting, subtle amber #ffb800 side light. Clean considered commercial still life, realistic texture, device centered, soft shadow, generous breathing room. No text, words, letters, numbers, interface, logos or watermark. No blue or purple.

## Typography

Headings and service names use Manrope at 600 and 700. Body copy, navigation, forms, filters and buttons use Inter at 400, 500 and 600. The Google Fonts stylesheet is linked on every page. The downloaded Latin variable fonts in `assets/manrope-latin.woff2` and `assets/inter-latin.woff2` provide matching offline fallbacks; they also originate from Google Fonts. License and copyright notices are in `assets/OFL-Manrope.txt` and `assets/OFL-Inter.txt`.

Desktop hero headings are 56px/700, section headings 36px/700, service names 18px/600, descriptions 16px/400, navigation 14px/500, buttons 14px/600, and small labels 12px/500. Headings scale down on tablets and phones. The optional DM Sans accent face is not needed in the present layouts.

## Favicon

All favicon formats are derived directly from the supplied `tereeza-icon-dark-512.png` brand asset. The SVG embeds those original pixels. ICO, 32px PNG, 192px/512px manifest icons and a 180px Apple touch icon are included. Every page references the updated icon set with a versioned URL to refresh the previous browser icon.
