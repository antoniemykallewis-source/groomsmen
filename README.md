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

All seven portraits are assigned. The couple's boat photo is the hero. The page has no Find My notes. Chuy handles vibes and drinks. Luis handles guest questions and seating before 4:30pm and is free for his speech and the toasts.

## Publication

This repository is public, so its source, photos and wedding details are publicly readable. Uploading these files does not deploy a website or change vessel-archive.com. The page includes `noindex` directives and remains absent from the public Vessel navigation. Framer still needs the page route and asset URLs configured if this is merged there.

## Timing items still to confirm

The brief gives a 4:00pm arrival/holding-room instruction and a separate 4:00pm front-row seating instruction for Kelvin. It also places Harris on the altar while saying all seven sit front row. Those statements remain flagged in FRAMER_INTEGRATION.md; no revised ceremony timing has been invented.
