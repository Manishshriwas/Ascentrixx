# NexaCore — IT Services Website

A production-grade, fully animated IT services landing page built with **React 18** and **Tailwind CSS**.

---

## 🚀 Tech Stack

- **React 18** — Component-based architecture
- **Tailwind CSS** — Utility-first styling
- **Lucide React** — Icon library
- **Google Fonts** — Syne (headings) + DM Sans (body) + JetBrains Mono (labels)

---

## 📁 Folder Structure

```
it-services-website/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx         # Sticky glassmorphism nav
│   │   │   └── Footer.jsx         # Multi-column footer
│   │   └── sections/
│   │       ├── Hero.jsx           # Full-screen hero with blobs & badges
│   │       ├── Services.jsx       # 6-card services grid
│   │       ├── About.jsx          # 2-col about with stats
│   │       ├── Stats.jsx          # Animated counters + tech marquee
│   │       ├── Testimonials.jsx   # Carousel testimonials
│   │       ├── CTABanner.jsx      # Call-to-action banner
│   │       └── Contact.jsx        # Contact form + info
│   ├── hooks/
│   │   └── useScrollAnimation.js  # IntersectionObserver + counter hooks
│   ├── App.js
│   ├── index.js
│   └── index.css                  # Global styles, glass, gradients
├── tailwind.config.js
└── package.json
```

---

## ⚙️ Setup & Run

### 1. Install dependencies

```bash
npm install
```

### 2. Start development server

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000)

### 3. Build for production

```bash
npm run build
```

---

## 🎨 Design Highlights

- **Dark futuristic** theme with animated gradient blobs
- **Glassmorphism** cards with backdrop blur
- **Scroll-triggered animations** (fade-up, slide-in)
- **Animated stat counters** on viewport entry
- **Tech stack marquee** infinite scroll
- **Testimonial carousel** with dot navigation
- **Responsive** — mobile-first design
- **Custom CSS** grid background, glow effects, noise overlay
- **No external animation library** — pure CSS + Tailwind keyframes

---

## 🛠 Customization

- **Brand name**: Update `NexaCore` in `Navbar.jsx` and `Footer.jsx`
- **Colors**: Edit `tailwind.config.js` `primary` and `accent` colors
- **Services**: Edit the `services` array in `Services.jsx`
- **Stats**: Edit `statData` array in `Stats.jsx`
- **Testimonials**: Edit `testimonials` array in `Testimonials.jsx`
- **Contact form**: Replace `handleSubmit` in `Contact.jsx` with your API call

---

## 📦 Dependencies

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.22.0",
  "react-scripts": "5.0.1",
  "lucide-react": "^0.383.0"
}
```
