import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class WatchlistService {
  private key = 'watchlist';

  getAll(): any[] {
    return JSON.parse(localStorage.getItem(this.key) || '[]');
  }

  add(movie: any): void {
    const list = this.getAll();
    if (!list.find(m => m.id === movie.id)) {
      list.push(movie);
      localStorage.setItem(this.key, JSON.stringify(list));
    }
  }

  remove(id: number): void {
    const list = this.getAll().filter(m => m.id !== id);
    localStorage.setItem(this.key, JSON.stringify(list));
  }

  isInWatchlist(id: number): boolean {
    return this.getAll().some(m => m.id === id);
  }
}
