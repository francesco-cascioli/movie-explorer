Movie Explorer

An Angular app to search movies, view details, and save a watchlist. Data is sourced from TMDB.

Demo

Live: https://movie-angular-explorer.netlify.app

Features

Search movies by title

Popular movies with genre filter

Movie detail (overview, rating, release date)

Watchlist stored locally (localStorage)

Responsive layout optimized for mobile

Admin page to add/edit titles (local only)

Tech Stack

Angular 19, TypeScript, RxJS

SCSS

TMDB API (HTTP Client)

Quick Start

Prerequisites: Node 18+, Angular CLI

git clone https://github.com/francesco-cascioli/movie-explorer.git
cd movie-explorer
npm install
ng serve
# http://localhost:4200


Production build:

ng build --configuration production

API Configuration

Set your TMDB key in src/app/environments/environment.development.ts:

export const environment = {
  apiUrl: 'https://api.themoviedb.org/3',
  apiKey: 'YOUR_TMDB_API_KEY',
  language: 'en-US'
};

Links

Demo: https://movie-angular-explorer.netlify.app

Source: https://github.com/francesco-cascioli/movie-explorer

Portfolio: https://francesco-cascioli.github.io/Francesco-Portfolio/

LinkedIn: https://www.linkedin.com/in/francesco-cascioli-190833304/

Author

Francesco Cascioli
