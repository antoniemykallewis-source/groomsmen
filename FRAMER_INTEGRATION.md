# Vessel Archive / Groomsmen code handoff

Merge the supplied implementation into the EXISTING `Workshop/VesselArchiveSite.tsx` that already renders the homepage and city pages. This request is a code handoff. Nothing has been published.

## Open these first

1. `merge/groomsmen.additions.ts`: readable, focused implementation. Includes the content, photo mapping, scoped CSS, page HTML, footer and copy-button behavior.
2. `Workshop/VesselArchiveSite.tsx`: complete integrated snapshot built from the currently published VesselArchiveSite source retrieved October 2, 2026. This file already has the route, metadata, selector and effect changes below. Compare it with the editor's latest file before replacing anything. An unpublished editor draft may be newer.
3. `index.html`: standalone working preview. Photos are embedded here so this file opens by itself. Fonts load from the same Google Fonts stylesheet as the existing site.
4. `assets/`: optimized real photos. All seven groomsmen portraits have confirmed name mappings.

The implementation follows the site's existing string-rendered `ROUTES` architecture. It does not introduce a second React app, a Framer AI page, a canvas poster or a different visual system. It uses the actual Archivo, Instrument Serif and Martian Mono typefaces, paper `#F2EEE5`, ink `#0B0B0B` and lime `#DFFF00` from the published site.

## Merge into the latest source

The complete TSX already does all of this. If the Framer editor has newer changes, merge the focused addition instead:

1. Paste `merge/groomsmen.additions.ts` above the existing `ROUTE_META` declaration, in the SAME file.
2. Add `"/groomsmen": GROOMSMEN_META` inside the existing `ROUTE_META` object.
3. Add `"/groomsmen": GROOMSMEN_PAGE` inside the existing `ROUTES` object.
4. Append `"/groomsmen"` to `ROUTE_KEYS` and append `"Groomsmen (hidden)"` to the matching `optionTitles` array at the same index. Existing indices must stay paired. The supplied snapshot has 27 routes and 27 titles, including the new one.
5. In the `html` useMemo, replace the final footer expression `+ FOOTER` with `+ (route === GROOMSMEN_PATH ? GROOMSMEN_FOOTER : FOOTER)`. Preserve the existing header and its navigation.
6. Add this hook unconditionally inside `VesselArchiveSite`, alongside the other hooks:

```tsx
useEffect(() => {
  if (props.route !== GROOMSMEN_PATH) return;
  return mountGroomsmenPage(document.querySelector(".gm-page"));
}, [props.route]);
```

`useEffect` is already imported. This effect activates the room-code copy control and route-specific robots directives. It restores prior robot tags and page mode when the route unmounts. Everything else uses native anchors and links.

7. Create or use the Framer `/groomsmen` page and set THIS component instance's `route` property to `/groomsmen`. A code route entry alone does not create a Framer page URL.
8. Keep `/groomsmen` out of all desktop/mobile navigation, footer navigation, service-area lists and public page indexes. There is no link to it in the supplied public header or footer.
9. In Framer's page settings, turn search indexing off and keep it out of the sitemap. Set the page title and description to `GROOMSMEN_META`. Also set a page-level `<meta name="robots" content="noindex, nofollow, noarchive">` in the head; the runtime guard supplements this, rather than replacing server-delivered settings. This is an unlisted page, not a password-protected page.
10. Use Framer's actual code editor. Do not use the Framer AI panel or the old poster draft.

## Photo setup

The ten filled `GROOMSMEN_ASSETS` values are readable local preview paths. Upload the matching files from `assets/` to Framer, then replace those ten strings with the actual returned HTTPS asset URLs. Do not guess or invent URLs, and do not leave relative `assets/` paths on the published Framer page. All images and content remain in this same component file through the asset map.

| Asset key | File | Grounding |
| --- | --- | --- |
| `hero` | `assets/antonie-yada-boat.webp` | User's boat photo, `8E27895C-D874-4504-9A5E-A500052C829C.jpeg` |
| `tim` | `assets/tim.webp` | `IMG_5861.jpeg`; sunglasses and dark Rüfüs Du Sol shirt |
| `will` | `assets/will.webp` | `IMG_5862.jpeg`; glasses and gray hoodie |
| `chuy` | `assets/chuy.webp` | `IMG_5867.jpeg`; man at right in white shirt and backward cap; CSS crop isolates him |
| `cape` | `assets/cape-sienna.webp` | Official Vanilla Sky Bar terrace image |
| `catch` | `assets/catch-beach-club.webp` | Official Catch Beach Club image |

All seven portraits were confirmed by Antonie on October 2, 2026. Additional mappings:

| Asset key | File | Confirmed original |
| --- | --- | --- |
| `harris` | `assets/harris.webp` | `IMG_5865.jpeg`, white man with a hat |
| `malik` | `assets/malik.webp` | `IMG_5864.jpeg`, black-and-white portrait with dreads |
| `luis` | `assets/luis.webp` | `IMG_5863.jpeg`, seated by the planter |
| `kelvin` | `assets/kelvin.webp` | `IMG_5866.jpeg`, Christmas sweater |

The dog photo, Airbnb screenshot and seating graphic are not page assets.

Venue images are used only as location references. Sources:

- Cape Sienna: https://www.capesienna.com/restaurants/vanilla-sky-bar-gastro-pub/
- Cape photo: https://www.capesienna.com/media/uploads/cms_apps/imagenes/1.jpg?q=pr:sharp/rs:fill/w:1200/h:850/g:ce/f:jpg
- Catch: https://www.catchbeachclub.com/
- Catch photo: https://www.catchbeachclub.com/wp-content/uploads/2024/01/CATCH-59-2-1024x683.webp

Blue Sea has its own text location card and exact map link; the two other venue cards include real venue photos. Do not substitute an unrelated venue image.

## Content that must stay exact

- Hero: `SHOW UP READY.` Smaller serif line: `Lock in.` The profanity is a small supporting line only.
- Seven role cards: Will, Tim, Kelvin, Malik, Chuy, Luis, Harris. Harris is the officiant, not part of the procession.
- Tim's transport assignment is to confirm rides and pickup times only. Will holds the rings, gives a speech, keeps Antonie on time and covers the floor while Tim speaks.
- Luis holds the vows, gives a speech and is off logistics during the toasts. Malik owns Airbnb/venue photos and keeps the seven together for the photographer. Kelvin gets all seven to Cape Sienna by 4:00pm, then gathers the crew, phones, gifts and personal belongings for Catch at 10:00pm. Kelvin has no seating duty.
- Chuy helps guests find seats before 4:30pm, brings the vibes and handles drinks. He has no Thursday hosting duty. Keep spelling `Chuy`. Keep all Find My notes and the “then sits in front row” phrase off the page.
- The full 12-person walk order is a numbered text list. Harris remains at the altar. Menelope Flores is the flower girl. The five named non-groomsmen remain in that walk list only.
- Friday: Airbnb prep/photos; Cape Sienna by 4:00pm; wait in the room until called; guests on the rooftop by 4:30pm; ceremony 5:00pm sharp; celebration until 10:00pm; Catch 10:00pm to midnight.
- Thursday: 4:30pm comfortable rehearsal walkthrough at Cape Sienna; 6:00pm Blue Sea welcome party / rehearsal dinner. Dinner dress code: ELEVATED CASUAL. No changing-clothes instruction or 90-minute change window.
- Black suit, white button-up, no tie. Omit room-block codes and flight/airport information.
- Stay November 16 to 24, 2026, hosted by Pk and Lynn at 8 Rim Tarn Village, Choeng Thale, Phuket 83110, Thailand.
- Keep the five exact external links in `GROOMSMEN_LINKS`.
- No driving references, Japan trip, guest dress code, standing groomsmen arrangement, old poster or new seating diagram in this page.

## Schedule details to confirm before publishing

The latest corrections remove the separate rooftop deadline, Kelvin seating duty and Thursday change window. One original count remains to clarify:
- “All seven sit front row” includes Harris in the seven-person crew, while he officiates from the altar. The page explicitly calls out his altar role. Confirm whether the front-row count is meant to exclude the officiant during the ceremony.

Do not resolve these by changing a person's role or inventing an event time.

## Verification already done

- The full integrated file's JavaScript syntax and route constants evaluate successfully with only React/Framer entry points stubbed.
- 27 route keys and 27 option titles are paired. The original 26 route bodies, header, footer and site CSS remain unchanged outside the groomsmen branch.
- Local Chromium renders checked at 1440px, 768px, 390px and 320px. No horizontal page overflow, broken embedded images, missing in-page targets or browser script errors.
- Exactly seven role cards and twelve procession entries. Hero has one H1.
- All seven groomsmen portraits use confirmed user-provided name mappings.

This is not a Framer editor publish test. After merging, test the actual Framer page at desktop and mobile widths, confirm all uploaded asset URLs, turn off page indexing, and resolve the remaining timing details before publishing the hidden page.
