# Quicksilver Airport Shuttle - Next.js Website

A modern, premium website for Quicksilver Airport Shuttle service built with Next.js 16, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Premium UI with vibrant gradients, smooth animations, and glassmorphism effects
- **Fully Responsive**: Optimized for all devices (desktop, tablet, mobile)
- **SEO Optimized**: Comprehensive metadata, semantic HTML, and proper heading structure
- **Dynamic Routes**: Location-based pages for all service areas
- **Fast Performance**: Built with Next.js 16 and Turbopack for optimal speed
- **TypeScript**: Fully typed for better developer experience and code quality

## 📁 Project Structure

```
httpsgoquicksilver.com/
├── app/
│   ├── about/              # About page
│   ├── airport-shuttle/
│   │   └── [location]/     # Dynamic location pages
│   ├── components/
│   │   └── Navigation.tsx  # Header & Footer components
│   ├── contact/            # Contact page
│   ├── faq/                # FAQ page
│   ├── reservation/        # Booking page
│   ├── globals.css         # Global styles & design system
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Homepage
├── public/                 # Static assets
├── package.json
└── README.md
```

## 🎨 Design System

### Colors
- **Primary**: Blue (#3B82F6) to Purple (#A855F7) gradient
- **Secondary**: Purple to Pink gradient
- **Accent**: Yellow/Orange gradient
- **Semantic**: Success (Green), Warning (Orange), Error (Red)

### Typography
- **Display Font**: Outfit (headings)
- **Body Font**: Inter (paragraphs)

### Components
- Custom button styles (primary, secondary, outline)
- Card components with hover effects
- Glass morphism effects
- Smooth animations (fade-in, slide, scale, float)

## 🛠️ Tech Stack

- **Framework**: Next.js 16.1.6
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Runtime**: React 19

## 📦 Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Start production server**:
   ```bash
   npm start
   ```

## 🌐 Pages

### Main Pages
- **Homepage** (`/`) - Hero, features, services, testimonials
- **About** (`/about`) - Company history, mission, values
- **FAQ** (`/faq`) - Comprehensive Q&A sections
- **Contact** (`/contact`) - Contact form and information
- **Reservation** (`/reservation`) - Booking form

### Dynamic Pages
- **Location Pages** (`/airport-shuttle/[location]`) - Service details for each city
  - Kansas City
  - Overland Park
  - Olathe
  - Lawrence
  - Topeka
  - Manhattan
  - Wichita
  - And 20+ more locations

## 🎯 Key Features by Page

### Homepage
- Animated hero section with gradient background
- Feature cards with icons
- Service offerings with pricing
- Service area grid
- Customer testimonials
- Call-to-action sections

### Location Pages
- SEO-optimized metadata per location
- Service overview
- Pricing options (Shared, Sedan, SUV)
- How it works section
- Location-specific FAQ

### Reservation Page
- Multi-step booking form
- Service type selection
- Trip details (pickup, dropoff, date, time)
- Passenger and luggage information
- Contact information
- Special requests

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎨 Custom CSS Classes

```css
.btn-primary          /* Primary gradient button */
.btn-secondary        /* White button with border */
.btn-outline          /* Outlined button */
.card                 /* Card with shadow and hover effect */
.glass                /* Glassmorphism effect */
.gradient-text        /* Gradient text effect */
.animate-fade-in      /* Fade in animation */
.animate-float        /* Floating animation */
.container-custom     /* Max-width container */
.section              /* Section spacing */
```

## 🔧 Configuration

### Tailwind CSS
The project uses Tailwind CSS 4 with custom configuration in `globals.css`:
- Custom color palette
- Typography scale
- Spacing utilities
- Animation keyframes

### Next.js
- App Router (Next.js 13+)
- TypeScript strict mode
- Turbopack for faster builds
- Optimized images and fonts

## 📞 Contact Information

- **Phone**: (913) 262-0905
- **Email**: info@goquicksilver.com
- **Service Area**: Kansas City Metro
- **Hours**: 24/7

## 🚀 Deployment

This project can be deployed to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any Node.js hosting platform

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

## 📝 License

© 2026 Quicksilver Airport Shuttle. All rights reserved.

## 🤝 Support

For support or questions about the website, contact the development team or Quicksilver directly at (913) 262-0905.

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
