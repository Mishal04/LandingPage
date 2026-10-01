# Mashallah Aluminum & Glass House — Official Website

A high-performance, architectural, mobile-first one-page business website built for **Mashallah Aluminum & Glass House** (Nishatabad, Faisalabad, Pakistan).

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Check for Unresolved Client Placeholders
```bash
npm run check:placeholders
```

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## 🛠 Tech Stack
- **Framework:** Next.js 15 (App Router, Server Components + minimal client interactivity)
- **Language:** TypeScript (Strict Mode)
- **Styling:** Tailwind CSS with custom architectural design tokens
- **Typography:** `Outfit` (headings) & `Plus Jakarta Sans` (body) via `next/font/google`
- **Icons:** `lucide-react` (thin-line stroke)
- **SEO & Schema:** Semantic HTML5, dynamic Metadata API, LocalBusiness JSON-LD (without fake aggregate reviews), sitemap.xml, robots.txt

---

## 📝 Single Source of Truth (`src/content/site.ts`)

All business data, contact numbers, services, portfolio items, and SEO copy live in **one single file**: `src/content/site.ts`.

### How to Update:
1. **Phone & WhatsApp Number:**
   - Update `phoneDisplay` (e.g., `+92 301 1093353`) and `phoneTel` (`+923011093353`).
   - Update `whatsappNumber` without leading plus or spaces (`923011093353`).
2. **WhatsApp Default Inquiries:**
   - Modify `whatsappMessage` in `siteContent.business` or individual service messages in `siteContent.services`.
3. **Photos & Gallery:**
   - Place project photos in `/public/images/projects/` (or host on CDN/asset server).
   - Replace `{ placeholder: "..." }` with the real image path string (e.g., `"/images/projects/window-1.webp"`).
4. **Google Maps Embed & Directions:**
   - Obtain the exact embed URL from Google Maps (Share -> Embed a map -> copy `src` URL).
   - Paste into `mapEmbedUrl`.
5. **Google Reviews:**
   - Copy verbatim reviews directly from the verified Google profile.
   - Replace `reviewerName`, `text`, and `stars` in `siteContent.reviews`.

---

## 🛡️ Placeholder & Anti-Fabrication Safeguard System

To guarantee that no fake content, stock imagery, or fabricated claims are ever published:
- Every unconfirmed or client-supplied field is explicitly typed as a `PlaceholderField`.
- In development/staging mode, placeholders are visibly badged on the website (e.g. `[OFFICIAL LOGO REQUIRED]`, `[CLIENT EMAIL REQUIRED]`).
- Run `npm run check:placeholders` anytime to inspect remaining requirements.
- When ready to deploy to live production, setting `NEXT_PUBLIC_LAUNCH=true` in your deployment environment variables will cause the build or check script to fail if any unresolved placeholders remain.

---

## 📋 Client-Supplied Checklist for Live Launch

Before publishing the live website, collect and update the following items from the business owner:
- [ ] **Official Logo:** High-res vector/PNG of the official wordmark/logo.
- [ ] **Email Address:** Official business email or confirmation that phone/WhatsApp is sole channel.
- [ ] **Business Operating Hours:** Exact days and opening/closing times (e.g., Mon–Sat 9am–8pm).
- [ ] **Google Maps Embed URL:** Official Google Maps Place embed link.
- [ ] **Google Reviews Verbatim Text:** Verbatim text for the known Dubai-based client review and other top 5-star reviews.
- [ ] **Project Photography:** 8–10 real, high-resolution photos of completed aluminum and glass projects in Faisalabad.
- [ ] **Workshop/Owner Photo:** Photo of the Nishatabad workshop and master craftsmen.
- [ ] **Services & About Confirmation:** Final client sign-off on the services list and introduction.
- [ ] **Official Domain Name:** Target domain configuration (e.g. `mashallah-aluminum.com`).
