# The Complete 90-Day SEO Plan (Gotch SEO Masterclass Implementation)

This document distills the comprehensive 90-day SEO plan framework, adapted specifically to the GoQuickSilver Next.js application, based on Nathan Gotch's masterclass.

## Phase 1: Keyword Profiling & Topical Optimization (Days 1 - 30)

### 1. Identify Primary Keywords
- Pick 50 to 100 primary keywords closely tied to conversions (e.g., "best airport shuttle", "student transport saudi arabia").
- **Match Intent:** Ensure exactly one primary keyword per page. Use commercial intent keywords for transaction pages, informational for blogs.

### 2. Identify Secondary Keywords (Splintering)
- When a page ranks partially for a relevant secondary topic but the page doesn't satisfy the exact intent (e.g., ranking for "best corporate shuttle" on an "airport shuttle" page), splinter it.
- Create a dedicated, highly relevant page for the secondary keyword. This builds topical authority and internal linking structure.

### 3. Prioritize via Data Metrics
- **Metrics to weigh:** Search Volume (high is better), KD (Keyword Difficulty - low is better), CPC (high is better for commercial intent), Current Position (high is better, easier to push up), Intent (Commercial vs. Info), Target Word Count (matching the SERPs), and Competitor DR (Top 5 has a low DR competitor?).
- Give keywords a **Relevance Score (1-5)** to prioritize based on the core offer logic.

---

## Phase 2: Technical SEO Audit & Clean-up (Days 31 - 60)

### 1. Status Code Audit (301s and 404s)
- Eliminate unnecessary 301 redirects that hurt server load and create redirect chains. Change existing internal links from the old 301 URL to the final destination URL.
- Fix 404 Pages: Analyze 404s with traffic or backlinks and implement proper 301 redirects to the most relevant equivalent page. Remove any internal links pointing to 404s.

### 2. Crawlability & Architecture
- **Rule of 3 Clicks:** No page should be deeper than 3 clicks from the homepage in the site architecture.
- Ensure all pages are accessible and there is a high number of unique inlinks pointing to key pages.

### 3. Engagement & Performance Checks
- Pages with < 58% engagement rate/high bounce rate must be analyzed and updated.
- Purge Dead Weight: Pages with zero traffic, zero clicks, and zero backlinks should be deleted, redirected, or heavily upgraded.
- Ensure perfect Google PageSpeed scores, especially on mobile.

---

## Phase 3: Ranking Diagnosis & On-Page SEO (Days 61 - 90)

Apply this diagnostic checklist to priority pages:

### The Basic On-Page SEO Checks
- [ ] Keyword in the accurate Title tag (`<title>`)
- [ ] Keyword in the Meta Description (`<meta name="description">`)
- [ ] Keyword in the URL slug
- [ ] Keyword in the `<h1>` tag (and ensure it's the only `H1` above the fold)
- [ ] Keyword in the first `<h2>` tag
- [ ] Keyword in the first and last sentences naturally
- [ ] Self-referencing canonical tag is present (`<link rel="canonical">`)
- [ ] Indexable setup (`index, follow` robots meta or `robots.ts`)

### Trust, User Experience, & E-E-A-T
- [ ] H1 tag prominently placed above the fold
- [ ] Easy CSS/Typography scanning (short paragraphs, bullet points)
- [ ] Rich Media integration (unique, high-quality images/video breakpoints)
- [ ] Zero aggressive interstitial pop-ups or ads above the fold
- [ ] Evident Trust Signals: Links to **About, Contact, and Terms of Service** in footer/nav.
- [ ] First-hand experience/unique value (Content demonstrates "Personal field experience", real photos, and first-person voice).
- [ ] The author/expert is prominently displayed.

### Technical On-Page & Authority
- [ ] Load speed > 90 on Google PageSpeed (Mobile and Desktop)
- [ ] Schema Markup (Organization, Website, Article/Service FAQ)
- [ ] Topical Support: Domain has >= 5 highly supportive pieces of content linking to the page
- [ ] Proper Internal Links: Anchor text is diverse, natural, and accurately pushes authority.
- [ ] Keyword Cannibalization Check: Ensure no two pages are competing for the identical exact keyword phrase.
- [ ] Word Count matched or slightly exceeding SERP optimal averages

## Implementation Plan for GoQuickSilver (Next Steps)
1. Add E-E-A-T links to the main layout (`/app/layout.tsx` footer: About, Contact, Terms, Schema updates).
2. Clean up 301/404 handling and verify internal link depths in the navigation.
3. Apply the detailed On-Page SEO framework to main commercial pages (`/airport-shuttle/`, `/deals/`).
