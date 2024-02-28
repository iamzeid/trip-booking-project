import { Routes } from '@angular/router';
import { SearchComponent } from './Components/search/search.component';
import { TripDetailsComponent } from './Components/trip-details/trip-details.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'search',
        pathMatch: 'full'
    },
    {
        path: 'search',
        component: SearchComponent
    },
    {
        path: 'trip/:id',
        component: TripDetailsComponent
    }
];
