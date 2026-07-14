---
version: alpha
name: ARongw-design-system
description: A calm technical-blog design system for ARongw Blog. The system anchors on a haze-blue brand color, a warm off-white reading canvas, crisp dark ink text, and dark technical surfaces for code, terminal, embedded systems, and agent workflows. The visual voice should feel quiet, practical, and personal: less like a theme demo, more like a well-kept engineering notebook.

colors:
  primary: "#6699cc"
  primary-hover: "#4f86bd"
  primary-active: "#3d6fa3"
  primary-soft: "#e8f1fa"
  primary-softer: "#f3f8fc"
  accent-coral: "#cc7a66"
  accent-amber: "#d9a441"
  accent-teal: "#5fafa3"
  ink: "#18202a"
  body: "#364250"
  body-strong: "#25303c"
  muted: "#6b7785"
  muted-soft: "#98a2ad"
  canvas: "#fafbfc"
  canvas-warm: "#faf8f3"
  surface: "#ffffff"
  surface-soft: "#f3f6f8"
  surface-blue: "#edf4fa"
  surface-blue-strong: "#dcebf7"
  surface-dark: "#151b22"
  surface-dark-elevated: "#202a35"
  surface-dark-soft: "#263241"
  hairline: "#dde6ee"
  hairline-soft: "#e8eef3"
  on-primary: "#ffffff"
  on-dark: "#f3f6f8"
  on-dark-soft: "#b8c2cc"
  success: "#4f9d74"
  warning: "#c99632"
  error: "#c75050"

typography:
  display-xl:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: 56px
    fontWeight: 650
    lineHeight: 1.08
    letterSpacing: 0
  display-lg:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: 42px
    fontWeight: 650
    lineHeight: 1.12
    letterSpacing: 0
  display-md:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: 32px
    fontWeight: 620
    lineHeight: 1.18
    letterSpacing: 0
  title-lg:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: 22px
    fontWeight: 620
    lineHeight: 1.35
    letterSpacing: 0
  title-md:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0
  title-sm:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.45
    letterSpacing: 0
  body-md:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: 0
  body-sm:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: 0
  caption:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.45
    letterSpacing: 0
  caption-uppercase:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0.08em
  code:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: 0
  button:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: 0
  nav-link:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: 14px
    fontWeight: 560
    lineHeight: 1.4
    letterSpacing: 0

rounded:
  xs: 4px
  sm: 6px
  md: 8px
  lg: 10px
  xl: 14px
  pill: 9999px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 80px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 0 18px
    height: 40px
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 0 18px
    height: 40px
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    activeTextColor: "{colors.primary}"
    typography: "{typography.nav-link}"
    height: 64px
  home-hero:
    backgroundColor: "{colors.canvas-warm}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: 80px 0 64px
  direction-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.title-md}"
    rounded: "{rounded.lg}"
    padding: 24px
  direction-card-active:
    backgroundColor: "{colors.surface-blue}"
    textColor: "{colors.ink}"
    borderColor: "{colors.primary}"
  code-window-card:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.code}"
    rounded: "{rounded.lg}"
    padding: 22px
  article-list-item:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline-soft}"
    rounded: "{rounded.md}"
    padding: 20px 0
  badge:
    backgroundColor: "{colors.primary-soft}"
    textColor: "{colors.primary-active}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: 4px 10px
  badge-accent:
    backgroundColor: "{colors.accent-coral}"
    textColor: "{colors.on-primary}"
    typography: "{typography.caption-uppercase}"
    rounded: "{rounded.pill}"
    padding: 4px 10px
  footer:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark-soft}"
    typography: "{typography.body-sm}"
    padding: 48px 0
---

## Overview

ARongw Blog should feel like a personal engineering notebook with a clear technical identity. The site should not look like a theme demo, a corporate SaaS landing page, or a flashy portfolio. The design is quiet, readable, and structured around three content directions: **cAGENT**, **Embedded**, and **FreeRTOS**.

The brand anchor is **Haze Blue** (`{colors.primary}` — #6699cc). It is calm, slightly gray, and suitable for long-term reading. Haze Blue should be the primary identity color, but it should not flood the page. The page atmosphere comes from the combination of:

1. **Warm reading canvas** (`{colors.canvas-warm}` / `{colors.canvas}`)
2. **Haze Blue interaction color** (`{colors.primary}`)
3. **Dark technical surfaces** (`{colors.surface-dark}`)
4. **Clean engineering typography** (`Inter` + `JetBrains Mono`)

The design should make the homepage feel intentional: a compact personal introduction, three clear technical paths, and a readable article stream.

## Design Direction

### Personality

- Calm rather than dramatic.
- Technical rather than decorative.
- Personal rather than corporate.
- Content-first rather than marketing-first.
- Spacious enough to breathe, dense enough to scan.

### Visual Rhythm

The homepage should alternate surface modes:

```text
Warm canvas hero
→ light technical direction cards
→ dark code or terminal surface
→ article list on clean canvas
→ dark footer
```

This rhythm gives the page a technical feel without overusing dark UI.

## Colors

### Brand

- **Haze Blue** (`{colors.primary}` — #6699cc): The main brand color. Used for primary buttons, active nav states, links, focus rings, and selected card accents.
- **Haze Blue Hover** (`{colors.primary-hover}` — #4f86bd): Button hover and interactive emphasis.
- **Haze Blue Active** (`{colors.primary-active}` — #3d6fa3): Pressed states and high-contrast text on pale blue surfaces.
- **Primary Soft** (`{colors.primary-soft}` — #e8f1fa): Pale blue badges and highlighted background chips.
- **Primary Softer** (`{colors.primary-softer}` — #f3f8fc): Very soft section backgrounds.

### Accent

- **Coral** (`{colors.accent-coral}` — #cc7a66): Used sparingly for "new", important notices, or one-off emphasis. It is not the brand color.
- **Amber** (`{colors.accent-amber}` — #d9a441): Used for warning-style notes or learning highlights.
- **Teal** (`{colors.accent-teal}` — #5fafa3): Used for status indicators or successful connection states.

### Text

- **Ink** (`{colors.ink}` — #18202a): Primary headings and strong UI text.
- **Body** (`{colors.body}` — #364250): Main paragraph text.
- **Muted** (`{colors.muted}` — #6b7785): Metadata, timestamps, secondary labels.
- **Muted Soft** (`{colors.muted-soft}` — #98a2ad): Captions and footer-adjacent text.

### Surfaces

- **Canvas** (`{colors.canvas}` — #fafbfc): Default page floor.
- **Warm Canvas** (`{colors.canvas-warm}` — #faf8f3): Homepage hero and editorial sections.
- **Surface** (`{colors.surface}` — #ffffff): Cards and article list surfaces.
- **Surface Soft** (`{colors.surface-soft}` — #f3f6f8): Quiet section backgrounds.
- **Surface Blue** (`{colors.surface-blue}` — #edf4fa): Active technical path cards or selected states.
- **Surface Dark** (`{colors.surface-dark}` — #151b22): Code windows, terminal windows, embedded system panels, footer.
- **Surface Dark Elevated** (`{colors.surface-dark-elevated}` — #202a35): Inner panels inside dark technical cards.

### Borders

- **Hairline** (`{colors.hairline}` — #dde6ee): Standard 1px card and button borders.
- **Hairline Soft** (`{colors.hairline-soft}` — #e8eef3): Subtle dividers inside article lists.

## Typography

The system should use practical screen fonts. Unlike the Claude reference, ARongw Blog should not use a literary serif as the primary voice. The blog is technical and personal, so a clean sans-serif is more appropriate.

### Font Families

- **Display / UI / Body:** `Inter`, then system sans-serif fallback.
- **Code:** `JetBrains Mono`, then system monospace fallback.

### Hierarchy

| Token                     | Size | Weight | Use                     |
| ------------------------- | ---: | -----: | ----------------------- |
| `{typography.display-xl}` | 56px |    650 | Homepage hero title     |
| `{typography.display-lg}` | 42px |    650 | Major section title     |
| `{typography.display-md}` | 32px |    620 | Secondary section title |
| `{typography.title-lg}`   | 22px |    620 | Large card heading      |
| `{typography.title-md}`   | 18px |    600 | Direction card title    |
| `{typography.title-sm}`   | 16px |    600 | Small panel headings    |
| `{typography.body-md}`    | 16px |    400 | Main text               |
| `{typography.body-sm}`    | 14px |    400 | Secondary text          |
| `{typography.caption}`    | 13px |    500 | Badges and metadata     |
| `{typography.code}`       | 14px |    400 | Code and terminal text  |

### Principles

- Do not use viewport-scaled font sizes.
- Do not use negative letter spacing.
- Keep article body text readable before making it stylish.
- Use font weight and spacing for hierarchy; avoid oversized headings inside compact cards.
- Code samples should feel sharp and stable, not decorative.

## Layout

### Container

- Main content width: `1120px`.
- Wide technical sections may use `1200px`.
- Article reading areas should stay narrower for comfort.

### Homepage Structure

Recommended first version:

```text
Hero
  left: title, description, actions
  right: dark code / terminal card

Technical Directions
  cAGENT
  Embedded
  FreeRTOS

Latest Articles
  compact list
  title, summary, date, tags

Footer
  dark technical footer
```

### Hero Layout

Desktop:

```text
60% text / 40% technical card
```

Mobile:

```text
text first
technical card second
single column
```

The hero should not be a marketing splash screen. It should introduce the site quickly and leave the next section visible on normal desktop screens.

### Direction Cards

The three direction cards are the homepage's main navigation layer:

- `cAGENT`: AI Agent, automation, tool workflows.
- `Embedded`: embedded development, debugging, hardware/software notes.
- `FreeRTOS`: RTOS learning, scheduling, tasks, system design.

Each card should include:

- Title
- One-line description
- Optional small badge
- Direct link to the first article in that section

## Components

### Top Navigation

The top nav should remain close to the current VitePress/Teek structure. It should feel integrated with the theme, not replaced by a custom marketing nav.

Use Haze Blue for:

- Active nav item
- Hover state
- Search focus state

Avoid adding large custom nav decorations.

### Buttons

Primary buttons use Haze Blue:

```text
background: #6699cc
hover: #4f86bd
text: #ffffff
radius: 8px
height: 40px
```

Secondary buttons use white surface with a soft border:

```text
background: #ffffff
border: #dde6ee
text: #18202a
```

Use buttons only for clear actions:

- 查看归档
- GitHub
- 阅读文章

### Direction Card

Direction cards should be simple technical entry points.

Default:

```text
background: #ffffff
border: #dde6ee
radius: 10px
padding: 24px
```

Hover or active:

```text
background: #edf4fa
border: #6699cc
```

### Code Window Card

The dark card is the visual anchor of the homepage. It should suggest actual technical work.

Possible content:

```text
$ arongw notes --topic freertos
> task scheduling
> queues
> embedded debugging
```

or:

```ts
const tracks = ["cAGENT", "Embedded", "FreeRTOS"];
```

Style:

```text
background: #151b22
inner background: #202a35
text: #f3f6f8
muted text: #b8c2cc
accent: #6699cc
```

### Article List

The article list should be compact and readable. Avoid large decorative article cards in the first version.

Each item:

- title
- summary
- date
- category/tag

Use dividers instead of heavy card shadows.

### Badges

Badges should support scanning, not decoration.

Examples:

```text
cAGENT
Embedded
FreeRTOS
Note
Project
```

Default badge uses pale Haze Blue. Coral badge is reserved for rare emphasis.

## Homepage Modes

The ARongw homepage mode should be conceptually separate from Teek's existing modes:

```text
VitePress document mode
  vpHome = true
  teekHome = false

Teek blog mode
  vpHome = false
  teekHome = true

ARongw mode
  vpHome = false
  teekHome = false
  tk.arongwHome = true
```

This lets the custom homepage behave like a third mode instead of being a cosmetic variant of the default Teek homepage.

## Do's and Don'ts

### Do

- Use Haze Blue as the primary identity color.
- Keep large backgrounds warm and quiet.
- Use dark technical cards to show engineering identity.
- Keep homepage sections scannable.
- Keep cards at 8-10px radius unless the existing theme requires otherwise.
- Use real content paths: cAGENT, Embedded, FreeRTOS.
- Preserve VitePress/Teek strengths: navigation, article scanning, archives, categories, tags.

### Don't

- Don't copy Claude or Anthropic branding.
- Don't make coral the main brand color.
- Don't turn the homepage into a generic SaaS landing page.
- Don't overuse gradients.
- Don't use decorative blobs or purely atmospheric backgrounds.
- Don't make every section a floating card.
- Don't hide the actual blog content behind a marketing hero.
- Don't use one-note blue everywhere; blue should guide, not flood.

## Responsive Behavior

### Breakpoints

| Name    |       Width | Behavior                                                     |
| ------- | ----------: | ------------------------------------------------------------ |
| Mobile  |     < 768px | Single column, hero text first, direction cards stacked      |
| Tablet  |  768-1024px | Hero may stay two-column if space allows; cards can be 2 + 1 |
| Desktop | 1024-1440px | Full two-column hero, three direction cards                  |
| Wide    |    > 1440px | Content remains capped; add outer breathing room only        |

### Mobile Rules

- Hero title should reduce to about 30-34px.
- Direction cards become single column.
- Code window should allow horizontal scrolling if needed.
- Buttons should wrap cleanly.
- Text must not overlap background or decorative elements.

## Accessibility

- Maintain contrast between Haze Blue and text surfaces.
- Primary button text must remain white.
- Links should not rely on color alone when placed in article content.
- Focus rings should use Haze Blue with a soft outer ring.
- Hit targets should be at least 40px high.
- Code windows must not use tiny text.

## Implementation Notes

Recommended CSS variables:

```css
:root {
  --arongw-primary: #6699cc;
  --arongw-primary-hover: #4f86bd;
  --arongw-primary-active: #3d6fa3;
  --arongw-primary-soft: #e8f1fa;
  --arongw-ink: #18202a;
  --arongw-body: #364250;
  --arongw-muted: #6b7785;
  --arongw-canvas: #fafbfc;
  --arongw-canvas-warm: #faf8f3;
  --arongw-surface: #ffffff;
  --arongw-surface-soft: #f3f6f8;
  --arongw-surface-dark: #151b22;
  --arongw-surface-dark-elevated: #202a35;
  --arongw-hairline: #dde6ee;
}
```

Recommended first implementation files:

```text
docs/.vitepress/theme/components/arongw-home.vue
docs/.vitepress/theme/styles/arongw-home.scss
docs/.vitepress/theme/components/teek-layout-provider.vue
docs/index.md
```

## Review Questions

Before implementation, review these decisions:

1. Should the homepage use a warm canvas (`#faf8f3`) or a cooler canvas (`#fafbfc`) as the main background?
2. Should the hero right side show a code window, terminal window, or project/status panel?
3. Should the latest articles appear in version one, or should version one only include hero + three direction cards?
4. Should coral be used at all, or should the system stay strictly Haze Blue + dark technical surfaces?
5. Should ARongw mode be enabled only through `docs/index.md` frontmatter, or also exposed in the theme configuration panel?

## Known Gaps

- This document defines design direction, not final copywriting.
- The latest-articles data source still needs confirmation from Teek's injected post data.
- Dark mode needs visual testing after implementation.
- The exact homepage code-window content should be written from real ARongw topics, not placeholder marketing text.
- Giscus comments are not part of the homepage design and should be configured separately.
