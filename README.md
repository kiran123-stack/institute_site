🎓 ProInstitute - Computer & Paramedical Education Platform
A modern, fast, and SEO-optimized website built for an educational institute offering IT, Computer, and Healthcare/Paramedical courses. The project is built using Next.js (App Router), TypeScript, and Tailwind CSS.

✨ Key Features
⚡ Modern Tech Stack: Built with Next.js App Router for optimal performance, Server-Side Rendering (SSR), and Static Site Generation (SSG).

📱 Fully Responsive: Custom Tailwind CSS styling ensures a seamless experience across desktop, tablet, and mobile devices.

🗂️ JSON Data-Driven Content: Course data is decoupled from the UI. Easily add or update courses by modifying the JSON files without touching the React components.

🔍 SEO Optimized: Configured with dynamic and static metadata for better search engine visibility (OpenGraph tags, descriptive titles, and keywords).

🛣️ Dynamic Routing: Course detail pages (/courses/[slug]) are dynamically generated based on the course data.

💬 Lead Generation & Contact: Includes an interactive Enquiry Form, floating WhatsApp integration, and Quick Call buttons.

🎠 Interactive UI: Employs Swiper.js for smooth, touch-friendly course highlight carousels and Testimonials.

🛠️ Tech Stack
Framework: Next.js 14/15 (React framework)

Styling: Tailwind CSS

Language: TypeScript

Icons: Lucide React

Carousels: Swiper.js

📂 Project Structure

app/
├── about/                 # About Us page highlighting institute history and team
├── components/            # Reusable React components
│   ├── common/            # Buttons, Section Titles, WhatsApp floating button
│   ├── contact/           # Google Maps embed, Contact Info cards
│   ├── course/            # Course Cards, Course Details, Modules
│   ├── gallery/           # Masonry-style gallery grid
│   ├── home/              # Hero section, Course Highlights, Testimonials, Why Choose Us
│   ├── layout/            # Navbar and Footer components
│   └── placement/         # Placement grid for successful alumni
├── contact/               # Contact details and form page
├── courses/               # IT/Computer courses listing and dynamic details routing ([slug])
├── data/                  # 🗄️ JSON files acting as a database (computerCourses.json, paramedicalCourses.json)
├── enquiry/               # Student enquiry form with validation
├── gallery/               # Photo gallery page
├── paramedical/           # Paramedical courses listing page
├── placements/            # Alumni success stories and hiring partners
├── types/                 # TypeScript declaration files (e.g., swiper.d.ts)
├── globals.css            # Global Tailwind CSS and custom animations
├── layout.tsx             # Root layout wrapping the app with Navbar, Footer, and Metadata
└── page.tsx               # Main landing page


📝 Content Management (How to update data)
You do not need to be a developer to update the course offerings. The courses are powered by JSON files located in the app/data/ directory.

To add or edit a Computer Course:
Open app/data/computerCourses.json and add a new object to the array:
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

Note: Do the same in app/data/paramedicalCourses.json for medical courses.

🚀 Getting Started
Follow these instructions to run the project on your local machine.

Prerequisites
Make sure you have Node.js (v18 or higher) and npm installed.

Installation
 1. Clone the repository:
    git clone <your-repo-url>
   cd <your-project-directory>
   
 2.Install dependencies:
   npm install
  
3.Run the development server:
  npm run dev

4. Open your browser:
Navigate to http://localhost:3000 to see the application running.

Customization
Theme Colors: You can modify the primary color palette in app/globals.css or adjust the specific Hex codes used directly in the Tailwind classes.

Social Links & Contact Info: Update the contact numbers, email addresses, and social links in app/components/layout/Footer.tsx and app/contact/page.tsx.

Form Submission: The Quick Enquiry form uses a POST method. Replace "https://formspree.io/f/YOUR_FORM_ID" in 
app/components/home/QuickEnquiry.tsx with your actual form handler endpoint to receive submissions.

made by kiran with ♥
