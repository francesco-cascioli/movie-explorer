import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MovieService } from './movie.service';
import { MoviePage } from '../models/movie-page';

@Injectable({ providedIn: 'root' })
export class MovieFacade {
  private movieSvc = inject(MovieService);

  private moviesSubject = new BehaviorSubject<MoviePage | null>(null);
  movies$ = this.moviesSubject.asObservable();

  private query = '';
  private page = 1;

  loadPopular(page = 1) {
    this.query = '';
    this.page = page;
    this.movieSvc.getPopularMovies(page).subscribe((res: any) => {
      const pageData: MoviePage = {
        results: res.results,
        page: res.page,
        total_pages: res.total_pages
      };
      this.moviesSubject.next(pageData);
    });
  }

  search(query: string, page = 1) {
    this.query = query;
    this.page = page;
    this.movieSvc.searchMovies(query, page).subscribe((res: any) => {
      const pageData: MoviePage = {
        results: res.results,
        page: res.page,
        total_pages: res.total_pages
      };
      this.moviesSubject.next(pageData);
    });
  }

  nextPage() {
    const current = this.moviesSubject.value;
    if (!current) return;
    if (this.page < current.total_pages) {
      this.query ? this.search(this.query, this.page + 1) : this.loadPopular(this.page + 1);
    }
  }

  prevPage() {
    if (this.page > 1) {
      this.query ? this.search(this.query, this.page - 1) : this.loadPopular(this.page - 1);
    }
  }

  clearSearch() {
    this.loadPopular(1);
  }

loadByGenre(genreId: number, page = 1) {
  this.query = ''; 
  this.page = page;
  this.movieSvc.getMoviesByGenre(genreId, page).subscribe((res: any) => {
    const pageData: MoviePage = {
      results: res.results,
      page: res.page,
      total_pages: res.total_pages
    };
    this.moviesSubject.next(pageData);
  });
}

private genresSubject = new BehaviorSubject<any[]>([]);
genres$ = this.genresSubject.asObservable();

loadGenres() {
  this.movieSvc.getGenres().subscribe((res: any) => {
    this.genresSubject.next(res.genres);
  });
}


}
