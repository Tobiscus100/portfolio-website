# ⚡ Personal Developer Portfolio & Engineering Showcase

A modern, high-performance portfolio website engineered with **React** to showcase full-stack platforms, client systems, responsive web applications, and architectural case studies. Designed with a sleek developer aesthetic, accessible navigation, and interactive project cards.

---

## 🌐 Live Site

- **Live URL:** [https://tobidev.vercel.app](https://tobidev.vercel.app) *(Update with your portfolio live domain)*
- **Source Code:** [https://github.com/Tobiscus100/portfolio](https://github.com/Tobiscus100/portfolio) *(Update with your portfolio repo URL)*

---

## 🛠️ Core Features

- **Interactive Project Showcase:** Dynamic project cards featuring category badges, tech stack pills, responsive hover elevations, and direct links to live demos and source repositories.
- **Modern Developer UI:** Dark-mode primary color palette inspired by modern developer ecosystems (`#0a192f` slate/navy with `#64ffda` mint highlights).
- **Responsive Fluid Layouts:** Built using CSS Grid, Flexbox, and `clamp()` typography to deliver seamless user experiences from mobile displays to ultra-wide monitors.
- **Client-Side Routing & Smooth Scroll:** Seamless section navigation with customized scroll margin offsets.
- **Production Optimized:** Zero heavy UI dependencies; fast First Contentful Paint (FCP) and minimal bundle size.

---

## 🧰 Tech Stack

- **Core Library:** React 18
- **Styling:** CSS-in-JS (Component Stylesheets), Modern CSS3 (Grid & Flexbox)
- **Icons:** React Icons (`FiExternalLink`, `FiGithub`, `FiMail`)
- **Deployment & Hosting:** Vercel / Netlify
- **Version Control:** Git & GitHub

---

## 📁 Repository Structure

```text
├── public/
│   ├── favicon.ico
│   ├── index.html
│   └── images/              # Project preview screenshots & thumbnails
├── src/
│   ├── assets/              # Static SVG icons and graphics
│   ├── components/
│   │   ├── Navbar.jsx       # Responsive header and navigation links
│   │   ├── Hero.jsx         # Intro banner, headline, and resume CTAs
│   │   ├── About.jsx        # Engineering background & core competencies
│   │   ├── Projects.jsx     # Dynamic project cards and case studies
│   │   ├── Skills.jsx       # Tech stack tags and tooling proficiencies
│   │   ├── Contact.jsx      # Direct outreach form & social links
│   │   └── Footer.jsx       # Copyright and platform notices
│   ├── App.jsx              # Main layout assembler
│   ├── index.css            # Base reset, fonts, and global variables
│   └── main.jsx             # React DOM root entry
├── package.json
└── README.md
