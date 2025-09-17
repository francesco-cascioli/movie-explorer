import { Routes } from '@angular/router';
import { MovieListComponent } from './features/movie-list.component';
import { MovieDetailComponent } from './features/movie-detail.component';
import { WatchlistComponent } from './features/watchlist.component';

export const routes: Routes = [
    { path: '', component: MovieListComponent},
    { path: 'movie/:id', component: MovieDetailComponent},
    { path: 'watchlist', component: WatchlistComponent},
    { path: '**', redirectTo: ''},
    {
        path: '',
        component: MovieListComponent,
        title: 'Movie Explorer',
        data: { scrollToTop: true }
    }

];
