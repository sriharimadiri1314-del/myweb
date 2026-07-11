# Glassmorphism Portfolio Website

A premium, interactive, and responsive portfolio website built with modern CSS glassmorphism, dynamic animations, and seamless dark/light modes.

## 🚀 Why I Built It

As a Computer Science & Engineering student, this portfolio serves as my professional digital hub to:
1. **Showcase Professional Work:** Present featured projects, detailed B.Tech journey, and technical certifications to recruiters and collaborators in an interactive format.
2. **Master Advanced UI/UX Concepts:** Gain hands-on expertise in creating modern web aesthetics, specifically focusing on glassmorphism (frosted glass blur effects), CSS custom properties for state management, and fluid animations.
3. **Engage Users Dynamically:** Create a delightful browsing experience using interactive canvas particles, scrolling micro-animations, and live-simulated contact workflows rather than static text.

---

## 🛠️ Technologies Used

### Frontend Core
- **HTML5:** Semantic architecture ensuring optimal SEO, structure, and accessibility.
- **CSS3:** Core styling framework utilizing:
  - Custom CSS variables for centralized theme tokens (light/dark values).
  - Modern layouts (CSS Grid and Flexbox).
  - Advanced CSS effects (`backdrop-filter` for glassmorphism, glowing box-shadows, and smooth transitions).
- **Vanilla JavaScript (ES6+):** Pure JS logic managing theme switching, typing effects, stat counters, and 3D tilting hover animations.

### Third-Party Libraries & APIs
- **Particles.js:** Renders the interactive geometric canvas particle background that reacts to mouse hover and clicks.
- **AOS (Animate On Scroll):** Powers the scroll-triggered reveal animations.
- **EmailJS SDK:** Handles secure, direct-from-client email sending from the contact form without requiring a backend server.

---

## 🧠 Challenges Faced & Solutions

### 1. Glassmorphism Contrast & Readability
- **Challenge:** Creating transparent frosted glass backgrounds that remain legible across different monitor contrasts and colors in both light and dark modes.
- **Solution:** Configured specific HSL transparency values for the background card fills and matching high-contrast borders. Used subtle box shadows to raise cards off the dark particle background.

### 2. Rendering Performance (FPS Drops)
- **Challenge:** Combining a live canvas particle animation (Particles.js) with layout scroll animations (AOS) and backdrop filters resulted in frame rate drops on low-end mobile devices.
- **Solution:** Optimised particle density (limiting counts to 80 on desktop and scale-down configurations for mobile) and offloaded animations to GPU-friendly hardware-accelerated CSS properties (`transform: translateY` and `opacity`).

### 3. State Syncing & Dark Theme Toggle
- **Challenge:** Ensuring that switching to light theme transitions all custom SVG icons, card glowing accents, and timelines smoothly without layout shifts or text flashing.
- **Solution:** Mapped all color tokens to CSS variable classes attached to `body.light-theme`. Swapped themes cleanly using a body class toggle coupled with CSS `transition: all 0.3s ease`.

---

## 🔮 Future Improvements

- **Dynamic GitHub Repository Fetching:** Connect `script.js` to the GitHub API to dynamically retrieve my latest active projects and render them into the `#repo-container` placeholder.
- **Framework Migration:** Rebuild using a modern component framework like **React** or **Next.js** for enhanced component reusability and SEO indexing.
- **Interactive Project Showcase:** Replace static text lists with modals showing video walkthroughs, system design diagrams, and architectural breakdowns.
- **Developer Blog:** Add a lightweight markdown-driven blog space to publish engineering articles and tutorials.
