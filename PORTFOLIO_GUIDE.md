# My Portfolio

A modern, fully responsive portfolio website built with Next.js, React, and Tailwind CSS.

## Features

- ✨ Modern, clean design with dark mode support
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎯 Smooth navigation with sections for:
  - Hero/Home section
  - Projects showcase
  - About/Resume
  - Blog posts
  - Contact form
- ⚡ Built with Next.js 16+ and Tailwind CSS
- 🎨 Easy to customize

## Getting Started

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Building for Production

```bash
npm run build
npm run start
```

## Customization

### 1. Update Your Information

**Navigation (components/Navigation.tsx)**
- Update the logo/title to your name

**Hero Section (components/Hero.tsx)**
- Update the headline and description
- Customize button text and colors

**Projects (components/Projects.tsx)**
- Replace the sample projects with your real projects
- Add project links and GitHub URLs
- Update technologies/tags for each project

**About Section (components/About.tsx)**
- Update your bio and description
- Add or remove skills from the skills array
- Customize the background and content

**Blog (components/Blog.tsx)**
- Add your blog posts with titles, excerpts, and dates
- Link to your actual blog posts

**Contact (components/Contact.tsx)**
- Update your email address in the mailto link
- Add your LinkedIn, GitHub, Twitter, and other social links

**Footer (components/Footer.tsx)**
- Update the copyright year and name

### 2. Add Real Images

You can add project screenshots and images:
1. Place images in the `public/` folder
2. Use `<Image />` component from Next.js

Example:
```tsx
import Image from "next/image";

<Image
  src="/project-screenshot.png"
  alt="Project name"
  width={600}
  height={400}
/>
```

### 3. Update Colors

Colors are defined with Tailwind classes. To change the color scheme:
- Update `bg-blue-500` to your preferred color (e.g., `bg-purple-500`, `bg-green-500`)
- Update text colors like `text-blue-400` to match

Common Tailwind colors: `blue`, `purple`, `green`, `red`, `yellow`, `pink`, `indigo`

### 4. Contact Form Setup

Currently, the contact form shows a success message locally. To make it fully functional:

Option A: Use a service like Formspree, Getform, or EmailJS
```tsx
// Example with Formspree
const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  
  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    body: formData,
  });
  
  if (response.ok) {
    setSubmitted(true);
  }
};
```

Option B: Create an API route
```bash
# Create app/api/contact/route.ts
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click Deploy

### Other Options
- Netlify
- AWS Amplify
- GitHub Pages
- Any Node.js hosting provider

## Technologies Used

- **Next.js 16** - React framework
- **React 19** - UI library
- **Tailwind CSS** - Styling
- **TypeScript** - Type safety

## File Structure

```
portfolio_krsna/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Home page with all sections
│   └── globals.css      # Global styles
├── components/
│   ├── Navigation.tsx   # Navigation bar
│   ├── Hero.tsx         # Hero section
│   ├── Projects.tsx     # Projects showcase
│   ├── About.tsx        # About section
│   ├── Blog.tsx         # Blog posts
│   ├── Contact.tsx      # Contact form
│   └── Footer.tsx       # Footer
├── public/              # Static files (images, etc)
└── package.json         # Dependencies
```

## Tips

- Use the browser's DevTools to test responsive design
- Toggle dark mode in your OS settings to see dark theme
- Update the favicon in `public/favicon.ico`
- Add an `og-image.png` to `public/` for better social sharing

## Support

For Next.js documentation, visit [nextjs.org](https://nextjs.org)
For Tailwind CSS documentation, visit [tailwindcss.com](https://tailwindcss.com)

---

Happy building! 🚀
