🎬 Movie Explorer

A modern Angular app to browse and discover movies from The Movie Database (TMDB).
Built to practice Angular 19, standalone components, responsive design, and API integration — while keeping the UX smooth and mobile-friendly.

🔗 Live Demo

👉 Movie Explorer on Netlify

🔍 Features

🎬 Browse popular movies with dynamic backdrops
🔎 Real-time search by title
🎭 Filter by genre to discover new favorites
⭐ Add/remove from personal watchlist (persisted in localStorage)
📱 Responsive design with mobile viewport height fix (--vh)
⚡ Loading indicators + error states for smooth UX
❌ Graceful fallbacks for missing data/images

🧱 Tech Stack

Angular 19 – component-based SPA

TypeScript 5.7 – type safety everywhere

SCSS – responsive styling with media queries

RxJS – reactive programming

Angular Router – navigation

TMDB API – movie data source

LocalStorage – watchlist persistence

📂 Project Structure
src/
 ├── app/
 │   ├── core/         # services, models
 │   ├── features/     # movie-list, movie-detail, watchlist
 │   ├── shared/       # loader, reusable components
 │   └── app.routes.ts # routing
 ├── assets/           # static assets
 ├── styles.scss       # global styles
 └── index.html

🚀 Getting Started
Prerequisites

Node.js (>= 18)

Angular CLI installed

Installation
git clone https://github.com/francesco-cascioli/movie-explorer.git
cd movie-explorer
npm install
ng serve


Open 👉 http://localhost:4200

🌟 Why this project?

I wanted to go beyond tutorials and:

Practice Angular standalone components

Fix the real-world 100vh issue on mobile using a custom --vh variable

Integrate a real external API (TMDB)

Focus on UX details: loading states, fallbacks, responsive design

Build something that feels like a real-world app 🎯

📸 Screenshots

Add desktop + mobile screenshots here.

👤 Author

Francesco Cascioli – Front-end developer in training
📍 Umbria, Italy

🐙 GitHub

💼 LinkedIn

📄 License

This project is for educational purposes only.
All movie data and images are provided by TMDB
.

<<<<<<< HEAD
⭐ If you like this project, give it a star on GitHub
!
=======
## 📸 Screenshots

*Add screenshots of your application here*

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Francesco Cascioli**
- LinkedIn: [Francesco Cascioli](https://www.linkedin.com/in/francesco-cascioli-190833304/)
- GitHub: [@francesco-cascioli](https://github.com/francesco-cascioli)
- Portfolio: [Francesco Portfolio](https://francesco-cascioli.github.io/Francesco-Portfolio/)

## 🙏 Acknowledgments

- [The Movie Database (TMDB)](https://www.themoviedb.org/) for the amazing API
- [Angular Team](https://angular.io/) for the fantastic framework
- [Netlify](https://netlify.com/) for hosting

---

⭐ **Star this repository if you found it helpful!**
>>>>>>> 599c05c (Update portfolio link to live website)
