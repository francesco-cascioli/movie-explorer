import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MovieService } from '../core/services/movie.service';
import { WatchlistService } from '../core/services/watchlist.service';
import { LoaderComponent } from '../../shared/loader.component';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule,
    LoaderComponent,
  ],
   styleUrls: ['./movie-detail.component.scss'],
  template: `
    

<div *ngIf="movie !== null; else loading">

  <div *ngIf="!movie" class="error-msg">
    <p>Movie not found.</p>
  </div>


  <div *ngIf="movie as m" 
       class="hero"
       [style.background-image]="'url(https://image.tmdb.org/t/p/original' + m.backdrop_path + ')'">

    <div class="overlay"></div>

    <div class="hero-content">
      <h2>{{ m.title }}</h2>
      <p><strong>Release:</strong> {{ m.release_date || 'N/A' }}</p>
      <p><strong>Rating:</strong> ⭐ {{ m.vote_average | number:'1.1-1' }}</p>
      <p class="overview">{{ m.overview || 'No description available.' }}</p>

      <button (click)="toggleWatchlist()" class="btn">
        {{ inWatchlist ? 'Remove from Watchlist' : 'Add to Watchlist' }}
      </button>
    </div>
  </div>
</div>


<ng-template #loading><app-loader></app-loader></ng-template>
  `
})
export class MovieDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private movieSvc = inject(MovieService);
  private watchlistSvc = inject(WatchlistService);

  movie: any;
  inWatchlist = false;

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.movieSvc.getMovieDetails(id).subscribe(res => {
      this.movie = res;
      this.inWatchlist = this.watchlistSvc.isInWatchlist(res.id);
    });
  }

  toggleWatchlist() {
    if (!this.movie) return;
    if (this.inWatchlist) {
      this.watchlistSvc.remove(this.movie.id);
    } else {
      this.watchlistSvc.add(this.movie);
    }
    this.inWatchlist = !this.inWatchlist;
  }
}
