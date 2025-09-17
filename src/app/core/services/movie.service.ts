import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../enviroments/enviroment.development';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private http = inject(HttpClient);
  private base = environment.apiUrl;
  private apiKey = environment.apiKey;
  private lang = environment.language;

  private withAuth(params: Record<string, string | number> = {}): HttpParams {
    let p = new HttpParams()
      .set('api_key', this.apiKey)
      .set('language', this.lang);
    for (const [k, v] of Object.entries(params)) p = p.set(k, String(v));
    return p;
  }

  getPopularMovies(page = 1): Observable<any> {
    return this.http.get(`${this.base}/movie/popular`, {
      params: this.withAuth({ page })
    });
  }

  getMovieDetails(id: number): Observable<any> {
    return this.http.get(`${this.base}/movie/${id}`, {
      params: this.withAuth()
    });
  }

  searchMovies(query: string, page = 1): Observable<any> {
  return this.http.get(`${this.base}/search/movie`, {
    params: this.withAuth({ query, page })
  });
}

getGenres() {
  return this.http.get(`${this.base}/genre/movie/list`, {
    params: this.withAuth()
  });
}

getMoviesByGenre(genreId: number, page = 1) {
  return this.http.get(`${this.base}/discover/movie`, {
    params: this.withAuth({ with_genres: genreId, page })
  });
}


}
