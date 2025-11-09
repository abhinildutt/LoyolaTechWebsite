# Quick Usage Guide

## 🚀 Getting Started

### Development
```bash
npm run dev
```
Open http://localhost:5173 in your browser

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 🎨 Customization Guide

### 1. Changing Colors

Edit `src/index.css` for global color schemes:

```css
/* Example: Change primary gradient */
.text-gradient {
  @apply bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500;
}
```

Or use Tailwind classes directly in components:
```tsx
from-blue-500 to-purple-600  // Blue to purple
from-green-500 to-emerald-500  // Green theme
from-orange-500 to-red-500  // Warm theme
```

### 2. Adjusting Animation Speed

In components, modify `transition` durations:

```tsx
// Faster
transition={{ duration: 0.3 }}

// Slower
transition={{ duration: 1.5 }}

// Spring animation (bouncier)
transition={{ type: "spring", stiffness: 200, damping: 15 }}
```

### 3. Disabling Animations

To disable specific animations, comment out or remove:

```tsx
// Before
<motion.div animate={{ y: [0, -10, 0] }}>

// After (no animation)
<div>
```

### 4. Customizing Particle Effects

Edit `src/components/AnimatedBackground.tsx`:

```tsx
// Change number of particles
{Array.from({ length: 30 }).map...  // Change 30 to your desired number

// Adjust particle size
width: `${2 + Math.random() * 4}px`,  // Change size range
```

### 5. Modifying Hero Cards

Edit `src/components/Hero.tsx`, line ~189:

```tsx
{[
  { 
    title: 'Your Feature', 
    desc: 'Your Description', 
    color: 'from-blue-500/20 to-cyan-500/20',
    icon: (/* Your custom SVG icon */)
  },
  // Add more cards...
]}
```

### 6. Changing Stats/Metrics

Edit `src/components/Stats.tsx`:

```tsx
const stats = [
  {
    value: 500,  // Change number
    suffix: '+',  // Change suffix (%, +, K, M)
    label: 'Projects Completed',  // Change label
    gradient: 'from-blue-500 to-cyan-500',  // Change color
  },
  // Add or remove stats
];
```

### 7. Updating Services

Edit `src/components/Services.tsx`:

```tsx
const services = [
  {
    icon: CubeIcon,  // Change icon from heroicons
    title: 'Your Service',  // Change title
    description: 'Your description...',  // Change description
    gradient: 'from-blue-500 to-cyan-500',  // Change gradient
    glowColor: 'rgba(59, 130, 246, 0.5)',  // Change glow
  },
  // Add more services
];
```

## 🎭 Performance Tips

### 1. Reduce Particle Count on Mobile
```tsx
const particleCount = window.innerWidth < 768 ? 15 : 30;
{Array.from({ length: particleCount }).map...
```

### 2. Disable Custom Cursor on Touch Devices
Already implemented - cursor only shows on desktop

### 3. Lazy Load Heavy Components
```tsx
import { lazy, Suspense } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

<Suspense fallback={<div>Loading...</div>}>
  <HeavyComponent />
</Suspense>
```

## 🎨 Adding New Sections

### Template for New Animated Section:

```tsx
import { motion } from 'framer-motion';

const NewSection = () => {
  return (
    <section className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        {/* Your background pattern */}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Your Title</span>
          </h2>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          className="glass rounded-2xl p-8"
        >
          Your content here
        </motion.div>
      </div>
    </section>
  );
};

export default NewSection;
```

## 🔧 Common Animation Patterns

### Fade In
```tsx
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
```

### Slide Up
```tsx
initial={{ opacity: 0, y: 50 }}
animate={{ opacity: 1, y: 0 }}
```

### Scale In
```tsx
initial={{ scale: 0 }}
animate={{ scale: 1 }}
```

### Rotate In
```tsx
initial={{ rotate: -180 }}
animate={{ rotate: 0 }}
```

### Stagger Children
```tsx
<motion.div variants={containerVariants} initial="hidden" animate="visible">
  {items.map(item => (
    <motion.div variants={itemVariants}>
      {item}
    </motion.div>
  ))}
</motion.div>
```

## 📱 Responsive Design

Tailwind breakpoints used:
- `sm:` - 640px and up
- `md:` - 768px and up
- `lg:` - 1024px and up
- `xl:` - 1280px and up

Example:
```tsx
className="text-4xl md:text-5xl lg:text-6xl"
```

## 🐛 Troubleshooting

### Animation Not Working?
1. Check if Framer Motion is imported
2. Ensure component is wrapped in `<motion.div>`
3. Check viewport prop for scroll animations

### Performance Issues?
1. Reduce particle count
2. Disable custom cursor
3. Use `once: true` in viewport animations
4. Check browser DevTools Performance tab

### Layout Shifts?
1. Reserve space for animated elements
2. Use `min-h-screen` on sections
3. Avoid animating layout properties

## 📚 Resources

- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Heroicons](https://heroicons.com/)
- [React Docs](https://react.dev/)

## 🎉 Tips for Best Results

1. **Keep animations subtle** - Less is often more
2. **Use consistent timing** - Stick to similar durations
3. **Test on real devices** - Desktop and mobile
4. **Respect user preferences** - Honor reduced motion
5. **Profile performance** - Use browser DevTools
6. **Get feedback** - Test with real users

---

Need help? Check the ENHANCEMENTS.md file for technical details!

