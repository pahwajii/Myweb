# 📂 Portfolio Customization & Setup Guide

This guide documents the architecture changes and customization steps for your portfolio website. All hardcoded data has been centralized to make updating your personal details, education, projects, skills, certificates, and blog posts simple and clean.

---

## 🛠️ Centralized Configuration Architecture

Instead of searching through individual pages and components to change your information, everything is consolidated in a single file:
👉 **[src/portfolioData.js](file:///d:/my_coding_work/portfolioMain/src/portfolioData.js)**

The structure of the data inside this configuration file is detailed below.

### 1. General Profile Info (`profile`)
Contains name, initials, professional role, location, email, phone, bio paragraphs, avatar image, and professions.
```javascript
export const profile = {
  firstName: 'Lakshay',
  lastName: 'Pahwa',
  fullName: 'Lakshay Pahwa',
  initials: 'LP',
  role: 'Full Stack Developer • AI Explorer',
  location: 'Noida, Uttar Pradesh, India',
  email: 'lakshaypahwa47@gmail.com',
  phone: '+91 6396339806',
  avatar: '/photo.jpg',
  professions: [ ... ],
  bio1: '...',
  bio2: '...',
  bio3: '...'
}
```

### 2. Social Links (`socialLinks`)
An array of social icons and link paths that renders in the **Home**, **Resume**, and **Contact** pages.
```javascript
export const socialLinks = [
  { img: '/github.png', title: 'GitHub', link: 'https://github.com/pahwajii' },
  ...
]
```

### 3. Education History (`education`)
An array of education blocks rendered dynamically in the **About** and **Resume** pages.
```javascript
export const education = [
  {
    degree: 'B.Tech in Computer Science',
    institution: 'Bundelkhand Institute of Engineering and Technology',
    location: 'Jhansi, Uttar Pradesh, India',
    status: 'Graduated',
    gpa: 'CGPA: 8.19',
    years: '2022 – 2026',
    icon: 'FaUniversity' // Maps to imported react-icons
  },
  ...
]
```

### 4. Projects (`projects`)
A list of all projects rendered in the **Projects** and **Resume** pages.
```javascript
export const projects = [
  {
    title: '🩺 Mammogram Malignancy Detector',
    desc: 'Hybrid CNN + YOLOv8 ensemble...',
    ss: '/mamo.png',
    tech: ['TensorFlow', 'Keras', 'OpenCV', 'YOLOv8'],
    live: '#',
    code: 'https://github.com/pahwajii/mammo-detector'
  },
  ...
]
```

### 5. Skills (`skills` & `skillsRows`)
Floating orbs list and category-grouped grid items rendered on the **Skills** and **Resume** pages.
- `skills`: Used for the interactive floating 3D/floating orbs canvas.
- `skillsRows`: Used for the category columns.

### 6. Certificates (`certificates`)
Grouped list of credentials (e.g. `tech` or `other`) displayed on the **Certificates** page.

### 7. Blog Posts (`blogs`)
Thoughts and reflections rendered on the interactive voting **Blog** page.

### 8. Gallery (`gallery`)
Categories (`personal`, `projects`, `achievements`) displayed on the visual **Gallery** page.

---

## ⚠️ Important Rules for Asset Paths

When referencing images or files (like your resume PDF, project screenshots, logos, or gallery photos):
1. **Put the files in the `public/` directory** (e.g. `public/photo.jpg`, `public/resume.pdf`).
2. **Do NOT import them inside JavaScript** (e.g., do not write `import photo from '../public/photo.jpg'`). Vite does not support importing from the `public` directory.
3. **Reference them using absolute root paths** starting with a slash (e.g., use `'/photo.jpg'` instead of `'/public/photo.jpg'` or `'../public/photo.jpg'`). Vite serves all files in `public` directly at the root.

---

## 🚀 Running the Project

### Development Server
To launch the project locally and view changes in real time:
```bash
npm run dev
```
Open [http://localhost:5173/](http://localhost:5173/) (or the port specified in console) in your browser.

### Production Build
To test compilation correctness and compile static assets for hosting:
```bash
npm run build
```
The optimized bundle will be compiled into the `dist/` directory, ready to be deployed to Vercel, Netlify, or similar platforms.
