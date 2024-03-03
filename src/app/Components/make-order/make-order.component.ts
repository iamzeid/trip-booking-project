import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TripService } from '../../Services/trip.service';
import { Trip } from '../../models/trip.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
// import fs from 'fs';
@Component({
  selector: 'app-make-order',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './make-order.component.html',
  styleUrls: ['./make-order.component.css'],
})

export class MakeOrderComponent implements OnInit {
  tripId: number = 0;
  trip: Trip = {
    id: 0,
    destination: '',
    startDate: '',
    endDate: '',
    price: 0,
    remainingSeats: 0,
    likedBy: [],
    bookedBy: []
  };
  errorMessage: string = '';
  seatsToBook: number = 0;

  private apiUrl = 'http://localhost:5000/trips';

  constructor(
    private route: ActivatedRoute,
    private tripService: TripService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.tripId = +this.route.snapshot.params['id'];
    this.tripService.getTrip(this.tripId).subscribe(data => {
      this.trip = data;
    });
  }

  bookSeats() {
    // This does three things:
    // PATCH http://localhost:5000/trips/:id with the new remainingSeats value and append the userId to the bookedBy array
    // POST http://localhost:5000/bookings with the new booking
    // Redirect to /my-trips

    if (this.seatsToBook > this.trip.remainingSeats) {
      this.errorMessage = 'Not enough seats';
      return;
    } else if (this.seatsToBook <= 0) {
      this.errorMessage = 'Invalid number of seats';
      return;
    } else {
      this.trip.remainingSeats -= this.seatsToBook;
      this.trip.bookedBy.push(1);
      this.tripService.updateTrip(this.trip).subscribe(() => {
        this.tripService.addBooking({
          id: 0,
          userId: 1,
          tripId: this.trip.id,
          destination: this.trip.destination,
          startDate: this.trip.startDate,
          endDate: this.trip.endDate,
          price: this.trip.price,
          bookedBy: [1]
        }).subscribe(() => {
          this.router.navigate(['payment-successful']);
        });
      });
    }
  }
}
