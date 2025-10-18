# Safeer Ahmad - Portfolio Website

A clean, minimalist personal portfolio website showcasing full-stack development expertise, projects, and experience.

## Features

- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Dark Mode Toggle** - Switch between light and dark themes with persistent storage
- **Smooth Animations** - Elegant transitions and scroll-based animations
- **Modern UI/UX** - Minimalist design with white background, black & blue accents
- **Performance Focused** - Fast loading times and optimized code
- **Interactive Elements** - 3D card effects, ripple animations, and parallax scrolling

## Sections

1. **Hero Section** - Introduction with CTA buttons and social links
2. **About Me** - Code-style biography and professional summary
3. **Tech Stack** - Skills organized by category with interactive tags
4. **Experience** - Timeline-style work history
5. **Featured Projects** - Showcase of key projects with metrics and tech tags
6. **Education** - Academic background
7. **Contact** - Multiple ways to get in touch

## Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS variables and animations
- **JavaScript (ES6+)** - Interactive features and DOM manipulation
- **Google Fonts** - Inter & JetBrains Mono

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for best results)

### Installation

1. Clone or download this repository:
```bash
git clone https://github.com/yourusername/safeer-portfolio.git
```

2. Navigate to the project directory:
```bash
cd safeer-portfolio
```

3. Open `index.html` in your browser, or use a local server:

**Using Python:**
```bash
python -m http.server 8000
```

**Using Node.js (with `http-server`):**
```bash
npx http-server
```

**Using VS Code Live Server:**
- Install the Live Server extension
- Right-click on `index.html` and select "Open with Live Server"

4. Visit `http://localhost:8000` (or the appropriate port) in your browser

## File Structure

```
safeer-portfolio/
│
├── index.html          # Main HTML structure
├── styles.css          # All styling and animations
├── script.js           # Interactive features and dark mode
└── README.md           # Project documentation
```

## Customization

### Changing Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --accent-primary: #2563eb;    /* Primary blue */
    --accent-secondary: #1e40af;  /* Secondary blue */
    /* ... other variables */
}
```

### Updating Content

All content is in `index.html`. Simply edit the text within the HTML tags:

- Personal info: Update in the Hero section
- Projects: Modify the `.project-card` elements
- Experience: Edit the `.timeline-item` elements
- Skills: Change the `.tech-item` spans

### Adding New Projects

Copy a `.project-card` div and update:
- Icon emoji
- Title
- Description
- Tech tags
- Metrics

## Features Explained

### Dark Mode
- Toggle button in the top-right corner
- Theme preference saved in `localStorage`
- Smooth transitions between modes

### Animations
- Fade-in effects using Intersection Observer API
- Parallax scrolling on hero section
- 3D tilt effect on project cards
- Ripple effects on buttons

### Performance
- Optimized images and animations
- Respects user's `prefers-reduced-motion` setting
- Minimal dependencies (no frameworks)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

### Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Netlify

1. Drag and drop the project folder to [Netlify Drop](https://app.netlify.com/drop)

### GitHub Pages

1. Push to GitHub
2. Go to Settings > Pages
3. Select branch and root folder
4. Save

## Performance Tips

- Images: Use WebP format and lazy loading
- Fonts: Preload critical fonts
- JavaScript: Minify for production
- CSS: Remove unused styles

## License

This project is open source and available for personal and commercial use.

## Contact

- **Email:** safeer1073@gmail.com
- **LinkedIn:** [safeerahmad-sa](https://www.linkedin.com/in/safeerahmad-sa)
- **Portfolio:** [safeer-portfolio.vercel.app](https://safeer-portfolio.vercel.app)
- **Phone:** 0325-7884488

---

**Built with ❤️ by Safeer Ahmad**

*"Great code is not written, it's crafted — one commit at a time."*
