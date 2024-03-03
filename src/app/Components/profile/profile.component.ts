import { Component } from '@angular/core';
import { TripService } from '../../Services/trip.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterLink, CommonModule],
  providers: [TripService],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  constructor(private TripService: TripService) { }

  getUser() {

    return this.TripService.checkUser();

  }
}
