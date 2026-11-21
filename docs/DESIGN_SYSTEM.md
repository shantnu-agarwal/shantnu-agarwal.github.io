
# shantnu.in — Editorial Design System

## Design philosophy

Create a premium personal publishing website characterised by:

- Strong typography
- Elegant editorial hierarchy
- Warm neutral surfaces
- Dark navy details
- Generous whitespace
- Subtle dividers
- Carefully curated photography
- Calm, purposeful interaction

The visual language should feel timeless and personal, not like a generic SaaS landing page.

Reference:
design/editorial-reference.png

The reference is conceptual. Follow verified design specifications and actual approved content where they differ.

## Colour tokens

Canvas: #F8F6F0
Surface: #FFFFFF
Primary ink: #111827
Deep navy: #0F1F33
Accent blue: #345C8A
Secondary text: #626A73
Border: #E7E3DA
Soft blue: #E8EFF7
Soft neutral: #F0EEE9

Create semantic CSS variables.

Do not scatter hard-coded colours throughout the code.

Suggested roles:

Canvas:
Primary page background.

Surface:
Forms and selected content blocks.

Ink:
Main text and headings.

Navy:
Primary actions and strong visual emphasis.

Accent:
Links, active states and interaction details.

Muted:
Descriptions and supporting metadata.

Border:
Dividers and subtle component outlines.

Meet WCAG AA contrast requirements for text and interactive components.

## Typography

Display:
Playfair Display with Georgia fallback.

Body:
Inter with system sans-serif fallback.

Use serif typography for:
- Main page headings
- Section headings
- Featured article headlines
- Selected editorial statements

Use sans-serif for:
- Body copy
- Navigation
- Buttons
- Labels
- Metadata
- Forms

Suggested sizes:

Desktop hero H1:
Clamp approximately 56px to 72px.

Mobile hero H1:
Approximately 40px to 48px.

Desktop section H2:
Approximately 36px to 46px.

Mobile section H2:
Approximately 30px to 36px.

Card headlines:
Approximately 20px to 26px.

Body:
16px to 18px.

Small metadata:
12px to 14px, but always readable.

Body line-height:
Approximately 1.6 to 1.75.

Long-form reading text should prioritise comfort over density.

## Layout

Desktop reference viewport:
1440px.

Mobile reference viewport:
390px.

Maximum content width:
1200px.

Maximum article reading width:
720px.

Desktop outer gutters:
Approximately 48px to 64px.

Mobile gutters:
20px, adjustable at very narrow widths.

Grid:
12-column desktop system.
4-column mobile system.

Design fluidly between breakpoints.

Avoid fixed-width components that cause horizontal scrolling.

## Spacing system

Base unit:
4px.

Common spacing tokens:
4px
8px
12px
16px
24px
32px
48px
64px
80px
112px

Desktop section spacing:
80px to 112px.

Mobile section spacing:
48px to 72px.

Use consistent vertical rhythm and align content to a shared grid.

## Border radii

Small:
6px.

Medium:
12px.

Large:
16px.

Pill:
9999px.

Most editorial components should have subtle or minimal rounding.

Avoid excessive pill-shaped cards.

## Header

Desktop:
- Logo left
- Navigation right
- Clean horizontal alignment
- Subtle bottom border
- Warm background

Navigation order:
Notes, Work, About, Life, Contact.

Active page:
Underlined or subtly highlighted.

Mobile:
- Logo left
- Menu toggle right
- Accessible expandable menu
- No horizontal overflow

Sticky behaviour is optional but must not obscure content.

## Homepage hero

Desktop:
Two-column layout.

Left:
- Status label
- Large heading
- Supporting headline
- Introduction
- Two calls to action

Right:
Authentic personal or contextual image when available.

Mobile:
- Text first
- Calls to action
- Image below

Do not generate a fictional portrait of Shantnu.

Use a neutral photo placeholder if no actual portrait exists.

The hero must have strong visual hierarchy and sufficient breathing room.

## Buttons

Primary:
Deep navy background, white text.

Secondary:
Transparent or light surface, subtle outline.

Text link:
Simple text with directional arrow.

States:
- Default
- Hover
- Focus-visible
- Disabled
- Loading when necessary

Minimum comfortable interactive target:
Approximately 44px.

## Project previews

Use an editorial approach rather than large decorative cards.

Each project preview supports:
- Category
- Title
- Short description
- Optional metric
- Case-study link

Desktop:
Three columns for homepage projects.

Mobile:
One column.

Avoid generic stock images unrelated to projects.

## Article previews

Variants:
- Featured
- Standard
- Compact

Fields:
- Category
- Title
- Summary
- Date when published
- Reading time when calculated
- Optional cover image

The title is the visual priority.

Images should complement an article, not be mandatory.

Do not display fake article metadata.

## Long-form article page

Reading width:
Approximately 680–760px.

Requirements:
- Clear H1
- Article summary
- Author
- Publication date
- Reading time
- Rich body typography
- Accessible headings
- Images with captions
- Code blocks when relevant
- References 
- Related articles
- Author biography
- Link to Work/About/Contact

Optional sticky table of contents for long articles.

## Image treatment

Use restrained cropping and consistent aspect ratios.

Recommended formats:
- AVIF/WebP for raster images where supported
- SVG for simple graphics
- Optimised MP4/WebM for video

Photography should preserve the original composition.

Avoid heavy filters and generic decorative image overlays.

Do not imply placeholder images are personally captured.

## Photography gallery

Support:
- Curated image grid
- Portrait and landscape compositions
- Image captions
- Accessible lightbox
- Keyboard navigation
- Lazy loading
- Responsive image sources

The gallery must remain effective with an initially small media collection.

## Video treatment

Use a large cinematic frame.

Requirements:
- Poster image
- Play/pause
- Accessible controls
- Muted preview if autoplay is used
- No audio autoplay
- Reduced-motion support
- Lazy loading

Avoid using an expensive autoplay video as the primary hero background.

## Forms

Use:
- Subtle outlined input fields
- Comfortable label spacing
- Clear error messages
- Visible focus indicators
- Accessible field associations
- Inline confirmation and failure states

Do not rely exclusively on placeholder text as field labels.

## Motion

Motion should be restrained.

Examples:
- Small link transitions
- Gentle image zoom on hover
- Lightweight section reveal
- Subtle navigation underline

Avoid:
- Scroll hijacking
- Animated cursors
- Heavy parallax
- Continuous decorative animations
- Long transition delays

Respect prefers-reduced-motion.

## Footer

Include:
- shantnu.in
- Short contact invitation
- Notes
- Work
- About
- Life
- Contact
- LinkedIn when confirmed

Keep the footer minimal.

## Accessibility

Target WCAG 2.2 AA where practical.

Requirements:
- Semantic landmarks
- Clear heading hierarchy
- Keyboard operation
- Focus-visible indicators
- Appropriate alt text
- Sufficient contrast
- Accessible mobile navigation
- Reduced-motion support
- Form labels and errors

Accessibility is part of the design, not a later patch.
