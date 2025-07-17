# Color Palette Guide

## Primary Colors
Your website now uses a cohesive color scheme based on your requested color `#023362`.

### Main Brand Colors
- **Primary Blue**: `#023362` - Main brand color (dark navy blue)
- **Primary Light**: `#034a7a` - Lighter variant for gradients and hover states
- **Primary Dark**: `#01213e` - Darker variant for text and accents

### Complementary Colors
- **Secondary Orange**: `#f39c12` - Used for highlights and CTAs
- **Secondary Light**: `#e67e22` - Used in gradients with secondary
- **Accent Green**: `#27ae60` - Used for success states and accents

### Neutral Colors
- **Light Gray**: `#f8f9fa` - Background color
- **Medium Gray**: `#718096` - Secondary text color
- **Dark Gray**: `#2d3748` - Primary text color
- **White**: `#ffffff` - Card backgrounds and contrast

### Shadow Colors
- **Light Shadow**: `rgba(2, 51, 98, 0.1)` - Subtle shadows
- **Medium Shadow**: `rgba(2, 51, 98, 0.2)` - Card shadows
- **Dark Shadow**: `rgba(2, 51, 98, 0.3)` - Hover and focus shadows

## Usage Examples

### Buttons
- Primary buttons use gradient from `#023362` to `#034a7a`
- Secondary buttons use transparent background with `#023362` border
- Hover effects use darker variants and shadows

### Navigation
- Brand text uses gradient from `#023362` to `#034a7a`
- Active/hover links use `#023362`
- Underline effects use the primary gradient

### Cards and Components
- Card overlays use `rgba(2, 51, 98, 0.9)`
- Service links and interactive elements use `#023362`
- Statistics and accent numbers use `#023362`

### Backgrounds
- Hero sections use gradient from `#023362` to `#034a7a`
- Call-to-action sections use the same primary gradient
- Page backgrounds remain neutral with `#f8f9fa`

## CSS Custom Properties
The colors are now available as CSS custom properties in `:root`:

```css
:root {
  --primary-color: #023362;
  --primary-light: #034a7a;
  --primary-dark: #01213e;
  --secondary-color: #f39c12;
  --secondary-light: #e67e22;
  --accent-color: #27ae60;
  --neutral-light: #f8f9fa;
  --neutral-medium: #718096;
  --neutral-dark: #2d3748;
  --white: #ffffff;
  --shadow-light: rgba(2, 51, 98, 0.1);
  --shadow-medium: rgba(2, 51, 98, 0.2);
  --shadow-dark: rgba(2, 51, 98, 0.3);
}
```

You can use these variables throughout your CSS like:
```css
.my-element {
  color: var(--primary-color);
  background: var(--neutral-light);
  box-shadow: 0 4px 20px var(--shadow-medium);
}
```

This creates a professional, cohesive look that maintains brand consistency across all components.
