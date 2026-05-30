# 💪 Fitness Coach Website

A modern, responsive website template for personal fitness coaches built with **HTML, CSS, and JavaScript**.

Perfect for personal trainers, fitness coaches, and wellness professionals who want to showcase their services and connect with clients.

## ✨ Features

- **Fully Responsive Design** – Works perfectly on mobile, tablet, and desktop
- **Modern Aesthetic** – Dark theme with vibrant accent colors
- **Smooth Animations** – Professional transitions and scroll effects
- **Mobile Navigation** – Hamburger menu for mobile devices
- **Contact Form** – Built-in form with validation (ready for backend integration)
- **SEO Friendly** – Proper HTML structure and meta tags
- **Fast Loading** – Optimized CSS and JavaScript with no dependencies
- **Easy to Customize** – Well-organized code with clear comments

## 📁 Project Structure

```
fitness-coach-site/
├── index.html           # Homepage
├── about.html          # About/Bio page
├── contact.html        # Contact page with form
├── services.html       # Training programs and services (create this)
├── css/
│   └── style.css       # Main stylesheet
├── js/
│   └── main.js         # Interactive elements
├── assets/
│   ├── images/         # Your photos and images
│   └── icons/          # Icons and graphics
├── README.md           # This file
└── .gitignore          # Git ignore file

```

## 🚀 Getting Started

### 1. **Clone or Download**
```bash
git clone https://github.com/yourusername/fitness-coach.git
cd fitness-coach
```

### 2. **Open Locally**
- Open `index.html` in your browser, or
- Use a local server (recommended):
  ```bash
  python -m http.server 8000
  # Then visit http://localhost:8000
  ```

### 3. **Deploy to GitHub Pages**
1. Rename your repository to `yourusername.github.io`
2. Push your changes to the `main` branch
3. Your site will be live at `https://yourusername.github.io`

## 🎨 Customization Guide

### Update Your Information
Replace placeholder text in HTML files:

#### `index.html`
- [ ] Update your name/brand name
- [ ] Customize service descriptions
- [ ] Add real testimonials
- [ ] Update call-to-action text

#### `about.html`
- [ ] Write your bio and story
- [ ] Add your certifications and credentials
- [ ] List your specialties
- [ ] Replace placeholder photo with yours

#### `contact.html`
- [ ] Update email address
- [ ] Add your phone number
- [ ] Update location and availability
- [ ] Add your social media links

### Add Your Images
1. Place photos in the `assets/images/` folder
2. Replace image placeholders in HTML:
   ```html
   <img src="assets/images/your-photo.jpg" alt="Description">
   ```

### Customize Colors
Edit CSS variables in `css/style.css`:
```css
:root {
    --primary-bg: #0f0f0f;           /* Dark background */
    --accent-color: #ff6b35;         /* Orange accent */
    --text-primary: #ffffff;          /* White text */
    --text-secondary: #b0b0b0;        /* Gray text */
}
```

### Add More Pages
To create a new page (e.g., `blog.html`):
1. Copy an existing HTML file
2. Keep the navigation structure the same
3. Update the content
4. Add navigation link in all pages

## 📝 Pages Overview

| Page | Purpose |
|------|---------|
| `index.html` | Landing page with hero, services, testimonials |
| `about.html` | Your bio, credentials, specialties, philosophy |
| `contact.html` | Contact form, location, hours, FAQ |
| `services.html` | Detailed training programs (create this) |

## 📋 To-Do Checklist

- [ ] Update all placeholder text with your information
- [ ] Add your professional photo to `about.html`
- [ ] Replace testimonial quotes with real client feedback
- [ ] Update contact information (email, phone, location)
- [ ] Add social media links
- [ ] Create `services.html` with detailed program descriptions
- [ ] Set up contact form backend (see below)
- [ ] Add your own favicon
- [ ] Test on mobile devices
- [ ] Deploy to GitHub Pages

## 🔧 Contact Form Setup

The contact form is ready for integration with a backend service:

### Option 1: Formspree (Recommended for Beginners)
1. Go to [formspree.io](https://formspree.io)
2. Create an account and new form
3. Get your form ID
4. In `js/main.js`, uncomment and update the fetch code:
   ```javascript
   fetch('https://formspree.io/f/YOUR_FORM_ID', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({ name, email, message })
   })
   ```

### Option 2: EmailJS
1. Sign up at [emailjs.com](https://emailjs.com)
2. Add EmailJS script to HTML head
3. Follow their integration guide

### Option 3: Basin
Simple alternative at [basin.co](https://basin.co)

## 📱 Responsive Design

The site is optimized for:
- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px

All pages are fully responsive without any dependencies.

## 🚀 Performance Tips

1. **Optimize Images** – Compress photos using [TinyPNG](https://tinypng.com)
2. **Add Favicon** – Place `favicon.ico` in root directory
3. **Use Web Fonts** – Consider system fonts or [Google Fonts](https://fonts.google.com)
4. **Lazy Load Images** – Add `loading="lazy"` to images

## 🔍 SEO Optimization

Update meta tags in each HTML file:
```html
<meta name="description" content="Your description here">
<meta name="keywords" content="personal trainer, fitness coach, etc">
```

## 📞 Support

Need help? Consider:
- Reading the code comments
- Checking [MDN Web Docs](https://developer.mozilla.org)
- Asking on [Stack Overflow](https://stackoverflow.com)

## 📄 License

This template is free to use and modify for personal or commercial projects.

---

**Ready to launch your fitness coaching business online?** Start customizing now! 💪

Built with ❤️ for fitness professionals
