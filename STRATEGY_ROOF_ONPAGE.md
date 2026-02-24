# Quicksilver Airport Shuttle On-Page & Silo Strategy (Roof Protocol)

This strategy is based on the "Kyle Roof" secrets to on-page SEO excellence, focusing on structural authority and contextual density.

## 1. The Reverse Silo Architecture
*Logic: Supporting pages do the heavy lifting for money pages.*
- **Money Pages (Target Pages):**
    - `/airport-shuttle/kansas-city`
    - `/airport-shuttle/overland-park`
    - `/airport-shuttle/lawrence`
- **Supporting Pages (Blog/Guides):**
    - Articles that answer specific long-tail questions (e.g., "Airport pickup protocols," "Highway tolls") MUST link directly to the corresponding Money Page.
    - **Link Pattern:** Blog Article -> Money Page (Primary Link) + Blog Article A -> Blog Article B (Daisy Chain).
- **Isolation:** Supporting pages in a silo should *only* link to their target money page and other pages in the same silo. This focuses all "link juice" on the conversion target.

## 2. URL Flattening (The .COM rule)
- **Goal:** Keep target pages within 1 folder of the root domain.
- **Current:** `goquicksilver.com/airport-shuttle/kansas-city`
- **Optimization:** Move pages to `app/(routes)/...` to achieve `goquicksilver.com/kansas-city` (if applicable).

## 3. Contextual (LSI) Density
*Logic: AI misses these, Google needs them for context.*
- Use the **"Midpoint Zone"** (approx. 150 terms for 1,500 words).
- **Core Contextual Terms for Quicksilver:**
    - `Verified Commercial License`
    - `Airport logistics`
    - `Fixed-rate protocol`
    - `Terminal facilitation`
    - `Professional chauffeur`
    - `Premium fleet`
    - `Highway toll inclusion`
    - `24/7 dispatch center`
    - `Local expert drivers`
    - `Vetted transit service`

## 4. EAT Tick-Boxes
- Physical address in `footer.tsx` (Kansas City Metro Area).
- Links to Privacy Policy and Terms of Service (already implemented).
- Expert Bio (John Quicksilver) integrated into blog posts to satisfy reviewer expertise models.

## 5. Reverse Word-Count Logic
- Don't just look at visible text. Ensure the HTML structure (H2s, H3s, Alt tags) is keyword-rich.
- Target word count for Money Pages: **1,650 words** (mixture of visible text and robust metadata).
