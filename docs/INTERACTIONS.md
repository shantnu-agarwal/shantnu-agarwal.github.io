
# shantnu.in — Interaction Specifications

## General principles

Interactions should be:
- Fast
- Predictable
- Accessible
- Purposeful
- Subtle

No interaction should exist purely for visual decoration.

All links must have valid destinations.

Do not implement dead buttons.

## 1. Navigation

Desktop:
- Horizontal navigation
- Active-page indication
- Logo links home
- Keyboard accessible

Mobile:
- Menu toggle
- Expanded navigation
- Visible close state
- Escape key closes the menu
- Focus managed appropriately
- Menu closes after selection
- Background scrolling controlled when required

## 2. Internal navigation

Supported primary routes:
/
/notes
/work
/about
/life
/contact

Dynamic routes:
/notes/[slug]
/work/[slug]

Use meaningful link labels.

Use standard browser navigation behaviour.

Preserve accessibility and predictable back navigation.

## 3. Notes filtering

Filter by:
- All
- Technology & AI
- Products & Building
- Business & Strategy
- Life & Observations

Only published articles appear.

Filters should update visible article results.

The active filter must be visually and programmatically indicated.

Provide a helpful empty state when no articles match.

Do not invent articles to populate categories.

## 4. Article pages

Support:
- Article reading
- Related content links
- Author biography
- Internal links to Work and About
- Copy-link action
- Optional table of contents

Reading time should be derived from actual article text.

Publication date must come from real content metadata.

## 5. Project case studies

Project previews link to detailed project pages.

If a case study is not yet ready for publication, do not show a dead link.

Instead, either:
- Publish the available approved version, or
- Keep the preview non-clickable until content is ready.

Do not imply a measurable outcome without evidence.

## 6. Photography

Support:
- Responsive grid
- Click-to-enlarge
- Image lightbox
- Next/previous navigation
- Keyboard controls
- Close on Escape
- Mobile swipe where practical
- Optional location and caption

Avoid forcing all images into one fixed crop.

Only show real personal photographs once supplied.

## 7. Drone video

Support a short original video snippet.

Preferred interaction:
- Poster visible before loading
- Play button
- Pause control
- Mute control where audio exists
- Fullscreen option
- Accessible video controls

Autoplay, if used:
- Must be muted
- Must not block page loading
- Must respect reduced motion
- Must stop or pause appropriately when not visible

No fabricated footage.

## 8. Contact form

Fields:
- Name
- Email
- Message

Required validation:
- Non-empty name
- Valid email format
- Non-empty message
- Reasonable server-side length limits

Security:
- Cloudflare Turnstile or equivalent
- Server-side bot-token validation
- Rate limiting
- Honeypot protection
- Input validation
- Output escaping where needed

Never rely solely on client-side validation.

Use secure server-side email delivery.

Never expose email-service credentials.

Do not log full personal messages unnecessarily.

Provide clear:
- Sending state
- Success state
- Failure state

Never show success before the server confirms message delivery or acceptance.

If an email backend is not configured, do not present a functioning Send button.

Use an explicit development-only state instead.

## 9. Reveal email interaction

Default:
"Prefer email? Reveal address"

On click:
- Reveal dedicated public email alias
- Show Copy address action
- Show Open email app action

Email address is not yet confirmed.

Do not invent a live email destination.

A demonstration placeholder is acceptable only in non-production previews.

The revealed address must support:
- Copy to clipboard
- mailto: link

Use client-side obfuscation to discourage simple scraping.

Obfuscation is not complete anti-spam protection.

The dedicated alias should not be the owner's private primary mailbox.

## 10. LinkedIn

Provide a LinkedIn link when the exact profile URL is confirmed.

Do not fabricate the URL.

External links should be labelled appropriately.

## 11. Reduced motion

Respect prefers-reduced-motion.

Disable or minimise:
- Scroll reveals
- Nonessential transforms
- Autoplaying decorative media
- Unnecessary animated transitions

## 12. Loading and errors

Support:
- Meaningful loading indicators
- Accessible error messages
- Image fallbacks
- Form delivery failures
- Not-found pages
- Graceful missing-content states

Avoid layout shifts.

## 13. Analytics

Measure useful interactions:
- Article visits
- Category usage
- Article-to-Work navigation
- Article-to-About navigation
- Contact CTA clicks
- Form submission outcomes without recording message bodies

Use privacy-conscious analytics.

Avoid collecting unnecessary personal information.

Respect relevant consent requirements when adding analytics.
