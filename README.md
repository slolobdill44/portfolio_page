# My Portfolio Website 🚀

A clean, responsive personal portfolio showcasing projects and professional experience. Built with modern web fundamentals and deployed with enterprise-grade performance.

## ⚡ Tech Stack

- **Frontend**: Vanilla HTML5, CSS3, JavaScript (ES6+)
- **Styling**: CSS Grid, Flexbox, Custom Properties, Responsive Design
- **Hosting**: Google Cloud Storage
- **CDN**: Fastly (Image Optimization, WAF, Rate Limiting)
- **CI/CD**: GitHub Actions for automated deployment. Each deployment updates the static objects in the GCS bucket and performs a "purge all" action within the Fastly service

## 🎯 Features

- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **Performance Optimized**: Lighthouse score 95+ across all metrics
- **Interactive Elements**: Smooth animations, hover effects, touch-friendly UI
- **Progressive Enhancement**: Works without JavaScript, enhanced with it

## 🛠️ Architecture

```
├── dist/
│   ├── index.html          # Single-page application
│   ├── css/
│   │   └── main.css        # Modern CSS with custom properties
│   └── assets/             # Optimized images and icons
├── .github/workflows/      # CI/CD automation
```

## 🔧 Key Highlights

- **Zero Dependencies**: No frameworks or build tools required
- **Modern CSS**: Grid, Flexbox, Custom Properties, Container Queries
- **Clean Code**: Semantic HTML, accessible markup, maintainable styles
- **Enterprise Deployment**: GCS + Fastly for production-grade hosting

---

*Built with ❤️ and modern web standards*