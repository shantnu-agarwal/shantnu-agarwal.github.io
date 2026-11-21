
# shantnu.in — Technical Implementation Plan

## Project objective

Build a production-quality, responsive personal-brand and publishing website for shantnu.in.

Prioritise:
1. Content accuracy
2. Visual quality
3. Maintainability
4. Accessibility
5. Performance
6. SEO and discoverability
7. Security and privacy

## Technology stack

Recommended:
- Vanilla HTML, CSS, JS.

Use current stable, mutually compatible package versions.

Do not add libraries unnecessarily.

## Content architecture

Store content separately from presentation.

Suggested approach:

content/
  articles/
  projects/

src/
  app/
  components/
  lib/
  styles/

docs/
  PROJECT_BRIEF.md
  CONTENT.md
  DESIGN_SYSTEM.md
  INTERACTIONS.md
  IMPLEMENTATION.md

Use project data records for:
- Title
- Slug
- Category
- Role
- Period
- Description
- Metrics
- Case-study sections
- Publication readiness

Use MDX or equivalent for articles.

Support draft/published state.

Never publish draft material accidentally.

## SEO

Implement:
- Unique page titles
- Meta descriptions
- Canonical URLs
- Open Graph metadata
- Social sharing images
- sitemap.xml
- robots.txt
- RSS feed
- Structured data where appropriate

Structured data:
- Person
- WebSite
- Article/BlogPosting for actual published articles
- BreadcrumbList where useful

Use accurate factual information.

Do not add fabricated reviews, ratings, publications or credentials.

## Performance

Target strong Core Web Vitals.

Recommended:
- LCP at or below 2.5 seconds
- INP at or below 200 milliseconds
- CLS at or below 0.1

These are performance targets, not guaranteed measured results.

Use:
- Server rendering or static generation where appropriate
- Image optimisation
- Lazy loading below the fold
- Responsive images
- Font optimisation
- Limited JavaScript
- Code splitting
- Optimised media formats

Avoid loading full-resolution drone footage immediately.

## Accessibility

Target WCAG 2.2 AA.

Check:
- Heading hierarchy
- Keyboard access
- Focus styles
- Navigation
- Colour contrast
- Forms
- Media controls
- Image alt text
- Reduced motion
- Screen-reader semantics

## Security

- Validate all form submissions server-side.
- Use anti-bot verification and rate limiting.
- Keep API keys server-side.
- Store secrets in environment variables.
- Avoid unnecessary personal data collection.
- Never commit credentials.
- Do not expose the owner's private contact details.

## Deployment

Preferred initial hosting:
Vercel.

Domain:
shantnu.in.

Do not change live DNS or deploy to the production domain without explicit approval.

Support:
- Preview deployments
- Environment configuration
- Production build
- Error monitoring

## Development phases

### Phase 1 — Foundation

- Inspect repository
- Initialise Next.js if required
- Configure TypeScript and Tailwind
- Set up fonts and design tokens
- Create layouts and routing
- Build header and footer
- Establish content model

Acceptance:
Application builds, basic routes exist, design tokens are reusable.

### Phase 2 — Homepage

- Implement approved hero
- About preview
- Selected work
- IIMA section
- Notes preview
- Life preview
- Contact invitation

Use approved content.

Acceptance:
Responsive desktop and mobile homepage with no invented information.

### Phase 3 — Main pages

Implement:
- About
- Work
- Notes
- Life
- Contact

Acceptance:
Approved copy, consistent layout and complete navigation.

### Phase 4 — Detailed content

Implement:
- Work case-study templates
- Individual article templates
- Article categories
- Draft/published filtering
- Reading time
- Related content
- Research publication links

Acceptance:
All published content is genuine and internally consistent.

### Phase 5 — Media and interactions

Implement:
- Photography gallery
- Drone video component
- Contact form
- Spam protection
- Email reveal
- LinkedIn link

Use placeholders until original media and actual contact details are supplied.

Acceptance:
All enabled interactions work, are accessible and handle errors gracefully.

### Phase 6 — SEO and optimisation

- Metadata
- Structured data
- Sitemap
- RSS
- Responsive image optimisation
- Performance analysis
- Accessibility audit

Acceptance:
No known high-severity accessibility, security or build issues.

### Phase 7 — Quality assurance

Test:
- Desktop at 1440px
- Tablet around 768px
- Mobile at 390px
- Narrow mobile around 320px

Also test fluid widths between breakpoints.

Verify:
- No horizontal overflow
- No broken links
- No fabricated content
- No missing assets
- No console errors
- All routes render correctly
- All interactive controls work
- Content remains readable

Run:
- Type checking
- Linting
- Production build
- Relevant automated tests
- Browser-level visual inspection

## Initial implementation instruction

First inspect the project repository.

Read AGENTS.md and the five specification documents.

Identify missing assets and configuration.

Produce an implementation plan before making major architectural changes.

Build the homepage first.

Compare the browser-rendered homepage against the editorial visual reference.

Use the approved text rather than attempting to transcribe content from the design image.

Do not deploy without explicit approval.
