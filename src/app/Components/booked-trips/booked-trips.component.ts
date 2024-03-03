import { Component } from '@angular/core';
import { TripService } from '../../Services/trip.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Booking } from '../../models/booking.model';
// import { Trip } from '../../models/trip.model';
import { ActivatedRoute, RouterLink } from '@angular/router';
@Component({
  selector: 'app-booked-trips',
  standalone: true,
  imports: [CommonModule,FormsModule, RouterLink],
  templateUrl: './booked-trips.component.html',
  styleUrl: './booked-trips.component.css'
})

export class BookedTripsComponent {
  bookedTrips: Booking[] = [];
  bookedSeats: number = 0;

  constructor(
    private route: ActivatedRoute,
    private tripService: TripService
  ) {}

  ngOnInit(): void {
    this.tripService.getBookedTrips(1).subscribe(data => {
      this.bookedTrips = data;
      this.bookedSeats = this.bookedTrips.length;
    });
  }

  
}
