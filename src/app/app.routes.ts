import { Routes } from '@angular/router';
import { SearchComponent } from './Components/search/search.component';
import { TripDetailsComponent } from './Components/trip-details/trip-details.component';
import { MakeOrderComponent } from './Components/make-order/make-order.component';
import { BookedTripsComponent } from './Components/booked-trips/booked-trips.component';
import { PaymentSuccessfulComponent } from './Components/payment-successful/payment-successful.component';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { MyLikesComponent } from './Components/my-likes/my-likes.component';
import { RegisterComponent } from './Components/register/register.component';
import { SigninComponent } from './Components/signin/signin.component';
import { SignoutComponent } from './Components/signout/signout.component';
import { ProfileComponent } from './Components/profile/profile.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'search', component: SearchComponent },
    { path: 'trip/:id', component: TripDetailsComponent },
    { path: 'make-order/:id', component: MakeOrderComponent },
    { path: 'booked-trips', component: BookedTripsComponent },
    { path: 'payment-successful', component: PaymentSuccessfulComponent },
    { path: 'my-likes', component: MyLikesComponent },
    { path: 'register', component: RegisterComponent }, 
    { path: 'login', component: SigninComponent },
    { path: 'logout', component: SignoutComponent},
    { path: 'profile', component: ProfileComponent }
];
