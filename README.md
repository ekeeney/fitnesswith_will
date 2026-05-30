# Fitness With Will

A professional personal training website for Will, a NASM Certified Personal Trainer based in North Ocean City, Maryland.

## About

This website showcases Will's personal training services, specialties, and client testimonials. Built with clean, modern design featuring an Electric Blue and Gunmetal color scheme.

**Will's Specialties:**
- 💪 Strength & Muscle Building
- 🔥 Beginner Fitness Coaching
- ✨ Confidence & Lifestyle Transformation

## Project Structure

```
fitnesswith_will/
├── index.html          # Homepage
├── about.html          # About Will page
├── contact.html        # Contact & FAQ page
├── css/
│   └── style.css       # Main stylesheet (Electric Blue + Gunmetal theme)
├── js/
│   └── main.js         # JavaScript functionality
├── assets/
│   ├── images/         # Image placeholder files
│   │   ├── will-about-photo.txt
│   │   ├── hero-section.txt
│   │   └── testimonial-clients.txt
│   └── icons/          # Icon placeholder folder
├── README.md           # This file
└── .gitignore          # Git ignore rules

```

## Features

- **Responsive Design**: Mobile-friendly layout that works on all devices
- **Modern Styling**: Electric Blue (#0099ff) + Gunmetal color scheme
- **Navigation**: Sticky header with smooth scrolling
- **Contact Form**: Working contact form with client-side validation
- **Testimonials**: Client testimonial showcase
- **FAQ Section**: Common questions and answers
- **Social Integration**: Instagram link to Will's profile

## Getting Started

### Requirements
- Any modern web browser
- For deployment: basic web hosting

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd fitnesswith_will
```

2. Add your photos to the assets folder:
   - Replace `will-about-photo.txt` with actual photo
   - Add any additional images to `assets/images/`

3. Open `index.html` in your browser to preview

### Customization

#### Contact Information
Edit the following files to add real contact details:
- `contact.html` - Email, phone, hours

#### Social Media
- Update Instagram link in footer (currently: `https://www.instagram.com/fitnesswith_will/`)
- Add other social media links as needed

#### Content
- Edit text content directly in the HTML files
- Update colors by changing CSS variables in `css/style.css`:
  - `--primary: #0099ff` (Electric Blue)
  - `--gunmetal: #2c3e50` (Gunmetal)

#### Images
Replace the placeholder `.txt` files in `assets/images/` with actual image files:
- `will-about-photo.jpg` - Professional photo for About page
- `hero-section.jpg` - Optional: Hero section background (if using)
- `testimonial-clients.jpg` - Optional: Client testimonial photos

## Color Scheme

- **Primary (Electric Blue)**: `#0099ff`
- **Primary Dark**: `#0077cc`
- **Primary Light**: `#33b3ff`
- **Gunmetal**: `#2c3e50`
- **Gunmetal Light**: `#34495e`
- **Text Dark**: `#1a1a1a`
- **Text Light**: `#ecf0f1`
- **Background Light**: `#f8f9fa`

## Pages

### index.html (Homepage)
- Hero section with call-to-action
- About Will preview
- Specialties showcase (3 cards)
- Client testimonials (3 testimonials)
- Main CTA section

### about.html (About Page)
- Full bio and journey
- Shoulder labrum recovery story
- NASM certification badge
- Training philosophy
- Specialties list
- Professional photo placeholder

### contact.html (Contact Page)
- Contact form with validation
- Gym location info
- Hours/availability
- Social media links
- FAQ section (6 common questions)

## Development

### Form Handling
The contact form on `contact.html` includes:
- Client-side validation
- Success/error messages
- Form reset on submission

To integrate with a backend service:
1. Update the form submission handler in `js/main.js`
2. Send form data to your backend endpoint

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

### Static Hosting Options
- Netlify
- Vercel
- GitHub Pages
- Traditional web hosting

### Basic Upload
1. Upload all files to your web server
2. Ensure the folder structure is maintained
3. Test all links and forms

## Future Enhancements

- [ ] Add photo gallery
- [ ] Add video testimonials
- [ ] Implement backend for contact form
- [ ] Add service/pricing page
- [ ] Add blog section
- [ ] Implement booking system
- [ ] Add testimonial filtering/carousel
- [ ] Add client transformation gallery

## Contact

**Will's Fitness Services**
- Instagram: [@fitnesswith_will](https://www.instagram.com/fitnesswith_will/)
- Location: Pure Family Fitness, North Ocean City, Maryland
- Availability: By Appointment

---

**Built for Fitness With Will** - NASM Certified Personal Training
