---
name: Mailchimp
colors:
  primary: "#004E56"
  secondary: "#231E15"
  surface: "#000000"
  on-surface: "#FFFFFF"
  error: "#E12437"
typography:
  body-md:
    fontFamily: Means Web
    fontSize: 24px
    fontWeight: 400
rounded:
  md: 44px
---

# Design System Inspired by Mailchimp

## 1. Visual Theme & Atmosphere

Mailchimp's design system embodies a modern, professional yet approachable aesthetic designed for business growth and productivity. The visual identity balances sophisticated typography with bold accent colors, creating an interface that feels both trustworthy and energetic. Deep teals and blacks ground the design in stability, while vibrant yellows and accent colors inject optimism and urgency. The system emphasizes clarity and hierarchy, with generous whitespace and purposeful contrast that guides users through complex marketing workflows. The overall mood is confident, forward-thinking, and deeply rooted in helping businesses scale their audience engagement.

**Key Characteristics**
- Clean, modern typography hierarchy with serif and sans-serif contrast
- Strategic use of bold accent colors (teal, yellow) against neutral backgrounds
- High contrast text on white and dark surfaces for accessibility
- Generous spacing and breathing room in layouts
- Rounded corners on interactive components for approachability
- Subtle shadows for depth without visual clutter
- Business-focused, data-driven visual language

## 2. Color Palette & Roles

### Primary
- **Primary Teal** (`#004E56`): Core brand color used for links, active states, and primary navigation elements. Represents trust and stability.
- **Deep Brown** (`#231E15`): Secondary primary used extensively for text, body content, and backgrounds. Conveys professionalism and grounding.

### Accent Colors
- **Bright Yellow** (`#FFE01B`): High-visibility accent for CTAs, highlights, and success states. Creates urgency and draws attention to key actions.
- **Coral Red** (`#FF7346`): Supporting accent color for creative or differentiation purposes.
- **Electric Blue** (`#236CFF`): Tertiary accent for interactive elements and special emphasis.
- **Lavender** (`#BBAADD`): Soft accent for supporting UI elements.
- **Sage Green** (`#AADDAA`): Muted accent for secondary emphasis or category indicators.

### Interactive
- **Primary Action** (`#FFE01B`): Used for primary buttons, "Buy Now," and call-to-action elements requiring maximum attention.
- **Secondary Action** (`#FFFFFF` with `#231E15` border): Secondary buttons for less critical actions, often paired with outline styling.
- **Link Color** (`#004E56`): Default link color for inline text navigation and hyperlinks.

### Neutral Scale
- **Black** (`#000000`): Primary text color, darkest UI elements, and high-contrast backgrounds. Used extensively for body copy and hierarchy.
- **Dark Gray** (`#575757`): Secondary text color for lighter emphasis or reduced hierarchy content.
- **Medium Gray** (`#666666`): Tertiary text for captions and supplementary information.
- **Light Gray** (`#BCBAB6`): Dividers, borders, and subtle UI separators.
- **Off-White** (`#F6F6F4`): Soft background color for sections and subtle contrast areas.
- **Warm Beige** (`#DBD9D2`): Alternative light background for visual variety and section separation.
- **Charcoal** (`#403B3B`): Dark text alternative for high contrast on light backgrounds.
- **White** (`#FFFFFF`): Primary surface color for cards, modals, and content areas.

### Surface & Borders
- **Card Background** (`#FFFFFF`): Default surface for content containers, pricing cards, and modals.
- **Border Light** (`#BCBAB6`): Subtle dividers between sections and light borders.
- **Section Divider** (`#DBD9D2`): Stronger border for separating distinct sections.

### Semantic / Status
- **Warning** (`#FFE01B`): Alerts, warnings, and promotional messaging requiring user attention.
- **Error** (`#E12437`): Error messages, validation failures, and destructive action warnings.
- **Success** (`#004E56` or `#AADDAA`): Confirmation states and successful completions.

## 3. Typography Rules

### Font Family
**Primary: Means Web** — Serif typeface used for headlines and display text, creating sophistication and brand personality.
Fallback: Georgia, serif

**Secondary: Graphik Web** — Modern sans-serif for body text, UI labels, and interface elements. Ensures readability and contemporary feel.
Fallback: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, sans-serif

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display XL | Means Web | 64px | 400 | 76.8px | 0px | Page hero headlines, primary messaging |
| Display L | Means Web | 48px | 400 | 48px | 0px | Major section headers, prominent headings |
| Display M | Means Web | 40px | 400 | 40px | 0px | Section headings, strong visual breaks |
| Heading L | Means Web | 24px | 400 | 31.99px | 0px | Subsection headers, card titles |
| Heading M | Graphik Web | 18px | 500 | 24.3px | 0px | Form labels, secondary headings (inferred) |
| Heading S | Graphik Web | 16px | 400 | 21.6px | 0px | Navigation items, large labels |
| Button / Label XS | Graphik Web | 13px | 500 | 14.3px | 0.5px | Button text, labels, small emphasis |
| Body | Graphik Web | 16px | 400 | 21.6px | 0px | Primary body text, default paragraphs |
| Body Compact | Graphik Web | 13px | 400 | 17.55px | 0px | Smaller body text, supplementary content |
| Caption XS | Graphik Web | 11px | 500 | 13.75px | 0px | Captions, form hints, tiny labels |
| Link | Graphik Web | 16px | 400 | 21.6px | 0px | Inline links, hypertext |

### Principles
- **Hierarchy through size and weight**: Font sizes create clear visual hierarchy, with serif fonts reserved for high-impact headlines.
- **Contrast pairing**: Serif (Means Web) for headlines against sans-serif (Graphik Web) body creates visual distinction.
- **Readability first**: Line heights consistently generous (1.2–1.35 ratio) to ensure comfortable reading on screens.
- **Consistency in spacing**: Letter spacing minimal but consistent, allowing word spacing to drive rhythm.
- **Weight discipline**: Only two weights used (400 regular, 500 medium/bold) to maintain simplicity and reduce cognitive load.

## 4. Component Stylings

### Buttons

#### Primary Button
- **Background**: `#FFE01B`
- **Text Color**: `#000000`
- **Font**: Graphik Web, 13px, weight 500
- **Padding**: `16px 24px 16px 24px`
- **Border Radius**: `44px`
- **Border**: none
- **Line Height**: 14.3px
- **Hover State**: Background `#E6CB00`, text remains `#000000`
- **Active State**: Background `#CCB000`, slight inset shadow
- **Disabled State**: Background `#F0E8A0` (40% opacity), text `#B3A800` (60% opacity)

#### Secondary Button
- **Background**: `#FFFFFF`
- **Text Color**: `#231E15`
- **Font**: Graphik Web, 13px, weight 500
- **Padding**: `16px 24px 16px 24px`
- **Border Radius**: `44px`
- **Border**: `2px solid #231E15`
- **Line Height**: 14.3px
- **Box Shadow**: none
- **Hover State**: Background `#F6F6F4`, border remains `#231E15`
- **Active State**: Background `#DBD9D2`
- **Disabled State**: Background `#FFFFFF`, text `#BCBAB6`, border `#BCBAB6`

#### Ghost Button
- **Background**: transparent
- **Text Color**: `#004E56`
- **Font**: Graphik Web, 13px, weight 500
- **Padding**: `8px 12px 8px 12px`
- **Border Radius**: `3px`
- **Border**: `1px solid #004E56`
- **Line Height**: 14.3px
- **Box Shadow**: none
- **Hover State**: Background `#F6F6F4`, text and border remain `#004E56`
- **Active State**: Background `#DBD9D2`

### Cards & Containers

#### Standard Card
- **Background**: `#FFFFFF`
- **Text Color**: `#000000`
- **Padding**: `24px 16px 24px 16px`
- **Border Radius**: `10px`
- **Border**: `1px solid #BCBAB6`
- **Box Shadow**: `rgba(36, 28, 21, 0.15) 0px 0px 20px 3px`
- **Line Height**: 21.6px
- **Hover State**: Box shadow intensifies to `rgba(36, 28, 21, 0.25) 0px 4px 24px 4px`

#### Elevated Card (Premium, Featured)
- **Background**: `#FFFFFF`
- **Text Color**: `#000000`
- **Padding**: `32px 24px 32px 24px`
- **Border Radius**: `10px`
- **Border**: none
- **Box Shadow**: `rgba(35, 30, 21, 0.15) 0px 0px 20px 3px`
- **Line Height**: 21.6px

#### Dark Section (Premium Hero)
- **Background**: `#231E15`
- **Text Color**: `#FFFFFF`
- **Padding**: `80px 40px 80px 40px`
- **Border Radius**: `0px`
- **Border**: none
- **Box Shadow**: none

### Inputs & Forms

#### Text Input
- **Background**: `#FFFFFF`
- **Text Color**: `#000000`
- **Border**: `2px solid #BCBAB6`
- **Border Radius**: `4px`
- **Padding**: `12px 12px 12px 12px`
- **Font**: Graphik Web, 13px, weight 400
- **Line Height**: 17.55px
- **Placeholder Color**: `#BCBAB6`
- **Focus State**: Border `2px solid #004E56`, box shadow `0px 0px 0px 3px rgba(0, 78, 86, 0.1)`
- **Error State**: Border `2px solid #E12437`, background tint `rgba(225, 36, 55, 0.05)`
- **Disabled State**: Background `#F6F6F4`, border `#DBD9D2`, text `#BCBAB6`

#### Dropdown / Select
- **Background**: `#FFFFFF`
- **Text Color**: `#000000`
- **Border**: `2px solid #BCBAB6`
- **Border Radius**: `4px`
- **Padding**: `12px 12px 12px 12px`
- **Font**: Graphik Web, 13px, weight 400
- **Icon Color**: `#575757`
- **Focus State**: Border `2px solid #004E56`
- **Open State**: Box shadow `rgba(36, 28, 21, 0.12) 0px 4px 12px 0px`

#### Checkbox
- **Default State**: `#FFFFFF` background, `2px solid #BCBAB6` border, `4px` border radius
- **Checked State**: `#004E56` background, no visible border, checkmark in `#FFFFFF`
- **Focus State**: Background `#FFFFFF`, border `2px solid #004E56`, outline `0px 0px 0px 3px rgba(0, 78, 86, 0.1)`
- **Hover State**: Border `2px solid #004E56`
- **Disabled State**: Background `#F6F6F4`, border `#DBD9D2`, opacity `0.6`

### Navigation

#### Top Navigation Bar
- **Background**: `#FFFFFF`
- **Text Color**: `#000000`
- **Height**: `68px`
- **Padding**: `12px 16px 12px 16px`
- **Border Bottom**: `1px solid #DBD9D2`
- **Font**: Graphik Web, 16px, weight 400
- **Logo**: Height `36px`, maintains aspect ratio

#### Navigation Link (Default)
- **Color**: `#000000`
- **Font**: Graphik Web, 16px, weight 400
- **Text Decoration**: none
- **Hover State**: Color `#004E56`, slight underline at `4px` thickness
- **Active State**: Color `#004E56`, underline `2px solid #004E56`

#### Navigation Link (Dark Context)
- **Color**: `#FFFFFF`
- **Font**: Graphik Web, 16px, weight 400
- **Hover State**: Color `#FFE01B`
- **Active State**: Color `#FFE01B`, underline `2px solid #FFE01B`

#### Mega Menu Dropdown
- **Background**: `#FFFFFF`
- **Text Color**: `#000000`
- **Border**: none
- **Border Radius**: `0px`
- **Box Shadow**: `rgba(36, 28, 21, 0.12) 0px 4px 12px 0px`
- **Padding**: `24px 32px 24px 32px`
- **Z-index**: `50`

### Badges & Pills

#### Pill Badge (Toggle/Filter)
- **Background**: `#FFFFFF`
- **Text Color**: `#000000`
- **Border**: `1px solid #BCBAB6`
- **Border Radius**: `200px`
- **Padding**: `8px 16px 8px 16px`
- **Font**: Graphik Web, 13px, weight 500
- **Active State**: Background `#004E56`, text `#FFFFFF`, border `#004E56`
- **Hover State**: Border `#004E56`, text `#004E56`

#### Success Badge
- **Background**: `#AADDAA` (20% opacity)
- **Text Color**: `#004E56`
- **Border Radius**: `200px`
- **Padding**: `6px 12px 6px 12px`
- **Font**: Graphik Web, 11px, weight 500

#### Warning Badge
- **Background**: `#FFE01B` (20% opacity)
- **Text Color**: `#8B7000`
- **Border Radius**: `200px`
- **Padding**: `6px 12px 6px 12px`
- **Font**: Graphik Web, 11px, weight 500

#### Error Badge
- **Background**: `#E12437` (20% opacity)
- **Text Color**: `#8B0000`
- **Border Radius**: `200px`
- **Padding**: `6px 12px 6px 12px`
- **Font**: Graphik Web, 11px, weight 500

## 5. Layout Principles

### Spacing System

**Base Unit**: `4px`

**Spacing Scale**:
- `4px` — Extra tight spacing for stacked elements or micro-layouts
- `8px` — Tight spacing for closely related components
- `12px` — Compact spacing for form fields and small groups
- `16px` — Default spacing for moderate separation
- `20px` — Comfortable spacing for content groups (inferred)
- `24px` — Standard spacing for card padding and section margins
- `32px` — Generous spacing between major sections
- `40px` — Extra-large spacing for content separation
- `64px` — Hero sections and major visual breaks
- `80px` — Maximum spacing for dark hero sections
- `108px` — Extra-large vertical spacing (inferred for premium content)

**Usage Context**:
- **Buttons**: `16px` horizontal padding, `12px` vertical (compact) to `16px` vertical (comfortable)
- **Cards**: `24px` standard padding, `32px` for premium or featured cards
- **Form Fields**: `12px` padding with `16px` gap between fields
- **Sections**: `40px` to `64px` margin between major content blocks
- **Whitespace**: Minimum `20px` breathing room around focal content

### Grid & Container

- **Maximum Container Width**: `1440px` (full-width web standard)
- **Column Strategy**: 12-column fluid grid with `16px` gutters
- **Content Margins**: `40px` left/right on desktop (maintaining readable line length)
- **Mobile Margins**: `16px` left/right on tablet and below

**Section Patterns**:
- **Hero**: Full bleed to viewport edges with `80px` vertical padding
- **Content Sections**: Centered container with `40px` padding sides
- **Pricing/Cards**: Flex grid with `20px` gap between items
- **Testimonials**: Full-width dark background with centered content container

### Whitespace Philosophy

Mailchimp's design prioritizes breathing room and visual clarity through deliberate whitespace. Large margins between sections prevent cognitive overload, while generous padding inside components makes interface elements feel spacious and inviting. Whitespace is not empty space but rather an active design element that guides focus, improves readability, and creates moments of visual rest. The hierarchy of spacing (from `4px` micro-adjustments to `108px` macro breaks) ensures logical grouping and clear content relationships.

### Border Radius Scale

- `0px` — Navigation bars, hero sections, full-width containers
- `3px` — Small buttons, minimal UI adjustments
- `4px` — Form inputs, compact components
- `10px` — Card corners, moderately rounded containers
- `44px` — Pill buttons, fully rounded call-to-action elements
- `200px` — Badge pills, maximum rounding for emphasis

### Border Widths

- **Thin**: `1px` — Card borders, subtle dividers, light visual separation
- **Medium**: `2px` — Form field borders, active states, focused input emphasis
- **Thick**: `3px` — Borders on focus states for accessibility (inferred from accessibility standards)

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Base | No shadow, flat surface | Text, icons, inline elements |
| Surface | `rgba(36, 28, 21, 0.12) 0px 4px 12px 0px` | Dropdown menus, floating panels |
| Elevated | `rgba(35, 30, 21, 0.15) 0px 0px 20px 3px` | Standard cards, modals, lifted containers |
| Prominent | `rgba(35, 30, 21, 0.25) 0px 4px 24px 4px` | Featured cards, hover states, maximum emphasis |

**Shadow Philosophy**:
Mailchimp employs subtle, directional shadows that suggest gentle lifting rather than dramatic depth. Shadows are warm-toned (using `rgba(35, 30, 21, ...)`) to align with the brown-toned palette, creating cohesion. The system avoids harsh black shadows, instead using soft browns with controlled opacity to maintain visual harmony. Shadows increase in blur radius and spread slightly as elevation increases, creating a natural perspective hierarchy. Shadows are minimal on surfaces to reduce visual noise and maintain focus on content.

### Opacity Levels

- **1%** (`0.01`) — Barely perceptible, used for extremely subtle backgrounds or overlays
- **60%** (`0.60`) — Disabled or inactive states, reduced emphasis
- **80%** (`0.80`) — Secondary emphasis, hover states on muted elements
- **100%** (`1.00`) — Full opacity for primary content and active states

### Z-index / Layering

- **Base Layer**: `1` — Standard page content, default z-stacking context
- **Elevated Content**: `2–3` — Cards, containers with shadow elevation
- **Dropdown Menus**: `10–12` — Dropdowns, floating menus above content
- **Sticky Elements**: `100` — Sticky navigation, persistent headers
- **Modal Overlay**: `490` — Modal backdrop layer (high but below modal)
- **Modal / Dialog**: `500` — Modal dialogs, full-screen overlays, top layer

**Layering Strategy**: Z-index values are spaced in increments of 10 to allow flexibility for component combinations. Sticky navigation at `100` sits above most content but below modals at `500`, ensuring modals always remain accessible and focused.

## 7. Do's and Don'ts

### Do
- **Use the primary teal** (`#004E56`) for interactive elements that require secondary emphasis or for building user trust in links and navigation.
- **Reserve the bright yellow** (`#FFE01B`) exclusively for primary call-to-action buttons and high-priority actions to maintain urgency and consistency.
- **Pair serif headlines (Means Web) with sans-serif body text (Graphik Web)** to create visual contrast and enhance readability hierarchy.
- **Maintain minimum `24px` padding** on all cards and containers for comfortable content consumption.
- **Use the full spacing scale** from `4px` to `80px` — don't invent intermediate values that break the system rhythm.
- **Apply shadows consistently** from the predefined elevation scale to maintain visual cohesion across lifted components.
- **Keep text at `16px` minimum** for body content on screens to ensure comfortable reading without zoom.
- **Group related form inputs** with `16px` vertical gaps to establish logical input relationships.
- **Test link colors** (`#004E56`) for sufficient contrast (7:1 ratio) against all backgrounds for WCAG AA compliance.

### Don't
- **Do not mix accent colors carelessly** — reserve yellow for primary CTAs, teal for secondary actions, and other accent colors only for category differentiation or data visualization.
- **Do not reduce padding below `12px`** on interactive elements; this harms touch targets and visual breathing room.
- **Do not use borders thicker than `2px`** except for critical focus states; heavy borders create visual clutter.
- **Do not create custom shadows** — always use the predefined elevation scale to maintain visual consistency.
- **Do not use the serif font (Means Web) for body text** — it reduces readability and defeats the typographic contrast strategy.
- **Do not apply rounded corners** (`border-radius > 4px`) to form inputs except pill-shaped buttons; sharp corners signal functional input areas.
- **Do not set line height below `1.2x font-size`** — this damages readability and violates accessibility guidelines.
- **Do not layer multiple opacity levels** (e.g., semi-transparent colors on semi-transparent backgrounds) — this creates muddy, unpredictable results.
- **Do not exceed container max-width of `1440px`** on desktop; wider layouts create uncomfortable reading line lengths.
- **Do not create hover states that differ more than one shade** from the default state — extreme color shifts feel broken or like interactive errors.

## 8. Responsive Behavior

### Breakpoints

| Breakpoint | Width | Key Changes |
|------------|-------|-------------|
| Mobile | 375px–599px | Single-column layout, `16px` horizontal padding, stacked navigation, `32px` max section padding, font scales down 10–15% |
| Tablet | 600px–1024px | Two-column grid possible, `24px` horizontal padding, expandable navigation menu, `40px` section padding |
| Desktop | 1025px–1440px | Full multi-column layout, `40px` horizontal padding, full navigation bar visible, `64px` max section padding |
| Large Desktop | 1441px+ | Container max-width `1440px` centered, typography may increase 5–10% for comfort, maximum `80px` section padding |

### Touch Targets

- **Minimum Touch Target**: `44px × 44px` (platform standard for accessibility)
- **Optimal Touch Target**: `48px × 48px` (comfortable spacing for fingers)
- **Button Padding**: At least `12px` horizontal, `12px` vertical to reach minimum target size
- **Link Spacing**: Minimum `16px` gap between adjacent interactive links to prevent mis-taps
- **Form Inputs**: Minimum `44px` height; `16px` padding achieves this with standard font size

### Collapsing Strategy

**Navigation**:
- Desktop: Horizontal menu bar, all items visible, `68px` height
- Tablet (768px): Hamburger menu toggle, megamenu collapses to vertical stack
- Mobile: Full-screen off-canvas menu or stacked vertical navigation

**Cards & Grids**:
- Desktop: 3+ column grid with `20px` gap
- Tablet: 2-column grid with `16px` gap
- Mobile: Single column, full width with `16px` padding on sides

**Spacing**:
- Desktop: `80px` vertical section margins
- Tablet: `40px` vertical section margins
- Mobile: `24px` vertical section margins

**Typography**:
- Desktop Display XL: `64px` → Tablet: `48px` → Mobile: `36px`
- Desktop Display L: `48px` → Tablet: `40px` → Mobile: `32px`
- Desktop Heading L: `24px` → Tablet: `20px` → Mobile: `18px`
- Body remains `16px` minimum across all sizes

**Form Inputs**:
- Desktop: Standard `44px` height
- Mobile: Minimum `48px` height with `20px` padding for larger touch targets

## 9. Agent Prompt Guide

### Quick Color Reference

- **Primary CTA** (High Urgency): Bright Yellow (`#FFE01B`)
- **Secondary Action**: White with Border (`#FFFFFF` with `#231E15` outline)
- **Link / Navigation**: Primary Teal (`#004E56`)
- **Body Text**: Black (`#000000`)
- **Secondary Text**: Dark Gray (`#575757`)
- **Background / Card**: White (`#FFFFFF`)
- **Section Background**: Off-White (`#F6F6F4`)
- **Dark Section**: Deep Brown (`#231E15`)
- **Border / Divider**: Light Gray (`#BCBAB6`)
- **Success**: Sage Green (`#AADDAA`)
- **Warning**: Bright Yellow (`#FFE01B`)
- **Error**: Error Red (`#E12437`)

### Iteration Guide

1. **Always start with typography**: Use Means Web (serif) for headlines with sizes `64px` (display), `48px` (h1), `40px` (h2), `24px` (h3). Use Graphik Web (sans-serif) for body at `16px`, buttons at `13px`. This hierarchy is non-negotiable.

2. **Spacing is king**: Use the 4px base unit. Padding on cards is `24px`, buttons need `16px 24px`, forms need `12px`. Between sections: `40px` desktop, `24px` mobile. Never invent intermediate values.

3. **Color is limited and intentional**: Yellow (`#FFE01B`) only for primary CTAs and warnings. Teal (`#004E56`) for links and secondary emphasis. Black (`#000000`) for text. White (`#FFFFFF`) for cards. Everything else supports these four core colors.

4. **Shadows follow the elevation scale exactly**: Dropdown = `rgba(36, 28, 21, 0.12) 0px 4px 12px 0px`. Card = `rgba(35, 30, 21, 0.15) 0px 0px 20px 3px`. Hover/prominent = increase opacity to `0.25`. Do not create custom shadows.

5. **Buttons must be pill-shaped** (`border-radius: 44px`) on desktop, with `16px 24px` padding minimum. Primary is yellow background, secondary is white with `2px border`. Ghost buttons are transparent with `1px border`, smaller at `border-radius: 3px`.

6. **Inputs are subtle**: `border-radius: 4px`, `2px border #BCBAB6`, `12px padding`. On focus, border becomes `#004E56` and add a `3px` blue outline blur. Never darken input backgrounds.

7. **Cards must breathe**: Minimum `24px` padding, `1px border #BCBAB6`, `border-radius: 10px`, and apply the card shadow. Dark sections (hero/premium) invert this: `#231E15` background, `#FFFFFF` text, no border, `80px padding`.

8. **Responsive collapses cleanly**: Mobile uses `16px` margins, tablet uses `24px`, desktop uses `40px`. Typography scales down by 10–15% on mobile. Grids become single column on mobile, two-column on tablet, three+ on desktop.

9. **Z-index is hierarchical, never arbitrary**: Base = 1, dropdowns = 10–12, sticky nav = 100, modals = 500. Use this ordering, no other values.

10. **Line height and letter spacing stay constant**: All body text uses `1.35x line-height` ratio (e.g., `16px` text = `21.6px` line height). Letter spacing is `0px` for serif, `0.5px` for button labels. Accessibility demands this.