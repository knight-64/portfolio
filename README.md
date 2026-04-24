# Krishna Murari Jha - Portfolio

A visually stunning, modern portfolio website built with cutting-edge web technologies. Features interactive animations, particle effects, and a responsive design optimized for all devices.

## 🎨 Features

- **Animated Particle Background** - Interactive particle system that responds to mouse movement
- **Cursor Glow Effect** - Beautiful glowing effect that follows your cursor
- **Smooth Section Animations** - Reveal animations as you scroll through sections
- **Interactive Project Showcase** - Engaging cards with hover effects and detailed project information
- **Responsive Design** - Fully optimized for desktop, tablet, and mobile devices
- **Accessibility** - WCAG compliant with proper semantic HTML and ARIA labels
- **Performance Optimized** - Fast loading times with optimized images and code splitting
- **Dark Mode** - Modern dark theme with cyan and blue gradients

## 🚀 Tech Stack

- **Framework**: Next.js 16 with React 19
- **Styling**: Tailwind CSS 4 with custom animations
- **Animations**: Framer Motion for smooth, performant animations
- **3D**: Three.js for potential 3D elements
- **Language**: TypeScript for type safety
- **Intersection Observer**: react-intersection-observer for scroll animations

## 📦 Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd portfolio_krsna

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit `http://localhost:3000` to see your portfolio.

## 🎯 Sections

### Hero
- Eye-catching introduction with animated background elements
- Call-to-action buttons
- Contact information

### About
- Personal bio and professional summary
- Education details
- Contact information

### Projects
- Featured AI Interviewer project with detailed description
- Technology tags
- Project highlights
- Project duration
- Interactive hover effects

### Skills
- Programming languages (Java, JavaScript, Python, TypeScript, SQL)
- Frontend development skills
- Backend development expertise
- Core competencies

### Contact
- Contact form with email notification
- Direct contact information
- Location details
- Availability indicators

### Additional
- Navigation bar with smooth scrolling
- Particle background with mouse tracking
- Cursor glow effect
- Footer with copyright and build information

## 🎨 Customization

### Colors
Edit the color scheme in `tailwind.config.ts`:

```ts
colors: {
  primary: "#00d4ff",    // Cyan
  secondary: "#00ffaa",  // Green
  accent: "#ff00ff",     // Magenta
}
```

### Content
Update component files in `/components` directory:
- `Hero.tsx` - Main introduction
- `About.tsx` - About section
- `Projects.tsx` - Project showcase
- `Skills.tsx` - Skills listing
- `Contact.tsx` - Contact form

### Animations
Framer Motion animations are configured throughout components with `variants`. Adjust timing and easing in component files.

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## ⚡ Performance

- **Lighthouse Score**: Optimized for 90+ scores
- **Core Web Vitals**: Optimized for good performance
- **Bundle Size**: Optimized with code splitting
- **Image Optimization**: Next.js automatic image optimization
- **CSS**: Tailwind CSS purging unused styles

## ♿ Accessibility

- **Semantic HTML**: Proper heading hierarchy and semantic elements
- **ARIA Labels**: Screen reader friendly navigation
- **Keyboard Navigation**: Fully keyboard accessible
- **Color Contrast**: WCAG AA compliant contrast ratios
- **Focus Indicators**: Visible focus states for keyboard users

## 🔐 Security

- **No external scripts**: Only essential dependencies
- **Content Security**: TypeScript for type safety
- **Form handling**: Client-side form validation
- **Email**: Configured with proper email validation

## 📊 File Structure

```
portfolio_krsna/
├── app/
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Main page
│   └── globals.css          # Global styles
├── components/
│   ├── Navigation.tsx       # Navigation bar
│   ├── Hero.tsx             # Hero section
│   ├── About.tsx            # About section
│   ├── Projects.tsx         # Projects section
│   ├── Skills.tsx           # Skills section
│   ├── Contact.tsx          # Contact form
│   ├── Blog.tsx             # Blog section
│   ├── Footer.tsx           # Footer
│   ├── ParticleBackground.tsx # Particle effect
│   └── CursorGlow.tsx       # Cursor glow effect
├── lib/
│   └── hooks.ts             # Custom React hooks
├── public/                  # Static assets
├── package.json             # Dependencies
├── tsconfig.json            # TypeScript config
├── tailwind.config.ts       # Tailwind config
├── next.config.ts           # Next.js config
└── postcss.config.mjs       # PostCSS config
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Push to GitHub
git push origin main

# Connect to Vercel
# Dashboard → New Project → Select repository
# Deploy automatically on push
```

### Other Platforms
- **Netlify**: Supports Next.js with similar setup
- **AWS Amplify**: AWS hosting with CI/CD
- **Self-hosted**: `npm run build && npm start`

## 📄 License

This portfolio is open source and available under the MIT License.

## 👨‍💻 Author

**Krishna Murari Jha**
- Email: krishna987170@gmail.com
- Location: Greater Noida, India

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Animated with [Framer Motion](https://www.framer.com/motion)
- 3D with [Three.js](https://threejs.org)

---

**Last Updated**: April 24, 2026
