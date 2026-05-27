# Job Resources Product Strategy

Updated: 2026-05-27

## One-line thesis

Job Resources should stay a useful broad directory, but its growth wedge should be developer-facing and technical work: DevRel, DevOps/SRE, AI/ML, AI infrastructure, technical writing, and technical product marketing.

## Current state

- Repo: `pavangudiwada/job-resources`
- Stack: Next.js 16, React 19, TypeScript, Tailwind CSS, Vercel Analytics
- Data source: static TypeScript arrays in `data/boards.ts`, `data/categories.ts`, and `data/seoCollections.ts`
- Current inventory: 111 job boards across 11 categories
- Strongest current category: remote jobs, with 76 boards
- Existing product surfaces:
  - category pages at `/<category>`
  - search by board name, description, and tag
  - curated best-of pages at `/best/<slug>`
  - GitHub issue template for suggesting boards

## Stale / corrected during this refresh

- README listed Next.js 15 while `package.json` uses Next.js 16.
- README roadmap still said advanced filtering/search was coming even though search exists.
- README and app header linked to `jobresources` instead of the actual `job-resources` repo.
- Contributor docs used an old `job-board-hub/jobresources` clone path.
- Contributor docs and issue template missed the `aiml` and `crypto` categories.
- Category page footer labels linked to broad category pages instead of the matching `/best/<slug>` collection pages.
- Lint failed on `WelcomeBanner.tsx` because React 19 lint rules reject synchronous state setting in an effect and unescaped apostrophes.

## Product direction

### Keep

- Simple static directory model.
- Manual curation first.
- Broad categories for general utility.
- Fast pages and shareable collection URLs.

### Focus

Use the strongest differentiator: technical job-search resources for people who work around developer products and infrastructure.

Priority audiences:

1. Developer relations and developer advocacy candidates.
2. Technical PMM / developer marketing candidates.
3. DevOps, SRE, cloud-native, and infrastructure engineers.
4. AI/ML and AI infrastructure candidates.
5. Technical writers and docs engineers.

### Avoid

- Becoming another generic remote-job-board list.
- Adding automation before links and metadata are clean.
- Publishing scraped jobs without source quality checks.
- Mixing this project into Pavan's personal website or AI SRE Watchlist.

## Near-term update plan

1. Data quality pass
   - Add a tiny validation script for duplicate links, invalid categories, missing tags, and malformed URLs.
   - Flag dead or suspicious links before adding new boards.
   - Normalize tags for repeated concepts like `developer-relations`, `devops`, `ai`, `ml`, `startup`, and `remote`.

2. Niche collection pass
   - Add `/best/devrel-jobs` improvements.
   - Add `/best/devops-sre-jobs` or `/best/cloud-native-jobs`.
   - Add `/best/technical-product-marketing-jobs` once enough high-quality sources exist.
   - Add stronger intros explaining who each collection is for.

3. Contribution workflow
   - Keep board suggestions as issues.
   - Add required fields for category, tags, active/recent listings proof, and reason it belongs.
   - Prefer one PR per small board batch.

4. Content loop
   - Weekly roundup: "5 technical GTM / DevRel / infra job boards worth checking".
   - Role teardown: why a specific job description is interesting.
   - Candidate guide: how to evaluate devtools PMM/DevRel jobs.

## Implementation principles

- Branch + PR for repo changes.
- No personal-site dependency.
- No AI SRE Watchlist dependency.
- Keep static data until update volume proves a database is needed.
- Prefer small verified improvements over large rewrites.

## Acceptance checks for future PRs

- `npm run lint`
- `npm run build`
- no broken internal links in README/CONTRIBUTING/docs
- no invalid category IDs in `data/boards.ts`
- no duplicate board links
