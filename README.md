# 👩‍💻 Modern React Developer Portfolio

A stunning, responsive, and interactive single-page portfolio website built with React and Tailwind CSS. This project features a modern dark-themed aesthetic with glassmorphism effects, smooth animations, and a simulated AI chatbot.

✨ Features:

- ⚡ Reactive & Fast: Built using React functional components and hooks.

- 🎨 Modern UI/UX: Dark mode aesthetic with "grainy gradient" backgrounds and glassmorphism (blur) effects.

- 📱 Fully Responsive: Optimized for mobile, tablet, and desktop with a custom mobile navigation menu.

- 🤖 AI Chat Simulation: A fun, interactive mock chatbot that answers basic questions about the portfolio owner.

- 🎬 Custom Animations: CSS-based animations for floating elements, spinning borders, and fade-in effects.

🛠 Modular Sections:

- Hero: Animated introduction with social links.

- Skills: Categorized skill badges with hover effects.

- Projects: Card-based layout displaying featured work.

- Experience: Vertical timeline for work and education.

- Testimonials: Client reviews section.

- Contact: Functional-looking contact form and details.

🛠️ Tech Stack:

- Frontend Library: React

- Styling: Tailwind CSS

- Icons: Lucide React

- Language: JavaScript (ES6+)

🚀 Getting Started

Follow these steps to set up the project locally.

1. Prerequisites
Ensure you have Node.js installed on your machine.

2. Create a React Project
I recommend using Vite for a fast setup.

npm create vite@latest my-portfolio -- --template react
cd my-portfolio
npm install

3. Install Dependencies
Install the required icon library:

npm install lucide-react

4. Setup Tailwind CSS
Since the styling relies entirely on Tailwind, you must configure it.

A. Install Tailwind:

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

B.Run the Project

npm run dev

📂 Project Structure:

src/
├── components/      
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Projects.jsx
│   ├── Skills.jsx
│   ├── Experience.jsx
│   ├── AIChat.jsx
│   └── Contact.jsx
├── App.jsx              # Main application logic
├── index.css            # Tailwind imports
└── main.jsx             # React entry point

📄 License

This project is open-source and available for personal use. Feel free to fork and customize it for your own portfolio!

Happy Coding! 💜
