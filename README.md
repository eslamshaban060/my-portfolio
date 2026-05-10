# 🚀 Eslam Shaban — Portfolio

Personal portfolio for **Eslam Shaban** — a Frontend Developer specializing in **React & Next.js**, based in Minya, Egypt.
The project is built with **Next.js (App Router) + TypeScript + Tailwind CSS**, featuring a dark **Neon Mint** visual identity, smooth animations, an interactive Particles background, and a fully integrated contact form that delivers messages straight to email via the **Gmail API**.

🌍 **Live:** [https://my-portfolio-one-gilt-24.vercel.app/](https://my-portfolio-one-gilt-24.vercel.app/)
📦 **Repo:** [https://github.com/eslamshaban060/my-portfolio](https://github.com/eslamshaban060/my-portfolio)

---

## 📋 Table of Contents

1. [Features](#-features)
2. [Tech Stack](#-tech-stack)
3. [Project Structure](#-project-structure)
4. [Sections](#-sections)
5. [Design System (Neon Mint)](#-design-system-neon-mint)
6. [Contact Form + Gmail Integration](#-contact-form--gmail-integration)
7. [SEO & Metadata](#-seo--metadata)
8. [Contact](#-contact)

---

## ✨ Features

- 🎨 **Neon Mint Design System** — deep navy background (`#0d1b2a`) with electric mint accents (`#2dd4a8` → `#73ffb8`).
- 🖋️ **Typography Pair** — `JetBrains Mono` for headings + `Work Sans` for body text.
- 🌌 **Animated Particles Background** in the Hero, tuned to the palette.
- 📊 **Scroll Progress Bar** at the top of the page (Framer Motion `useScroll` + `useSpring`).
- 🧭 **Sticky Navbar** — fully responsive with a Mobile Drawer + Dark/Light Toggle.
- 🧱 **Hero Section** with avatar, animated shapes, and a clear CTA.
- 💼 **Featured Project** — spotlight card for the most important project.
- 👤 **About Me** with 3 feature cards (Education, Freelance Experience, Self-Driven).
- 🧪 **Experience / Timeline** for roles and background.
- 🛠️ **Skills Grid** using [devicon](https://devicon.dev/) icons (React, Next.js, TS, Tailwind, Redux, Vite, Git, Figma…).
- 🗂️ **Projects Gallery** with tech tags, images, and GitHub & Live links.
- 📩 **Contact Form** fully wired with the **Gmail API** — messages land directly in your inbox with `Reply-To` set to the visitor.

- 🧭 **Floating Quick Actions** (Back to Top).
- ⚡ **Framer Motion** micro-interactions throughout.
- 🔍 **SEO Ready** — Metadata API, Open Graph, Twitter Cards, JSON-LD Person Schema, `robots.txt`, `sitemap.xml`.
- 🌗 **Dark / Light Mode** via `next-themes`.
- 📱 **Fully Responsive** — mobile, tablet, and desktop.

---

## 🧰 Tech Stack

| Layer         | Tech                                                    |
| ------------- | ------------------------------------------------------- |
| Framework     | [Next.js 15](https://nextjs.org/) (App Router + RSC)    |
| Language      | TypeScript (strict)                                     |
| Styling       | Tailwind CSS + design tokens                            |
| UI Primitives | [shadcn/ui](https://ui.shadcn.com/) (Radix-based)       |
| Animations    | [Framer Motion](https://www.framer.com/motion/)         |
| Forms         | [Formik](https://formik.org/) + [Zod](https://zod.dev/) |

| Particles | `react-tsparticles` / `tsparticles` |
| Icons | [lucide-react](https://lucide.dev/) + devicon CDN |
| Theme | [next-themes](https://github.com/pacocoursey/next-themes) |
| Email Delivery | **Gmail API** via Route Handler (`/api/contact`) |
| Deployment | [Vercel](https://vercel.com/) |

---

## 📁 Project Structure

```
.
├── app/
│   ├── api/
│   │   ├── contact/
│   │   │   └── route.ts          # POST → Gmail API (sends the message to your inbox)
│   │   └── projects/
│   │       └── route.ts          # GET → projects data
│   ├── Home/
│   │   └── page.tsx              # Home page that composes all sections
│   ├── globals.css               # Tailwind + design tokens (Neon Mint)
│   ├── layout.tsx                # Root layout + ThemeProvider + Metadata + JSON-LD
│   └── page.tsx                  # Redirect → /Home
│
├── components/
│   ├── header/
│   │   ├── NaveBar.tsx           # Sticky navbar
│   │   ├── SideBar.tsx           # Mobile drawer
│   │   └── ModeButton.tsx        # Dark/Light toggle
│   ├── Hero/
│   │   ├── Hero.tsx
│   │   ├── Text.tsx
│   │   └── ParticlesBackground.tsx
│   ├── AboutMe/
│   │   ├── AboutMe.tsx
│   │   └── Cards.tsx
│   ├── Experience/
│   │   └── Experience.tsx        # (add when porting the new section)
│   ├── FeaturedProject/
│   │   └── FeaturedProject.tsx   # (to add)
│   ├── Skils/
│   │   └── Skils.tsx
│   ├── Projects/
│   │   ├── Project.tsx
│   │   └── Card.tsx
│   ├── Connect/
│   │   ├── Connect.tsx
│   │   ├── Form.tsx              # Formik + Zod → POST /api/contact
│   │   └── Text.tsx
│   ├── Features/
│   │   └── MouseTracker.tsx
│   ├── Link/
│   │   └── Link.tsx
│   ├── ScrollProgress.tsx        # (to add)
│   ├── FloatingActions.tsx       # (to add)
│   ├── theme-provider.tsx        # next-themes wrapper
│   └── ui/                       # shadcn/ui (button, card, badge, dropdown-menu…)
│
├── constants/
│   ├── data.ts                   # navLinks, skills, projects, experiences, contact
│   └── types.ts                  # NavLink, ProjectType, ExperienceType…
│
├── lib/
│   └── utils.ts                  # cn() helper
│
├── assets/
│   └── profile-avatar.png
│
├── public/                       # static assets
├── next.config.ts
├── tsconfig.json
├── tailwind.config.* / postcss.config.mjs
├── components.json               # shadcn config
└── package.json
```

---

## 🧩 Sections

The home page (`app/Home/page.tsx`) is composed of:

1. **Hero** — name, title, tagline, avatar, and animated Particles background.
2. **Featured Project** — spotlight card for the top project.
3. **About Me** — bio + 3 feature cards.
4. **Experience / Timeline** — roles, companies, periods, and tech stack.
5. **Skills** — grid of devicon icons.
6. **Projects** — full gallery (title, description, tech tags, image, GitHub & Live).
7. **Contact (Connect)** — contact info + a fully working form integrated with Gmail.

Global mounts: **Scroll Progress Bar** + **Floating Actions**.

---

## 🎨 Design System (Neon Mint)

All colors are stored as **semantic design tokens** in `app/globals.css` using `oklch` — components never use raw hex values, they consume tokens like `bg-primary`, `text-foreground`, `border-border`.

**Palette**

| Token          | Value     | Usage                       |
| -------------- | --------- | --------------------------- |
| `--background` | `#0d1b2a` | Page background (dark mode) |
| `--card`       | `#112536` | Cards / surfaces            |
| `--primary`    | `#2dd4a8` | Primary color / CTAs        |
| `--accent`     | `#73ffb8` | Highlights / glows          |
| `--foreground` | light     | Primary text                |
| `--muted`      | dim       | Secondary text              |

**Effects**

```css
.text-gradient {
  background: linear-gradient(135deg, #2dd4a8, #73ffb8);
}
.glow {
  box-shadow: 0 0 40px rgba(45, 212, 168, 0.25);
}
.card-glass {
  background: rgba(17, 37, 54, 0.6);
  backdrop-filter: blur(12px);
}
```

**Typography**

```css
--font-display: "JetBrains Mono", monospace; /* Headings */
--font-body: "Work Sans", sans-serif; /* Body */
```

---

## 📩 Contact Form + Gmail Integration

The form sends messages **directly to your inbox** (`eslamshaban060@gmail.com`) using the **Gmail API** through a **Next.js Route Handler**.

**Flow**

```
Visitor fills the form
   ↓ Formik validates (name, email, subject, message)
   ↓ POST /api/contact
app/api/contact/route.ts
   ↓ Zod validates the payload
   ↓ Builds an RFC-822 message → base64url encode
   ↓ POST → https://gmail.googleapis.com/gmail/v1/users/me/messages/send
✉️ Email lands in eslamshaban060@gmail.com
   └─ Reply-To: <visitor email>   ← reply with one click
   ↓ Toast (sonner) → Success / Error
```

**Highlights**

- Clean HTML email template (subject, sender info, message body).
- `Reply-To` header set to the visitor's email for quick replies.
- Loading & disabled states while submitting.
- Server-side validation + sanitization.

---

## 🔍 SEO & Metadata

- Uses the **Next.js Metadata API** in `app/layout.tsx` and per-page.
- Open Graph tags (`og:title`, `og:description`, `og:image`, `og:type`).
- Twitter Card (`summary_large_image`) with the avatar as share image.
- **JSON-LD Person Schema** (name, jobTitle, address, sameAs, knowsAbout).
- Dynamic `robots.txt` and `sitemap.xml`.
- Semantic HTML, single `<h1>`, `alt` on every image, `theme-color` meta.

---

## 👤 Contact

**Eslam Shaban** — Frontend Developer (React & Next.js)
📍 Minya, Egypt

- 📧 Email: [eslamshaban060@gmail.com](mailto:eslamshaban060@gmail.com)
- 📱 Phone: [+20 100 6407 387](tel:+201006407387)
- 💬 WhatsApp: [https://wa.me/201006407387](https://wa.me/201006407387)
- 💼 LinkedIn: [https://www.linkedin.com/in/eslamshaban060/](https://www.linkedin.com/in/eslamshaban060/)
- 🐙 GitHub: [@eslamshaban060](https://github.com/eslamshaban060)

---

> Built with ❤️ using **Next.js + TypeScript + Tailwind CSS** — focused on performance, accessibility, and a strong personal brand.
