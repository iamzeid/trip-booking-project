import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TripsService } from '../../Services/trip.service';
import { NgFor } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-trip-details',
  standalone: true,
  imports: [NgFor],
  templateUrl: './trip-details.component.html',
  styleUrl: './trip-details.component.css',
  providers: [TripsService],
})

export class TripDetailsComponent implements OnInit {
  id: number;
  trip: any;

  constructor(
    private route: ActivatedRoute,
    private tripsService: TripsService,
    public sanitizer: DomSanitizer
  ) {
    this.id = route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.tripsService.getTrips(this.id).subscribe(data => {
      this.trip = data;
    });
  }
}
