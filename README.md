






✨ Features

🔍 Real-time movie search with instant results

🎭 Genre filtering to discover movies by category

📱 Fully responsive design optimized for all devices

💾 Personal watchlist with local storage persistence

🎬 Detailed movie information with high-quality images

⚡ Fast and smooth user experience with modern animations

🌐 Live demo available online

🚀 Live Demo

View Live Demo
 🎯

🛠️ Tech Stack
Frontend

Angular 19 – standalone components architecture

TypeScript 5.7 – type-safe development

SCSS – responsive styling with media queries

RxJS – reactive programming for async operations

Architecture

Standalone Components – modern Angular structure

Services & Facade Pattern – separation of concerns

Reactive Forms – form handling and validation

Angular Router – SPA navigation

APIs & Data

TMDB API – movie data source

Local Storage – watchlist persistence

HTTP Client – RESTful API communication

📱 Responsive Design

Mobile-first approach with viewport height fix (--vh)

Optimized for all screen sizes (320px → 4K)

Touch-friendly interface with proper touch targets

No horizontal scrolling issues

Adaptive layouts for phones, tablets, desktops

🎯 Key Features
Movie Discovery

Browse popular movies

Search by title with real-time results

Filter by genre (Action, Comedy, Drama, etc.)

View detailed movie information

User Experience

Add/remove movies from personal watchlist

Responsive image loading with fallbacks

Smooth animations and transitions

Loading states and error handling

Technical Excellence

Modern Angular 19 features

Clean, maintainable code structure

Type safety with TypeScript

Organized SCSS styling

Mobile-optimized performance

🚀 Getting Started
Prerequisites

Node.js (v18 or higher)

npm or yarn

Angular CLI

Installation
# Clone the repository
git clone https://github.com/francescocascioli/movie-explorer.git
cd movie-explorer

# Install dependencies
npm install

# Start development server
ng serve

# Open browser at http://localhost:4200

Build for Production
ng build --configuration production


The build artifacts will be stored in the dist/ directory.

📁 Project Structure
src/
├── app/
│   ├── core/
│   │   ├── components/     # Shared components (navbar)
│   │   ├── services/       # API services and business logic
│   │   └── models/         # TypeScript interfaces
│   ├── features/           # Feature modules
│   │   ├── movie-list/     # Movie listing
│   │   ├── movie-detail/   # Movie details
│   │   └── watchlist/      # Watchlist
│   └── shared/             # Shared utilities and components
├── styles.scss             # Global styles and variables
└── index.html              # Main HTML file

🔧 Development
Available Scripts
# Development server
ng serve

# Build for production
ng build

# Run tests
ng test

# Lint code
ng lint

Environment Setup

Create src/environments/environment.ts:

export const environment = {
  apiUrl: 'https://api.themoviedb.org/3',
  apiKey: 'your-tmdb-api-key',
  language: 'en-US'
};

🌟 Highlights

Latest Angular 19 – cutting-edge features

Mobile-First Design – optimized for mobile devices

Clean Architecture – maintainable project structure

Type Safety – full TypeScript integration

Performance Optimized – fast loading and smooth UX

Professional UI/UX – modern, intuitive interface

📸 Screenshots

Add screenshots of your application here (desktop + mobile views).

🤝 Contributing

Fork the repository

Create a feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

📄 License

This project is licensed under the MIT License – see the LICENSE
 file for details.

👨‍💻 Author

Francesco Cascioli

🌐 Portfolio

💼 LinkedIn

🐙 GitHub

⭐ Star this repository if you found it helpful!

Vuoi che ti aggiunga anche una sezione "Known Issues / Future Improvements" come nel primo README (NYT Clone) per dare un tocco più “developer journal”?
