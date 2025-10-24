# Engineering College Website

A modern, responsive, multi-page brochure website for Engineering College built with HTML5, CSS3, Bootstrap 5, and vanilla JavaScript.

## 🌐 Live Demo

- **GitHub Repository:** https://github.com/aylinka7/midterm-engineering-college-AilinAdylova
- **Live Site:** https://aylinka7.github.io/midterm-engineering-college-AilinAdylova/

## 📋 Project Overview

This is a fully functional, static website for an educational institution that showcases programs, admissions information, student life, and provides registration and contact functionality. The site is built with a mobile-first approach and follows modern web accessibility standards.

## 🗺️ Site Structure

### Pages (6 Total)

1. **Home (index.html)**
    - Hero section with institution branding
    - Animated statistics counter
    - Feature highlights
    - Call-to-action sections

2. **Programs (programs.html)**
    - About the institution
    - 6 undergraduate engineering programs
    - Program features and highlights
    - Card-based layout with hover effects

3. **Admissions (admissions.html)**
    - Admissions overview
    - 6-step application process
    - Comprehensive tuition & fees table
    - Important dates and deadlines
    - Admission requirements

4. **Student Life (student-life.html)**
    - Campus life overview
    - News & events with **interactive filter** (JS Feature #1)
    - Student organizations
    - **FAQ accordion** (JS Feature #2)

5. **Contact (contact.html)**
    - Contact information cards
    - **Contact form** with validation and anti-spam
    - Department contacts
    - Office hours

6. **Registration (registration.html)**
    - **Advanced registration form** with comprehensive validation
    - Personal, academic, and security sections
    - Real-time validation feedback
    - Success confirmation

## ✨ Key Features Implemented

### Forms (Required)

#### 1. Advanced Registration Form
- **Fields:**
    - Full Name (text, required, min 3 chars)
    - Email (email, required, validated pattern)
    - Phone (tel, required, validated pattern)
    - Desired Program (select dropdown, required)
    - Study Mode (radio buttons: Full-Time/Part-Time/Online, required)
    - Intended Intake (date picker, required)
    - Password (password, required, min 8 chars)
    - Confirm Password (password, required, must match)
    - Terms & Conditions (checkbox, required)
    - Scholarship Interest (select dropdown, optional)

- **Validation:**
    - Client-side validation with JavaScript
    - Real-time inline error messages
    - Field-level validation on blur
    - Form-level validation on submit
    - Visual feedback (red for invalid, green for valid)
    - Prevents submission until all required fields are valid

- **User Experience:**
    - Clear success message after submission
    - Form reset after successful submission
    - Keyboard accessible
    - Proper labels and ARIA attributes

#### 2. Contact Form
- **Fields:**
    - Name (required)
    - Email (required, validated)
    - Subject (required)
    - Message (required, min 10 chars)
    - Anti-spam check (math question: 2+2=4)

- **Features:**
    - Client-side validation
    - Success/error messages
    - Anti-spam measure
    - Accessible and keyboard-friendly

### JavaScript Interactive Features (Required)

#### 1. Content Filter (Student Life Page)
- Filter buttons for: All, Events, News, Clubs, Sports
- Smooth show/hide animations
- Active state highlighting
- Progressive enhancement friendly

#### 2. FAQ Accordion (Student Life Page)
- Expandable/collapsible FAQ items
- Only one open at a time
- Smooth transitions
- Keyboard accessible (Enter/Space to toggle)
- Visual feedback on hover and active states

### Additional JavaScript Enhancements

- **Animated Statistics Counter:** Numbers count up when scrolling into view
- **Smooth Scrolling:** For anchor links
- **Active Navigation:** Highlights current page in navbar
- **Mobile Menu:** Responsive hamburger navigation
- **Form Validation:** Real-time validation with visual feedback

### Responsive Design

- **Mobile-First Approach:** Optimized for small screens first
- **Breakpoints:**
    - Mobile: < 768px
    - Tablet: 768px - 991px
    - Desktop: ≥ 992px
- **Fixed Navigation:** Collapsible on mobile, always accessible
- **Flexible Layouts:** All content adapts gracefully across screen sizes
- **Touch-Friendly:** Buttons and interactive elements sized for mobile

### Accessibility Features

- **Semantic HTML5:** Proper heading hierarchy, nav, section, footer tags
- **ARIA Labels:** Form inputs properly labeled
- **Alt Text:** All non-decorative images have descriptive alt attributes
- **Keyboard Navigation:** All interactive elements accessible via keyboard
- **Focus States:** Visible focus indicators on all interactive elements
- **Color Contrast:** WCAG AA compliant color combinations
- **Form Validation:** Clear error messages and success states

### UI/UX Quality

- **Consistent Design System:**
    - Color palette: Primary (#1a73e8), Secondary (#34a853)
    - Typography scale with proper hierarchy
    - 8px spacing system
    - Consistent border radius (8px)

- **Visual Feedback:**
    - Hover states on all interactive elements
    - Smooth transitions (0.3s)
    - Loading states where applicable
    - Clear active/focus states

- **Professional Copy:** Realistic content throughout (no Lorem Ipsum)
- **Scannable Layouts:** Clear information hierarchy
- **Branded Experience:** Consistent colors, fonts, and spacing

## 🛠️ Technologies Used

- **HTML5:** Semantic markup
- **CSS3:** Custom properties, flexbox, grid, animations
- **Bootstrap 5.3.2:** Responsive grid, components, utilities
- **Font Awesome 6.4.0:** Icons
- **Vanilla JavaScript (ES6+):** Form validation, interactivity, animations

## 📁 File Structure

```
engineering-college-website/
├── index.html
├── programs.html
├── admissions.html
├── student-life.html
├── contact.html
├── registration.html
├── styles.css
├── script.js
└── README.md
```

## 🚀 Deployment Instructions

### GitHub Repository Setup

1. Create a new repository on GitHub
2. Initialize with README.md
3. Push all files to the repository

```bash
git init
git add .
git commit -m "Initial commit: Engineering College website"
git remote add origin https://github.com/aylinka7/midterm-engineering-college-AilinAdylova
git push -u origin main
```

### GitHub Pages Deployment

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select branch: **main**
4. Select folder: **/ (root)**
5. Click **Save**
6. Your site will be live at: `https://github.com/aylinka7/midterm-engineering-college-AilinAdylova`

## 🎨 Design Highlights

- **Modern Gradient Backgrounds:** Eye-catching hero sections
- **Card-Based Layouts:** Clean, organized information display
- **Smooth Animations:** Fade-ins, hover effects, transitions
- **Professional Color Scheme:** Pastel blue primary and coral/pink secondary with accessible contrast
- **Readable Typography:** Comfortable font sizes and line heights

## ✅ Requirements Checklist

- [x] 6 distinct HTML pages (Home, Programs, Admissions, Student Life, Contact, Registration)
- [x] Fixed top navigation on all pages with active states
- [x] Advanced registration form with 9+ fields and validation
- [x] Contact form with anti-spam measure
- [x] Mobile-first responsive design
- [x] Semantic HTML5 and accessibility features
- [x] Bootstrap 5 integration
- [x] Two interactive JavaScript features (Filter + FAQ)
- [x] Consistent branding and UI/UX
- [x] Professional, realistic content
- [x] Form validation with error/success messages
- [x] Keyboard accessibility
- [x] Proper README documentation

## 🔧 Known Limitations

- Forms do not submit to a backend (client-side only)
- No persistent data storage
- Email links are placeholders
- Maps/directions are placeholder links
- Search functionality not implemented

## 📝 Credits & Attributions

- **Bootstrap 5:** https://getbootstrap.com/
- **Font Awesome:** https://fontawesome.com/
- **Fonts:** Google Fonts Quicksand
- **Images:** SVG patterns generated inline (no external images)
- **Design & Development:** Original work using JetBrains AI and Claude AI

## 📧 Contact

For questions about this project:
- **Email:** admissions@engineeringcollege.edu
- **Phone:** +1 (555) 123-4567

## 📄 License

This project is created for educational purposes.

---

**Built with ❤️ for Engineering College**