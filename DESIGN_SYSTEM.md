# BOUND Design System

**Version**: 1.0
**Last Updated**: December 23, 2025
**Brand Philosophy**: 企業と学生をつなぐ対等なパートナーシップ (Equal partnership connecting companies and students)

---

## :art: Brand Identity

### Logo Variants

BOUND uses a dual-identity system to represent the equal partnership between companies and students.

#### 1. Split-Color Logo (Default - Dual Identity)
- **Font**: Orbitron ExtraBold (800)
- **Style**: Split in center - 中央で対等に分割
- **Colors**:
  - Left (Student): `#EA6B4A`
  - Right (Company): `#0891B2`
- **Usage**: Landing pages, marketing materials, anywhere emphasizing the partnership

#### 2. Corporate Logo (Company-Focused)
- **File**: `public/contents/brand/BOUNDcorporate.svg`
- **Color**: Solid `#0891B2` (Company Primary)
- **Usage**:
  - Company-facing pages :white_check_mark:
  - Job challenge creation and management :white_check_mark:
  - Company dashboard :white_check_mark:
  - Business communications :white_check_mark:

#### 3. Icon Logo (Letter "U")
- **Style**: Same split-color or solid treatment
- **Usage**: Favicons, app icons, small footprint contexts

---

## :art: Color System

### Company Colors (企業)

```css
Primary: #0891B2       /* Cyan-600 - Main company color */
Dark: #0E7490          /* Cyan-700 - Hover states */

/* Opacity Variants */
8%:  rgba(8, 145, 178, 0.08)    /* Subtle backgrounds */
20%: rgba(8, 145, 178, 0.2)     /* Badges, highlights */
40%: rgba(8, 145, 178, 0.4)     /* Borders, dividers */
60%: rgba(8, 145, 178, 0.6)     /* Semi-transparent overlays */
```

**Usage**:
- Primary buttons and CTAs
- Links and interactive elements
- Focus states
- Badges (ステップ1, ステップ2, etc.)
- Headers and navigation

### Student Colors (学生)

```css
Primary: #EA6B4A       /* Coral/Orange - Student side */

/* Opacity Variants */
8%:  rgba(234, 107, 74, 0.08)   /* Subtle backgrounds */
20%: rgba(234, 107, 74, 0.2)    /* Badges */
```

**Usage**:
- Student-facing interfaces
- Student profile indicators
- Interest level badges

### Neutral Colors

```css
White:    #FFFFFF
Gray 50:  #FAFAFA    /* Subtle backgrounds */
Gray 100: #F5F5F5    /* Card backgrounds, input backgrounds */
Gray 200: #E5E5E5    /* Borders, dividers */
Gray 400: #A3A3A3    /* Placeholder text */
Gray 500: #737373    /* Secondary text */
Gray 600: #525252    /* Body text */
Gray 700: #65676B    /* Subtitles, descriptions */
Gray 800: #262626    /* Dark text */
Black:    #000000    /* Headings, primary text */
```

### Semantic Colors

```css
Success: #10B981     /* Green-500 */
Warning: #F59E0B     /* Amber-500 */
Error:   #EF4444     /* Red-500 */
Info:    #3B82F6     /* Blue-500 */
```

---

## :memo: Typography

### Font Families

```css
Brand: 'Orbitron', sans-serif    /* Logo, display headlines */
Body:  'Noto Sans JP', sans-serif    /* All text content */
```

### Type Scale (Production-Ready)

| Element | Size | Line Height | Weight | Color | Usage |
|---------|------|-------------|--------|-------|-------|
| **H1** | 30px | 34px | 700 (Bold) | #000000 | Page titles (e.g., "ジョブチャレンジを作成") |
| **H2** | 24px | 1.4 | 600 (SemiBold) | #000000 | Section headers |
| **H3** | 20px | 1.5 | 600 (SemiBold) | #000000 | Card titles |
| **H4** | 18px | 28px | 400 (Regular) | #65676B | Subtitles, descriptions |
| **Body** | 16px | 1.5 | 400 (Regular) | #000000 | Primary body text, form labels |
| **Small** | 14px | 1.5 | 400 (Regular) | #525252 | Helper text, captions |
| **Badge** | 16px | 1 | 400 (Regular) | #0891B2 | Step badges (ステップ 1) |
| **Button** | 16px | 1 | 500 (Medium) | White | Button labels |

### Typography Guidelines

**Headings**:
- H1: 30px, bold, #000000 for main page titles
- H4: 18px, regular, #65676B for subtitles with bottom border
- Always use consistent hierarchy

**Body Text**:
- Primary: 16px, #000000 for labels and form text
- Line height: 1.5 for readability
- Max width: 1135px for optimal reading

**Step Badges**:
- Background: #ECFEFF (company-8%)
- Color: #0891B2
- Padding: 4px 12px
- Border radius: 6px
- Font size: 16px

---

## :straight_ruler: Spacing System

### 4px Base Scale

```css
4px   /* Tight spacing, badge padding */
8px   /* Small gaps, badge margin */
12px  /* Input padding vertical */
16px  /* Default spacing, input padding horizontal */
20px  /* Card/section padding */
24px  /* Section spacing */
28px  /* Margin between title and content */
30px  /* Card grid gap, section margins */
```

### Layout Guidelines

**Container**:
- Max width: 1135px
- Padding: 0 20px (mobile)

**Form Spacing**:
- Between fields: 20px
- Label to input: 8px
- Input padding: 12px 16px
- Button gap: 12px

**Card Spacing**:
- Card padding: 20px
- Card gap in grid: 20px (30px between rows)
- Card max-width: 554px

---

## :jigsaw: Components

### Buttons

#### Primary Button (Company Theme)
```css
Background: #0891B2
Color: #FFFFFF
Height: 40px
Padding: 0 24px
Border Radius: 24px (fully rounded)
Font Size: 16px
Font Weight: 500
Min Width: 192px

Hover:
  Background: #0E7490
  Transform: scale(1.02)
```

#### Secondary Button (Outline)
```css
Background: transparent
Color: #000000
Border: 1px solid #E5E5E5
Height: 40px
Padding: 0 24px
Border Radius: 24px

Hover:
  Border Color: #0891B2
  Color: #0891B2
```

### Form Elements

#### Text Input
```css
Height: 48px (increased for better touch targets)
Padding: 0 16px
Border: 1px solid #E5E5E5
Border Radius: 6px
Font Size: 16px
Background: #F5F5F5

Focus:
  Border Color: #0891B2
  Background: #FFFFFF
  Box Shadow: 0 0 0 3px rgba(8, 145, 178, 0.08)
  Outline: none

Placeholder:
  Color: #A3A3A3
```

#### Textarea
```css
Min Height: 120px
Padding: 12px 16px
Border: 1px solid #E5E5E5
Border Radius: 6px
Font Size: 16px
Background: #F5F5F5
Resize: vertical

Focus: (same as input)
```

#### Label
```css
Font Size: 16px
Font Weight: 400
Color: #000000
Margin Bottom: 8px
Display: block
```

### Cards

#### Job Challenge Card
```css
Background: #FFFFFF
Border: 1px solid #E5E5E5
Border Radius: 10px
Padding: 20px
Width: 554px
Max Width: 554px
Transition: all 0.2s

Hover:
  Border Color: #0891B2
  Box Shadow: 0 4px 12px rgba(8, 145, 178, 0.15)
  Transform: translateY(-2px)
```

### Badges

#### Step Badge (Company)
```css
Background: #ECFEFF
Color: #0891B2
Padding: 4px 12px
Border Radius: 6px
Font Size: 16px
Font Weight: 400
Display: inline-block
Margin Right: 8px
```

#### Category Badge
```css
/* Technical badge */
Background: #ECFEFF
Color: #0891B2

/* Business badge */
Background: #FDF2F8
Color: #EC4899

Padding: 4px 12px
Border Radius: 24px (fully rounded)
Font Size: 14px
```

---

## :triangular_ruler: Layout

### Container Widths

```css
Max Width: 1135px    /* Main content container */
Card Width: 554px    /* Individual cards */
Card Grid: 2 columns with 20px gap
```

### Grid Layout (Step 1)

```css
Display: flex
Flex Wrap: wrap
Gap: 20px (horizontal), 30px (vertical)
Justify Content: center
Max Width: 1128px (554px * 2 + 20px gap)

Each Card:
  flex: 0 0 calc(50% - 10px)
  max-width: 554px
  width: 554px
```

### Responsive Breakpoints

```css
< 1200px: Single column layout
  Cards: width 100%
  Buttons: max-width 192px
```

---

## :performing_arts: Border Radius

```css
Small:  6px   /* Inputs, badges, small cards */
Medium: 10px  /* Main cards */
Large:  24px  /* Buttons (fully rounded) */
```

---

## :new_moon: Shadows

```css
/* Card hover */
0 4px 12px rgba(8, 145, 178, 0.15)

/* Input focus */
0 0 0 3px rgba(8, 145, 178, 0.08)
```

---

## :wheelchair: Accessibility

### Focus States
- All interactive elements have visible focus indicators
- Focus ring: 3px solid rgba(8, 145, 178, 0.08)
- Minimum contrast ratio: WCAG AA standards

### Touch Targets
- Minimum: 40px height for buttons
- Inputs: 48px height
- Adequate spacing: 12px between interactive elements

---

## :rocket: Implementation

### CSS Variables Location

All design tokens are in `src/styles/globals.css` in the `:root` selector.

### Usage in Components

```css
/* In your component CSS */
.button {
  background: var(--accent-color);
  padding: 0 var(--space-24);
  border-radius: var(--radius-full);
}
```

### Reusable CSS Modules

Import from `src/styles/design-system.module.css`:

```tsx
import ds from '@/styles/design-system.module.css';

<h1 className={ds.title}>Title</h1>
<button className={ds.buttonPrimary}>Submit</button>
```

---

## :iphone: Current Implementation

### Step 1: Job Category Selection
- :white_check_mark: Uses step badge styling
- :white_check_mark: Card grid layout (2 columns)
- :white_check_mark: Company color scheme
- :white_check_mark: Hover effects on cards

### Step 2: Job Information Form
- :white_check_mark: Clean form layout
- :white_check_mark: Consistent input styling
- :white_check_mark: Primary button with company colors
- :white_check_mark: Step badge for progress indication

---

## :memo: Design Principles

1. **Simplicity First**: Clean, minimal design without unnecessary decorations
2. **Company Theme**: Use #0891B2 throughout company-facing pages
3. **Consistent Spacing**: 4px base scale for all spacing
4. **Touch-Friendly**: Minimum 40px touch targets
5. **Accessibility**: WCAG AA compliant
6. **Progressive Enhancement**: Works on all browsers

---

## :arrows_counterclockwise: Version History

**v1.0** - December 23, 2025
- Initial design system documentation
- Company theme specification (#0891B2)
- Typography scale defined
- Component library documented
- Based on latest beta branch UI
