# Marsellah Seimoon — Portfolio

A modern, dark-themed React portfolio built with pure React (no external UI libraries).

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ installed
- npm or yarn

### Installation & Run

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm start
```

The app opens at **http://localhost:3000**

### Build for Production

```bash
npm run build
```

Output goes to the `/build` folder — ready to deploy on Netlify, Vercel, or GitHub Pages.

---

## 📁 Project Structure

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Aurora.jsx        # Animated background blobs
│   │   ├── Navbar.jsx        # Sticky navigation bar
│   │   ├── Hero.jsx          # Landing section with typing effect
│   │   ├── StatsBar.jsx      # Key stats (projects, skills, etc.)
│   │   ├── About.jsx         # About me + skill bars
│   │   ├── Skills.jsx        # Skill cards grid
│   │   ├── Journey.jsx       # Education & experience timeline
│   │   ├── Projects.jsx      # Accordion project list
│   │   ├── ProjectCard.jsx   # Individual project card
│   │   ├── Contact.jsx       # Contact section
│   │   ├── Footer.jsx        # Footer
│   │   ├── FadeIn.jsx        # Scroll-triggered fade animation
│   │   ├── SkillBar.jsx      # Animated skill progress bar
│   │   └── SkillCard.jsx     # Skill card with hover effects
│   ├── constants/
│   │   └── data.js           # All content data (edit here!)
│   ├── hooks/
│   │   ├── useTyping.js      # Typewriter effect hook
│   │   └── useInView.js      # Intersection observer hook
│   ├── App.jsx               # Root component
│   ├── index.js              # React entry point
│   └── index.css             # Global styles & keyframe animations
├── package.json
└── README.md
```

---

## ✏️ Customisation

### Add Your Photo
Open `src/components/Hero.jsx` and replace `PHOTO_URL`:

```js
// Option 1: Use a URL
const PHOTO_URL = "https://your-image-url.com/photo.jpg";

// Option 2: Import local image (put photo in src/assets/)
import myPhoto from "../assets/photo.jpg";
const PHOTO_URL = myPhoto;
```

### Edit Your Content
All text content is in **`src/constants/data.js`**:
- `PHRASES` — typing effect phrases
- `SKILLS` — skill cards
- `PROJECTS` — project accordion items
- `JOURNEY` — education & experience timeline
- `CONTACTS` — contact info rows
- `STATS` — stats bar numbers

---

## 🎨 Tech Stack

- **React 18** — UI framework
- **Pure CSS-in-JS** — inline styles, no CSS libraries
- **Google Fonts** — Cormorant Garamond, DM Sans, JetBrains Mono
- **IntersectionObserver** — scroll animations
- **CSS Keyframes** — aurora blobs, typing cursor, pulse effects

---

## 📦 Deploy to Netlify (Free)

```bash
npm run build
# Drag & drop the /build folder to netlify.com/drop
```

Or connect your GitHub repo for auto-deploys.
