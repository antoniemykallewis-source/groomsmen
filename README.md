# Antonie + Yada / Groomsmen

The wedding weekend plan for November 19 and 20, 2026 in Phuket, Thailand. Built in the Vessel Archive design system.

## Open the page

Open `index.html` directly, or serve this folder locally:

```sh
python3 -m http.server 8080
```

No install step, framework or package dependencies are needed. Photos are in `assets/` and load with relative paths, so the page also works under a GitHub project-site path.

## Edit

`Workshop/VesselArchiveSite.tsx` contains the page and all original Vessel routes. Search for `GROOMSMEN_ASSETS`, `GROOMSMEN_CREW`, `GROOMSMEN_WALK`, `GROOMSMEN_CSS` or `GROOMSMEN_PAGE`.

After editing, rebuild the standalone page:

```sh
node scripts/build.cjs
```

`merge/groomsmen.additions.ts` is the focused Framer addition. Keep it in sync if changing the shared component. See [FRAMER_INTEGRATION.md](FRAMER_INTEGRATION.md) for the existing site's route integration.

## Confirmed photo map

| Person | Asset | Original photo |
| --- | --- | --- |
| Will Robinson | `assets/will.webp` | IMG_5862.jpeg |
| Tim Saechou | `assets/tim.webp` | IMG_5861.jpeg |
| Kelvin Watts | `assets/kelvin.webp` | IMG_5866.jpeg, Christmas sweater |
| Malik Howard | `assets/malik.webp` | IMG_5864.jpeg, black-and-white portrait |
| Chuy | `assets/chuy.webp` | IMG_5867.jpeg, right-hand person in white shirt |
| Luis Shalabi | `assets/luis.webp` | IMG_5863.jpeg, seated by planter |
| Harris | `assets/harris.webp` | IMG_5865.jpeg, hat |

All seven portraits are assigned. The couple's boat photo is the hero. The page has no Find My notes. Chuy helps guests find seats before 4:30pm and brings the vibes. Luis holds the vows, gives a speech and is off logistics during the toasts. Malik owns photos. Kelvin gathers the crew, phones, gifts and belongings for Catch at 10:00pm. Will has no separate rooftop assignment. Thursday rehearsal is a comfortable walkthrough; rehearsal dinner dress code is ELEVATED CASUAL.

## Publication

This repository is public, so its source, photos and wedding details are publicly readable. Uploading these files does not deploy a website or change vessel-archive.com. The page includes `noindex` directives and remains absent from the public Vessel navigation. Framer still needs the page route and asset URLs configured if this is merged there.

## Timing items still to confirm

Everyone arrives at Cape Sienna by 4:00pm and waits until called. Kelvin has no seating duty. Harris remains at the altar as officiant; the original seven-person/front-row count remains noted in FRAMER_INTEGRATION.md.
