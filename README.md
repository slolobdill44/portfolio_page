# My Portfolio Page - https://adrianlobdill.com

A clean, responsive personal portfolio showcasing projects and professional experience. Built with modern web fundamentals and deployed with enterprise-grade performance. Recent code refresh assisted by Claude CLI.

## ⚡ Tech Stack

- **Frontend**: Vanilla HTML5, CSS3, JavaScript (ES6+)
- **Styling**: CSS Grid, Flexbox, Custom Properties, Responsive Design
- **Hosting**: Google Cloud Storage
- **CDN**: Fastly (Image Optimization, WAF, Rate Limiting)
- **CI/CD**: GitHub Actions for automated deployment. Each deployment updates the static objects in the GCS bucket and performs a "purge all" action within the Fastly service


## 🔧 Key Highlights

- **Zero Dependencies**: No frameworks or build tools required
- **Modern CSS**: Grid, Flexbox, Custom Properties, Container Queries
- **Clean Code**: Semantic HTML, accessible markup, maintainable styles
- **Enterprise Deployment**: GCS + Fastly for production-grade hosting
- **Performance Optimized**: Lighthouse score 95+ across all metrics
- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **Interactive Elements**: Smooth animations, hover effects, touch-friendly UI

## 🛠️ Architecture

```
├── dist/
│   ├── index.html          # Single-page application
│   ├── css/
│   │   └── main.css        # Modern CSS with custom properties
│   └── assets/             # Optimized images and icons
├── .github/workflows/      # CI/CD automation
```
