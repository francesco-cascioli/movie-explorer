import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WatchlistService } from '../core/services/watchlist.service';

@Component({
  selector: 'app-watchlist',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <h2>My Watchlist</h2>

    <div *ngIf="movies.length; else empty" class="grid">
      <a class="card" *ngFor="let m of movies" [routerLink]="['/movie', m.id]">
        <img [src]="'https://image.tmdb.org/t/p/w200' + m.poster_path" [alt]="m.title"/>
        <div class="meta">
          <h3>{{ m.title }}</h3>
          <p>⭐ {{ m.vote_average }}</p>
        </div>
      </a>
    </div>

    <ng-template #empty>
      <p>No movies in your Watchlist yet.</p>
    </ng-template>
  `
})
export class WatchlistComponent implements OnInit {
  private watchlistSvc = inject(WatchlistService);
  movies: any[] = [];

  ngOnInit(): void {
    this.movies = this.watchlistSvc.getAll();
  }
}

