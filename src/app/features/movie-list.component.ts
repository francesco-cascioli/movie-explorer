import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MovieFacade } from '../core/services/movie.facade';
import { MoviePage } from '../core/models/movie-page';
import { LoaderComponent } from '../../shared/loader.component';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule,
     FormsModule,
     LoaderComponent,
    ],
  template: `
  


    <div class="filters">
      <div class="search-bar">
        <input [(ngModel)]="query" (keyup.enter)="onSearch()" placeholder="Search movies..." />
        <button (click)="onSearch()">🔍</button>
        <button *ngIf="query" (click)="onClear()">Clear</button>
      </div>

      <div class="genre-filter">
        <label for="genre">Filter by genre:</label>
        <select id="genre" [(ngModel)]="selectedGenre" (change)="onGenreChange()">
          <option [ngValue]="null">All</option>
          <option *ngFor="let g of genres" [ngValue]="g.id">{{ g.name }}</option>
        </select>
      </div>
    </div>

    
  <ng-container *ngIf="page as p; else loading">
  <h3 *ngIf="!query && !selectedGenre">Popular Movies</h3>
  <h3 *ngIf="query">Results for "{{ query }}"</h3>
  <h3 *ngIf="!query && selectedGenre">Movies by Genre</h3>

  <div *ngIf="p.results.length === 0" class="error-msg">
    <p>No movies found.</p>
  </div>

  <div *ngIf="p.results.length > 0" class="grid">
    <a class="card" *ngFor="let m of p.results" [routerLink]="['/movie', m.id]">
      <img [src]="'https://image.tmdb.org/t/p/w200' + m.poster_path" [alt]="m.title"/>
      <div class="meta">
        <h3>{{ m.title }}</h3>
        <p>⭐ {{ m.vote_average | number:'1.1-1' }}</p>
      </div>
    </a>
  </div>
</ng-container>

<ng-template #loading><app-loader></app-loader></ng-template>

  `
})
export class MovieListComponent implements OnInit {
  facade = inject(MovieFacade);

  query = '';
  page: MoviePage | null = null;

  genres: any[] = [];
  selectedGenre: number | null = null;

  ngOnInit(): void {
    this.facade.movies$.subscribe(p => this.page = p);
    this.facade.genres$.subscribe(g => this.genres = g);

    this.facade.loadPopular(1);
    this.facade.loadGenres();
  }

  onSearch() {
    this.query.trim()
      ? this.facade.search(this.query, 1)
      : this.facade.loadPopular(1);
    this.selectedGenre = null; 
  }

  onClear() {
    this.query = '';
    this.facade.clearSearch();
    this.selectedGenre = null;
  }

 
  onGenreChange() {
    if (this.selectedGenre) {
      this.facade.loadByGenre(this.selectedGenre, 1);
      this.query = ''; 
    } else {
      this.facade.loadPopular(1);
    }
  }
}
