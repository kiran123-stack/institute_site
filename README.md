# 🎓 ProInstitute — Computer & Paramedical Education Platform

A modern, fast, and SEO-optimized website built for an educational institute offering IT, Computer, and Healthcare/Paramedical courses. Built using **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

---

## ✨ Key Features

- ⚡ **Modern Tech Stack** — Built with Next.js App Router for optimal performance, SSR, and SSG.
- 📱 **Fully Responsive** — Custom Tailwind CSS styling ensures a seamless experience across desktop, tablet, and mobile.
- 🗂️ **JSON Data-Driven Content** — Course data is decoupled from the UI. Add or update courses by modifying JSON files without touching React components.
- 🔍 **SEO Optimized** — Configured with dynamic and static metadata for better search engine visibility (OpenGraph tags, descriptive titles, and keywords).
- 🛣️ **Dynamic Routing** — Course detail pages (`/courses/[slug]`) are dynamically generated based on course data.
- 💬 **Lead Generation & Contact** — Includes an interactive Enquiry Form, floating WhatsApp integration, and Quick Call buttons.
- 🎠 **Interactive UI** — Employs Swiper.js for smooth, touch-friendly course carousels and Testimonials.

---

## 🛠️ Tech Stack

| Layer      | Technology                  |
|------------|-----------------------------|
| Framework  | Next.js 14/15 (App Router)  |
| Styling    | Tailwind CSS                |
| Language   | TypeScript                  |
| Icons      | Lucide React                |
| Carousels  | Swiper.js                   |

---

## 📂 Project Structure
app/
├── about/                  # About Us page — institute history and team
├── components/             # Reusable React components
│   ├── common/             # Buttons, Section Titles, WhatsApp floating button
│   ├── contact/            # Google Maps embed, Contact Info cards
│   ├── course/             # Course Cards, Course Details, Modules
│   ├── gallery/            # Masonry-style gallery grid
│   ├── home/               # Hero section, Course Highlights, Testimonials, Why Choose Us
│   ├── layout/             # Navbar and Footer components
│   └── placement/          # Placement grid for successful alumni
├── contact/                # Contact details and form page
├── courses/                # IT/Computer courses listing and dynamic details routing ([slug])
├── data/                   # 🗄️ JSON files acting as a database
│   ├── computerCourses.json
│   └── paramedicalCourses.json
├── enquiry/                # Student enquiry form with validation
├── gallery/                # Photo gallery page
├── paramedical/            # Paramedical courses listing page
├── placements/             # Alumni success stories and hiring partners
├── types/                  # TypeScript declaration files (e.g., swiper.d.ts)
├── globals.css             # Global Tailwind CSS and custom animations
├── layout.tsx              # Root layout — Navbar, Footer, and Metadata
└── page.tsx                # Main landing page
---

## 📝 Content Management

> You do **not** need to be a developer to update the course offerings. Courses are powered by JSON files in the `app/data/` directory.

### ➕ Adding a Computer Course

Open `app/data/computerCourses.json` and add a new object to the array:

```json
{
  "id": 8,
  "title": "New Course Name",
  "slug": "new-course-name",
  "price": 15000,
  "duration": "6 Months",
  "image": "/courses/new-course.jpg",
  "description": "Short description of the course.",
  "modules": ["Module 1", "Module 2", "Module 3"],
  "careerOpportunities": ["Role 1", "Role 2"]
}
```

> **Note:** Do the same in `app/data/paramedicalCourses.json` for healthcare/medical courses.

---

## 🚀 Getting Started

Follow these steps to run the project on your local machine.

### Prerequisites

Make sure you have **Node.js** (v18 or higher) and **npm** installed.

### Installation

1. **Clone the repository:**
```bash
   git clone <your-repo-url>
   cd <your-project-directory>
```

2. **Install dependencies:**
```bash
   npm install
```

3. **Run the development server:**
```bash
   npm run dev
```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 🎨 Customization

| What to change         | Where to change it                                      |
|------------------------|---------------------------------------------------------|
| Theme colors           | `app/globals.css` or Tailwind classes in components     |
| Contact info & socials | `app/components/layout/Footer.tsx` and `app/contact/page.tsx` |
| Form submission URL    | `app/components/home/QuickEnquiry.tsx` — replace `"https://formspree.io/f/YOUR_FORM_ID"` with your actual endpoint |

---

*Made by Kiran with ♥*
