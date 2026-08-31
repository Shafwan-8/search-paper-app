---
name: Perplexity
colors:
  primary: "#271A00"
  secondary: "#D6D5D4"
  surface: "#000000"
  on-surface: "#FFFFFF"
  error: "#E10600"
typography:
  body-md:
    fontFamily: pplxSans
    fontSize: 16px
    fontWeight: 400
rounded:
  md: 6px
---

# Design System Inspired by Perplexity

## 1. Visual Theme & Atmosphere

Perplexity's design system embodies a clean, minimalist aesthetic paired with a sophisticated dark-neutral palette that suggests trust and intelligence. The interface prioritizes clarity and accessibility, using soft contrast ratios and generous whitespace to create a calm, conversational experience. The teal accent (`#016A71`) provides strategic visual focus for primary actions and notifications, while the warm brown undertones (`#271A00`) ground the interface in approachability. This balance of refined typography, carefully orchestrated spacing, and subtle shadows creates an interface that feels both contemporary and trustworthy—ideal for an AI-powered answer engine. The color palette avoids aggressive primary blues in favor of muted, sophisticated tones that reduce visual fatigue during extended use.

**Key Characteristics**
- Minimalist and content-focused layout with ample whitespace
- Soft, warm-neutral color foundation with strategic teal accents
- Subtle shadow and border treatments for depth without heaviness
- High-readability typography optimized for search and discovery interfaces
- Warm, approachable tone balanced with professional sophistication
- Mobile-first responsive design with thoughtful touch targets
- Accessible contrast ratios and semi-transparent overlays for layering

## 2. Color Palette & Roles

### Primary
- **Teal Accent** (`#016A71`): Primary call-to-action buttons, accent highlights, active navigation states, and key interactive elements that require visual prominence.
- **Dark Brown** (`#271A00`): Dominant neutral anchor used throughout the system for text, borders, and subtle background tints to establish visual hierarchy.

### Accent Colors
- **Rust Red** (`#A23544`): Secondary accent for warning or alert states; used sparingly for cautionary messages.
- **Coral** (`#DC6973`): Softer alternative to pure red for error messages and destructive action warnings with reduced severity perception.
- **Warm Brown** (`#97431A`): Tertiary accent for supplementary highlights, secondary icons, or thematic elements.

### Interactive
- **Light Transparent Brown** (`#27251E` at 65% opacity / `rgba(39, 37, 30, 0.65)`): Active button and icon states; indicates interactivity without full saturation.
- **Muted Brown** (`#27251E` at 50% opacity / `rgba(39, 37, 30, 0.5)`): Disabled or secondary interactive elements; provides visual feedback for reduced affordance.
- **Dark Brown Border** (`#271A00` at 14% opacity / `rgba(39, 26, 0, 0.14)`): Subtle borders for input fields, cards, and container boundaries.

### Neutral Scale
- **Pure Black** (`#000000`): Primary text, primary headings, and high-contrast foreground elements.
- **Off-White** (`#FDFBFA`): Subtle background tint for layered surfaces and light page backgrounds.
- **White** (`#FFFFFF`): Pure white for primary surfaces, input fields, and modal backgrounds.
- **Light Gray** (`#D6D5D4`): Dividers, disabled text, and very subtle background accents.

### Surface & Borders
- **Subtle Surface Tint** (`#271A00` at 3.5% opacity / `rgba(39, 26, 0, 0.035)`): Background color for cards, containers, and secondary surfaces; barely perceptible warm tint over white.
- **Transparent Black** (`#0000` / transparent): Default fill for elements requiring no background color; allows underlying surface to show through.

### Semantic / Status
- **Success** (`#539E55`): Success messages, positive confirmations, and completed actions.
- **Error / Danger** (`#E10600`): Error states, validation failures, and destructive confirmations.

## 3. Typography Rules

### Font Family
**Primary Font:** `pplxSans`, system stack fallback: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif`

**Secondary Font:** Same as primary; the system uses a single typeface family throughout.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|---|---|
| Display / Hero | pplxSans | 32px | 600 | 40px | 0px | Main page heading "What do you want to know?" |
| Heading 1 | pplxSans | 28px | 600 | 36px | 0px | Section headings and major titles |
| Heading 2 | pplxSans | 24px | 600 | 32px | 0px | Subsection headings |
| Heading 3 | pplxSans | 20px | 600 | 28px | 0px | Card titles and modal headings |
| Body | pplxSans | 16px | 400 | 24px | 0px | Primary body text, paragraph content |
| Body Small | pplxSans | 14px | 400 | 20px | 0px | Secondary body text, descriptions |
| Button / Label | pplxSans | 16px | 500 | 24px | 0px | Button labels, navigation items |
| Caption | pplxSans | 12px | 400 | 16px | 0px | Helper text, timestamps, metadata |
| Code / Mono | pplxSans | 14px | 400 | 20px | 0px | Inline code, monospace equivalents |

### Principles
- **Single typeface philosophy:** pplxSans is used exclusively across all text roles, ensuring consistency and reducing cognitive load.
- **Weight-based hierarchy:** Font weight (400, 500, 600) and size combinations create visual priority without introducing multiple families.
- **Generous line height:** All line heights are set 150% of font size (or greater) to maximize readability and reduce eye strain during extended reading.
- **Optimal measure:** Body text sits at 16px with 24px line height, supporting reading speeds of 200–250 words per minute.
- **Disabled text:** Reduced opacity (`rgba(39, 37, 30, 0.5)`) replaces color shifts for disabled typography, maintaining family consistency.

## 4. Component Stylings

### Buttons

**Primary Button (Solid Teal)**
- Background: `#016A71`
- Text Color: `#FFFFFF`
- Font Size: `16px`
- Font Weight: `500`
- Font Family: `pplxSans`
- Padding: `12px 24px`
- Border Radius: `12px`
- Border: `1px solid #016A71`
- Box Shadow: `rgba(0, 0, 0, 0.08) 0px 1px 2px 0px`
- Height: `40px`
- Line Height: `24px`
- Hover State: Background `#014F54`, Box Shadow `rgba(0, 0, 0, 0.12) 0px 2px 4px 0px`
- Active State: Background `#013B40`
- Disabled State: Background `rgba(1, 106, 113, 0.5)`, Color `rgba(255, 255, 255, 0.6)`

**Secondary Button (Gray Ghost)**
- Background: `rgba(39, 26, 0, 0.035)`
- Text Color: `rgba(39, 37, 30, 0.65)`
- Font Size: `16px`
- Font Weight: `500`
- Font Family: `pplxSans`
- Padding: `12px 24px`
- Border Radius: `12px`
- Border: `1px solid rgba(39, 26, 0, 0.14)`
- Box Shadow: `none`
- Height: `40px`
- Line Height: `24px`
- Hover State: Background `rgba(39, 26, 0, 0.08)`, Border `rgba(39, 26, 0, 0.25)`
- Active State: Background `rgba(39, 26, 0, 0.12)`
- Disabled State: Color `rgba(39, 37, 30, 0.35)`, Background `rgba(39, 26, 0, 0.02)`

**Ghost Button (Icon / Minimal)**
- Background: `rgba(0, 0, 0, 0)`
- Text Color: `rgba(39, 37, 30, 0.5)`
- Font Size: `16px`
- Font Weight: `400`
- Font Family: `pplxSans`
- Padding: `0px 0px 0px 0px`
- Border Radius: `6px`
- Border: `0px solid transparent`
- Box Shadow: `none`
- Height: `24px`
- Width: `24px`
- Line Height: `24px`
- Hover State: Background `rgba(39, 26, 0, 0.05)`, Color `rgba(39, 37, 30, 0.7)`
- Active State: Color `rgba(39, 37, 30, 0.85)`
- Disabled State: Color `rgba(39, 37, 30, 0.25)`

**Icon Button (Square Container)**
- Background: `rgba(0, 0, 0, 0)`
- Text Color: `rgba(39, 37, 30, 0.65)`
- Font Size: `16px`
- Font Weight: `400`
- Font Family: `pplxSans`
- Padding: `4px 4px 4px 4px`
- Border Radius: `12px`
- Border: `0px solid rgba(39, 26, 0, 0.14)`
- Box Shadow: `none`
- Height: `32px`
- Width: `32px`
- Line Height: `24px`
- Hover State: Background `rgba(39, 26, 0, 0.08)`
- Active State: Background `rgba(39, 26, 0, 0.12)`

### Cards & Containers

**Information Card**
- Background: `rgba(39, 26, 0, 0.035)`
- Text Color: `#000000`
- Font Size: `16px`
- Font Weight: `400`
- Font Family: `pplxSans`
- Padding: `16px 16px 16px 16px`
- Border Radius: `11px`
- Border: `1px solid rgba(39, 26, 0, 0.14)`
- Box Shadow: `rgba(0, 0, 0, 0.05) 0px 0px 0px 1px`
- Line Height: `24px`
- Min Height: `88px`
- Hover State: Background `rgba(39, 26, 0, 0.06)`, Border `rgba(39, 26, 0, 0.2)`

**Surface Container**
- Background: `#FFFFFF`
- Text Color: `#000000`
- Font Size: `16px`
- Font Weight: `400`
- Font Family: `pplxSans`
- Padding: `0px`
- Border Radius: `0px`
- Border: `0px solid transparent`
- Box Shadow: `none`
- Line Height: `24px`

**Elevated Card**
- Background: `#FFFFFF`
- Text Color: `#000000`
- Font Size: `16px`
- Font Weight: `400`
- Font Family: `pplxSans`
- Padding: `24px 24px 24px 24px`
- Border Radius: `12px`
- Border: `1px solid rgba(39, 26, 0, 0.08)`
- Box Shadow: `rgba(0, 0, 0, 0.08) 0px 1px 2px 0px`
- Line Height: `24px`
- Hover State: Box Shadow `rgba(0, 0, 0, 0.12) 0px 2px 8px 0px`

### Inputs & Forms

**Text Input**
- Background: `#FFFFFF`
- Text Color: `#000000`
- Border Color: `rgba(39, 26, 0, 0.14)`
- Font Size: `16px`
- Font Weight: `400`
- Font Family: `pplxSans`
- Padding: `12px 16px 12px 16px`
- Border Radius: `8px`
- Border: `1px solid rgba(39, 26, 0, 0.14)`
- Height: `44px`
- Line Height: `24px`
- Focus State: Border `rgba(1, 106, 113, 0.5)`, Box Shadow `0 0 0 3px rgba(1, 106, 113, 0.08)`
- Hover State: Border `rgba(39, 26, 0, 0.25)`
- Error State: Border `#E10600`, Background `rgba(225, 6, 0, 0.02)`

**Placeholder Text**
- Color: `rgba(39, 37, 30, 0.5)`
- Font Size: `16px`
- Font Weight: `400`

**Search Input (Primary)**
- Background: `#FFFFFF`
- Text Color: `#000000`
- Border Color: `rgba(39, 26, 0, 0.14)`
- Font Size: `16px`
- Font Weight: `400`
- Font Family: `pplxSans`
- Padding: `16px 16px 16px 16px`
- Border Radius: `12px`
- Border: `1px solid rgba(39, 26, 0, 0.14)`
- Min Height: `56px`
- Box Shadow: `rgba(0, 0, 0, 0.05) 0px 0px 0px 1px`
- Focus State: Border `rgba(1, 106, 113, 0.5)`, Box Shadow `0 0 0 4px rgba(1, 106, 113, 0.1)`

### Navigation

**Sidebar Navigation**
- Background: `rgba(39, 26, 0, 0.035)`
- Text Color: `#000000`
- Font Size: `16px`
- Font Weight: `400`
- Font Family: `pplxSans`
- Padding: `0px 0px 0px 0px`
- Border Radius: `0px`
- Border: `1px solid rgba(39, 26, 0, 0.07)`
- Height: `100vh`
- Width: `240px`
- Line Height: `24px`

**Navigation Item (Active)**
- Background: `rgba(1, 106, 113, 0.08)`
- Text Color: `#016A71`
- Padding: `12px 16px 12px 16px`
- Border Radius: `8px`
- Border Left: `3px solid #016A71`
- Font Weight: `500`

**Navigation Item (Default)**
- Background: `transparent`
- Text Color: `rgba(39, 37, 30, 0.65)`
- Padding: `12px 16px 12px 16px`
- Border Radius: `8px`
- Border: `0px`
- Font Weight: `400`
- Hover State: Background `rgba(39, 26, 0, 0.08)`

**Top Navigation Bar**
- Background: `#016A71`
- Text Color: `#FFFFFF`
- Height: `56px`
- Padding: `0px 24px 0px 24px`
- Border Radius: `0px`
- Border: `0px`
- Box Shadow: `none`
- Z-index: `500`

### Badges

**Status Badge (Success)**
- Background: `rgba(83, 158, 85, 0.1)`
- Text Color: `#539E55`
- Font Size: `12px`
- Font Weight: `500`
- Padding: `4px 8px 4px 8px`
- Border Radius: `6px`
- Border: `1px solid rgba(83, 158, 85, 0.3)`

**Status Badge (Error)**
- Background: `rgba(225, 6, 0, 0.1)`
- Text Color: `#E10600`
- Font Size: `12px`
- Font Weight: `500`
- Padding: `4px 8px 4px 8px`
- Border Radius: `6px`
- Border: `1px solid rgba(225, 6, 0, 0.3)`

**New Feature Badge**
- Background: `#016A71`
- Text Color: `#FFFFFF`
- Font Size: `11px`
- Font Weight: `600`
- Padding: `3px 8px 3px 8px`
- Border Radius: `4px`
- Border: `0px`
- Letter Spacing: `0.5px`

## 5. Layout Principles

### Spacing System
- **Base Unit:** `4px`
- **Scale:** `4px`, `8px`, `12px`, `16px`, `24px`, `32px`, `48px`, `64px`, `92px`

**Usage Context:**
- `4px`: Micro spacing between icon and text, tight padding on icon-only buttons
- `8px`: Spacing between inline elements, small button padding
- `12px`: Standard input padding, internal card spacing
- `16px`: Primary button padding, card padding, section margins
- `24px`: Section spacing, large component padding, content containers
- `32px`: Major section breaks, sidebar padding
- `48px`: Large content blocks, full-width section gaps
- `64px`: Hero sections, major layout separations
- `92px`: Top/bottom spacing for full-screen hero areas

### Grid & Container
- **Max Width:** `1280px` for content area (excluding sidebars)
- **Sidebar Width:** `240px` (fixed left navigation)
- **Gutter Width:** `24px` (spacing between columns)
- **Column Strategy:** 12-column grid with flexible gutters; responsive collapsing on mobile
- **Section Pattern:** Full-width colored containers with centered max-width content blocks; primary search area spans full width above footer

### Whitespace Philosophy
Perplexity emphasizes breathing room and visual clarity through strategic whitespace. Content is never crowded; vertical rhythm uses the 24px line-height as the base unit for spacing between blocks. The search interface has large empty space around the primary input to create psychological focus. Cards and containers are given space to "float" within the layout rather than touching edges, and the neutral background tints separate zones without hard dividers.

### Border Radius Scale
- `4px`: Small badges, utility buttons, minimal UI elements
- `6px`: Icon buttons, compact form controls
- `8px`: Navigation items, input fields, small cards
- `11px`: Standard information cards, medium containers
- `12px`: Large buttons, modal dialogs, prominent cards
- `9999px`: Fully rounded pill buttons, avatar circles, extreme values

### Border Widths
- **Thin:** `1px` — Standard borders on inputs, cards, and containers; default visual boundary
- **Medium:** `2px` — Accent borders, active navigation indicators, emphasis states
- **Thick:** `3px` — Left border on active navigation items, strong visual emphasis

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Surface | No shadow | Flat page backgrounds, base layer surfaces |
| Raised | `rgba(0, 0, 0, 0.05) 0px 0px 0px 1px` | Card borders, subtle lift for grouped content |
| Floating | `rgba(0, 0, 0, 0.08) 0px 1px 2px 0px` | Information cards, button hover states, tooltips |
| Elevated | `rgba(0, 0, 0, 0.12) 0px 2px 8px 0px` | Modals, dropdowns, prominent overlays on hover |
| High | `oklch(0.5525 0.085 207.66 / 0) 0px 0px 36px 4px` | Full-screen modals, high-priority overlays |

**Shadow Philosophy:** Shadows are subtle and avoid harsh darkness. The system uses layered translucent black at varying opacities and blur radii to create perceived depth without visual weight. Shadows increase only slightly on interaction (hover/focus) to avoid jarring changes. Larger blur radii and spread values create "floating" effects for modals, while small blur values keep inline elements grounded.

### Opacity Levels
- **Full:** `1.0` (100%) — Default solid elements, primary text, active states
- **High:** `0.85` (85%) — Secondary text, active hover states
- **Medium-High:** `0.70` (70%) — Tertiary text, soft interactive feedback
- **Medium:** `0.50` (50%) — Disabled elements, muted icons, placeholder text
- **Low:** `0.20` (20%) — Overlay backgrounds, subtle background tints
- **Minimal:** `0.035` (3.5%) — Card and container background tints, barely perceptible layers

### Z-index / Layering
- **Base:** `1` — Default stacking context, regular page content
- **Dropdown (Low):** `10` — Inline dropdowns, tooltips below other UI
- **Dropdown (Medium):** `20` — Contextual menus, secondary overlays
- **Dropdown (High):** `30` — Primary dropdowns, select menus above most content
- **Sticky:** `500` — Fixed navigation bars, sticky headers that persist on scroll
- **Modal:** `1000` — Modal dialogs, full-screen overlays, highest interactable content
- **Toast:** `1100` — Notification toasts, alerts that appear above modals

## 7. Do's and Don'ts

### Do
- Use the teal accent (`#016A71`) exclusively for primary CTAs and key interactive states; this color is reserved for the highest-priority actions.
- Maintain the soft warm-brown tint (`rgba(39, 26, 0, 0.035)`) for card and container backgrounds to create subtle visual hierarchy without harsh contrast.
- Apply semi-transparent overlays (`rgba(39, 37, 30, 0.5)`) for disabled states rather than desaturating colors; this maintains brand consistency.
- Use pplxSans exclusively across all text roles; do not mix typeface families.
- Respect the `16px` body text size and `24px` line height as the readability baseline; only reduce for captions and metadata.
- Group related spacing using multiples of `4px` (4, 8, 12, 16, 24, 32, etc.) to maintain visual rhythm.
- Apply subtle shadows (`rgba(0, 0, 0, 0.05)` to `rgba(0, 0, 0, 0.12)`) for depth; avoid harsh drop shadows.
- Use border radius `12px` for all primary buttons and large interactive elements for consistency.
- Ensure minimum touch targets of `44px` for mobile; icon-only buttons can be `32px` minimum.
- Test all color combinations against WCAG AA contrast standards (minimum 4.5:1 for body text).

### Don't
- Do not use pure blue (`#0066FF` or similar) in place of the teal accent; the brand accent is specifically `#016A71`.
- Avoid using accent colors (rust red, coral, warm brown) for main CTAs or navigation; reserve these for status states and secondary UI.
- Do not stack multiple shadow layers; use only one shadow value per element at each elevation level.
- Avoid reducing font size below `12px` for body text; smaller text strains readability in answer engines.
- Do not use opacity to create color variations; instead use dedicated semantic colors or adjust alpha values on the base color.
- Avoid fully desaturating disabled elements; use semi-transparent neutral overlays (`rgba(39, 37, 30, 0.5)`) instead.
- Do not introduce new typefaces; pplxSans is the only font family in the system.
- Avoid adding borders thicker than `2px` except for the `3px` accent left border on active navigation.
- Do not use the warm brown undertones (`#271A00`, `#27251E`) as primary text colors; reserve these for borders and subtle fills only.
- Avoid spacing elements with arbitrary values; always round to the nearest multiple of `4px`.

## 8. Responsive Behavior

### Breakpoints

| Breakpoint | Width | Key Changes |
|-----------|-------|---|
| Mobile | 320px – 599px | Single-column layout, sidebar collapses to hamburger menu, full-width cards, reduced padding (`12px`), font sizes unchanged |
| Tablet | 600px – 999px | Two-column grid, sidebar becomes collapsible panel, cards stack in 2-column layout, padding increases to `16px` |
| Desktop | 1000px – 1279px | Three-column layout possible, fixed sidebar (240px), main content area max-width `800px`, standard padding `24px` |
| Wide Desktop | 1280px+ | Full layout with optional right panel, content max-width `1280px`, sidebar fixed, generous gutters `32px` |

### Touch Targets
- **Minimum Touch Target:** `44px` × `44px` for primary interactive elements (buttons, links, input fields)
- **Icon Button Minimum:** `32px` × `32px` for compact icon-only buttons
- **Spacing Between Targets:** Minimum `8px` separation to prevent accidental touches
- **Text Link Minimum:** `40px` height for inline text links with vertical padding
- **Form Input Height:** `44px` minimum for all text inputs and select controls on mobile

### Collapsing Strategy
- **Mobile (320px–599px):** Sidebar navigation converts to bottom sheet or hamburger menu; main content becomes full-width single column; cards stack vertically; hero search input remains full-width; secondary action buttons move below primary actions; large spacing values reduce to `16px` vertically.
- **Tablet (600px–999px):** Sidebar becomes a collapsible panel triggered by hamburger icon; two-column card layout; main content area limits to `600px` width; navigation items display horizontally when sidebar is collapsed.
- **Desktop (1000px+):** Fixed left sidebar (240px) visible; main content area flows alongside; cards display in 2–3 column grid; full spacing system applies; search and hero elements maintain prominence at top.
- **Hero Search Behavior:** On mobile, search input extends full-width with reduced padding; on tablet/desktop, search input centers and maintains `600px` max-width, with optional suggestion cards beside or below.

## 9. Agent Prompt Guide

### Quick Color Reference
- **Primary CTA:** Teal (`#016A71`) — Use for main action buttons, primary form submit, active navigation
- **Background (Page):** Off-White (`#FDFBFA`) or White (`#FFFFFF`) — Primary page background
- **Background (Container):** Subtle Surface Tint (`rgba(39, 26, 0, 0.035)`) — Secondary containers, cards
- **Text (Primary):** Black (`#000000`) — All body text, headings, primary UI text
- **Text (Secondary):** Dark Brown Muted (`rgba(39, 37, 30, 0.65)`) — Secondary labels, breadcrumbs, helper text
- **Text (Tertiary):** Dark Brown Faint (`rgba(39, 37, 30, 0.5)`) — Placeholder text, disabled buttons, muted icons
- **Border (Standard):** Dark Brown Border (`rgba(39, 26, 0, 0.14)`) — Input borders, card dividers, subtle container edges
- **Border (Accent):** Teal (`#016A71`) — Active navigation left border, focus ring accent
- **Success State:** Green (`#539E55`) — Success messages, completed checkmarks, positive confirmations
- **Error State:** Red (`#E10600`) — Error messages, validation failures, destructive warnings
- **Top Bar:** Teal (`#016A71`) background with White (`#FFFFFF`) text

### Iteration Guide
1. **All text is set in pplxSans at `16px` (body), `400` weight, `24px` line-height.** Headings increase size and weight only; do not introduce new typefaces.
2. **Every color must be UPPERCASE hex (`#016A71`) or use semantic rgba values like `rgba(39, 26, 0, 0.035)`.** Never use lowercase or abbreviations.
3. **Spacing always uses multiples of `4px`:** 4, 8, 12, 16, 24, 32, 48, 64, 92. No arbitrary values.
4. **Border radius follows the scale:** 4px (badges), 6px (icon buttons), 8px (inputs), 11px (cards), 12px (large buttons/modals), 9999px (pills/circles).
5. **Buttons are `40px` height minimum** with padding `12px 24px` (primary/secondary) or `4px 4px` (icon buttons at `32px` height).
6. **Card padding is consistently `16px`** with border radius `11px` and border `1px solid rgba(39, 26, 0, 0.14)`.
7. **Shadows only use the three defined levels:** subtle (`0.05`), floating (`0.08`), elevated (`0.12`). No custom shadow values.
8. **Primary interactive color is always teal (`#016A71`).** All secondary actions, alerts, and status use semantic colors; never substitute blue or other primaries.
9. **Disabled state uses opacity overlay (`rgba(39, 37, 30, 0.5)`)** rather than color desaturation or graying.
10. **Touch targets minimum `44px`, sidebar width fixed at `240px`, main content max-width `1280px`, search input `56px` height, sidebar nav background tinted (`rgba(39, 26, 0, 0.035)`).** No deviations without explicit design review.