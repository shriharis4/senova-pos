# SENOVA POS - Handover Notes

Ye project open-source FloCafe (MIT license) se liya gaya hai aur SENOVA Digital Labs ke liye rebrand kiya gaya hai. Is file mein likha hai ki kya ho chuka hai, kya baaki hai, aur kahan dhyan rakhna hai.

Original MIT license aur original copyright line `LICENSE` mein rakhi gayi hai. Ye license ki shart hai, ise mat hatana. Neeche agency ki apni copyright line judi hui hai.

Agent rules aur repo ke niyam `AGENTS.md` mein hain. Pehle use padho.

## Project chalane ke liye

- Node.js 22 ya usse naya chahiye.
- `npm install` karo, phir `npm run dev` se poora Electron app chalta hai.
- Ports 3001 (API), 3002 (KDS), 3003 (Server App) use hote hain. `EADDRINUSE` aaye to `npm run clean` chalao.
- Frontend `frontend/` mein hai (Next.js). Backend `main/` mein hai (Electron + Express + SQLite).

## Jo ho chuka hai

- Naam FloCafe, Flo Cafe, FloPOS aur Flo se badal kar SENOVA POS kiya gaya (code, UI, 32 languages ki translations, receipts, docs, scripts, CI files).
- `package.json` mein name `senova-pos`, productName `SENOVA POS`, appId `com.senovadigitallabs.pos`, aur author aur description agency ke hisaab se set hain.
- Window title "SENOVA POS - Restaurant Manager" hai (`main/window-options.ts`).
- Logo aur saare icons (Windows, Mac, Linux, Windows Store tiles, favicon, PWA) naye logo se bane hain. Login screen par poora logo aur setup screen par chhota icon hai.
- Receipt footer ab "Powered by SENOVA Digital Labs" hai (`frontend/src/lib/printer/branding.ts` aur `main/printers/formatting-helpers.ts`).
- Settings ke About section mein agency ka text aur "Developed and maintained by SENOVA Digital Labs." hai.
- Website `https://www.senovadigital.xyz/` aur email `info@senovadigital.xyz` set hain.
- Original author ka telemetry server hata diya gaya. Ab URL placeholder hai (neeche dekho).
- Naye features ke liye khaali stub files bani hain (neeche dekho).
- **GitHub ka asli naam lag gaya hai.** `SenovaDigitalLabs/senova-pos` placeholder ab `NaveenChavan/senova-pos` (asli repo) se badal diya gaya hai — `package.json` (`repository`, `bugs`, `build.publish`), `main/tax-packs/catalog.ts`, `main/downgrade-recovery.ts`, Settings ka About page, saari `README*.md`, `SECURITY.md`, `CONTRIBUTING.md`, `.github/` (workflows, issue templates, `FUNDING.yml`), `scripts/uninstallers/`, `scripts/tax-packs/prepare-release.cjs`, `assets/com.senovadigitallabs.pos.metainfo.xml`, kuch `docs/` pages, aur in naamon ko assert karne wale tests (`tests/release-config.test.ts` aur tax-pack tests) sab mein. Tax packs ka sibling repo `senova-pos-plugins` abhi tak bana nahi hai (neeche point 3 dekho), isliye uska owner bhi placeholder se `NaveenChavan` kiya gaya hai par repo khud create karna baaki hai.

## Baaki kaam: pehle ye karo

1. **Telemetry aur cloud server.** Ye teen jagah placeholder domain hai jo abhi exist nahi karta:
   - `main/services/telemetry.ts` line 22 (`TELEMETRY_URL`).
   - `main/services/cloud-sync.ts` line 38 aur `main/db.ts` line 500 (`DEFAULT_CLOUD_SERVER_URL`).

   Core POS flow (orders, billing, KDS, printing) in par depend nahi karta. Cloud login aur sync features tab tak kaam nahi karenge jab tak apna server nahi hai. Apna server banao ya in features ko band karo.
2. **Tax packs.** Tax packs `NaveenChavan/senova-pos-plugins` naam ke repo se download hote hain (owner naam update ho gaya hai, par repo khud abhi bana nahi hai). Saath mein packs original author ki signing key se verify hote hain (`main/tax-packs/trusted-signing-key.ts`). Apni key banao, uski public key is file mein lagao, aur private key ko CI secret `TAX_PACK_SIGNING_KEY` mein rakho. Tab tak online tax pack download kaam nahi karega. `docs/guides/adding-a-tax-pack.md` padho.
3. **Signing aur store identities.** `package.json` mein ye abhi original company ke hain: `Codify Apps Private Limited`, `BKDY677XJA` (Apple Team ID), aur Windows Store `publisher` aur `identityName` (lines 510 se 515 aur 539, 558, 585 ke aas-paas). Inhe apne Apple aur Microsoft Partner accounts ke values se badlo, ya jo store builds nahi chahiye unke targets hata do. `fastlane/Fastfile` bhi dekho.
4. **CI secrets.** `.github/workflows/` ye secrets maangta hai: `APPLE_API_ISSUER`, `APPLE_API_KEY`, `APPLE_API_KEY_ID`, `MAC_CERTS`, `MAC_CERTS_PASSWORD`, `WINDOWS_CERTS`, `WINDOWS_CERTS_PASSWORD`, `SNAPCRAFT_STORE_CREDENTIALS`, `GOOGLE_DRIVE_CLIENT_ID`, `GOOGLE_DRIVE_CLIENT_SECRET`, `POSTHOG_CLI_API_KEY`, `POSTHOG_PROJECT_TOKEN`, `TAX_PACK_RELEASE_TOKEN`, `TAX_PACK_SIGNING_KEY`. Release workflows tab tak nahi chalenge jab tak ye apne repo mein set na hon.
5. **Google Drive backup.** Apna Google Cloud OAuth app banao aur client ID aur secret build mein do. Steps `docs/google-drive-setup.md` mein hain.
6. **Website par ye pages banao.** Setup screen ye links dikhati hai: `https://www.senovadigital.xyz/terms`, `/privacy` aur `/disclaimer`. Abhi ye nahi hain, to link 404 dega. Docs aur download ke links abhi homepage par ja rahe hain.

## Baaki kaam: baad mein

- **README ka content.** Naam badal gaya hai, par text abhi bhi original marketing ka hai ("free forever, open-source" jaisi baatein). Poora rewrite karo. `README*.md` mein Apple App Store, Microsoft Store aur Snap Store ke links original app ke hain. Inhe hatao ya apne store links lagao.
- **Screenshot.** `docs/images/senova-pos.webp` original app ka screenshot hai, sirf naam badla hai. Apna screenshot lagao.
- **Logo ke baaki kaam.**
  - `senova-logo-light.png` aur `senova-logo-dark.png` (alag light aur dark version) nahi bane. Ek hi logo dono theme par chalta hai.
  - `assets/logo.svg` (purana Flo logo, code mein kahin use nahi hota) delete ho gaya hai. `frontend/public/logo.svg` (wahi purana Flo mark) abhi bhi maujood hai — koi UI component ise render nahi karta, par `frontend/public/sw.js` ke `PRECACHE_URLS` mein list hai. Us list mein `cache.add()` per-URL hai aur fail hone par silently catch hota hai, isliye file hata dene se service worker install nahi tootta, par file ko sach mein delete karna ho to pehle `sw.js` se `'/logo.svg'` line hatao, taaki stale reference na rahe. `sw.js` ka `CACHE_NAME` bhi abhi `'flo-v19'` hai — ye bhi purana naam hai, badalne se naya cache version force hoga (purane clients ka cache invalidate karega), isliye jaan-boojh kar nahi chheda.
  - `frontend/public/manifest.json` mein icon `"any maskable"` hai. Android par hexagon kat sakta hai. Alag maskable icon (charon taraf zyada padding) banao.
- **Naye features.** Teen stub files bani hain jo abhi khaali hain aur kisi jagah se call nahi hoti:
  - `main/services/whatsapp-billing.ts`: `sendWhatsAppBill(orderId, customerPhone, pdfBuffer)`.
  - `main/services/cloud-sync-webhook.ts`: `pushDailySummaryToCloud(date, totalsObj)`.
  - `main/services/qr-cloudflare-tunnel.ts`: `initQRTunnel()`.

  Pehle se `main/services/whatsapp.ts` aur `main/services/cloud-sync.ts` maujood hain. Naya code likhne se pehle unhe padho.
- **Linux par menu bar.** Screenshots mein "File Edit View..." menu upar-left mein business ke naam par chadha dikha. Ye rebrand se pehle ka layout issue lagta hai (`frontend/src/components/layout/`). Maine isse nahi chheda aur poori tarah investigate nahi kiya.

## Naam jo badle (purane installs par asar)

Naye product ke liye ye theek hai. Par FloCafe ke purane install, backup ya export in naamon par naye app mein nahi milenge. Agar purane users ka data le jaana ho to migration likhna padega.

- Linux data folder `~/.config/flo-desktop` se `~/.config/senova-pos` hua (`main/index.ts`).
- Local backup folder `SENOVA POS/Backups` hai (`main/services/local-backup.ts`).
- Google Drive folder `SENOVA POS Backups` hai. Drive ke andar ki keys `flocafe_menu`, `flocafe_backups`, `flocafe` ab `senova_menu`, `senova_backups`, `senova-pos` hain (`main/services/google-drive.ts`).
- Browser storage keys `flocafe:*` ab `senova:*` hain.
- Ticket QR prefix `FLOCAFE-TICKET:` ab `SENOVA-TICKET:` hai. Purane chhape QR tickets scan nahi honge.
- Merchant print template ka format `senova-pos-merchant-print-template` aur export file ka suffix `.senova-pos-template.json` hai. FloCafe se export ki gayi template files import nahi hongi.
- Env variables `FLOCAFE_*` ab `SENOVA_*` hain.
- Windows par `.exe` ka naam `productName` se aata hai, yani `SENOVA POS.exe`.

## Naam jo jaan-boojh kar nahi badle

Ye andar ke naam hain. Inhe badalne se data ya compatibility toot sakti hai, isliye chhode gaye:

- Database file `flo.db`.
- `FLO_*` env variables (jaise `FLO_E2E_USER_DATA_DIR`).
- Google Drive property key `flo_destination_kind`.
- Tax pack ke fields jaise `minFloVersion`.
- `CHANGELOG.md` (automated hai, `git-cliff` se banta hai).

## Tests ki sthiti

- Poora `npm test` ek baar mein nahi chala. Chain `test:merchant-template-transfer` tak chali. Wahan rebrand ki wajah se asli failure mili (format naam badla, to golden fixture ka checksum purana tha). Maine `tests/fixtures/merchant-templates/transfer/golden-envelope-v1.json` ka checksum naye naam ke hisaab se dobara banaya, aur wo test ab pass hai. Uske baad ke lagbhag 173 steps chale hi nahi. **Poora `npm test` chalao.**
- Alag se pass hone wale checks: `npm run lint`, `npm run build`, `npm run build:frontend`, `npm run i18n:check`, backend aur frontend `tsc`.
- `tests/print-parity.test.ts` mein test cafe ka naam "SNV Parity Cafe" kiya gaya hai. Lamba naam 58mm receipt par fit nahi ho raha tha.
- Nepali order slip ka ek check `browser-receipts` test mein `tests/run-electron-node-test.cjs` runner par fail hota hai, original code par bhi. `npm test` ke andar chalne par wo pass hua.
- Receipt ka golden file `tests/fixtures/receipt-columns/golden-receipt-columns-v1.txt` naye footer ke saath update hai. Receipt ki width badalo to `AGENTS.md` ka "Print width" note padho.
- Maine rebrand ke dauran bulk find-and-replace chalaya tha. Usse do jagah naam mein space aa gaya tha (`package.json` ka GitHub repo naam aur Windows Store ids, aur Windows uninstaller script ka function naam). Wo theek kar diye hain. Isi tarah ki koi aur choti galti reh gayi ho sakti hai, to poora `npm test` zaroor chalao.

## Git

- Remote `origin` aapka repo `NaveenChavan/senova-pos` hai.
- Original author ka repo `upstream` naam se rakha hai aur uska push band hai. Us par kuch push mat karna.
- Commit messages Conventional Commits mein likho (`feat:`, `fix:`, `docs:`, ...). Detail `AGENTS.md` mein hai.
