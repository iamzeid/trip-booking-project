import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { TripService } from '../../Services/trip.service';

@Component({
  selector: 'app-trip-details',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './trip-details.component.html',
  styleUrl: './trip-details.component.css',
  providers: [TripService],
})

export class TripDetailsComponent implements OnInit {

  id: number;
  userId: number;
  trip: any;

  constructor(
    private route: ActivatedRoute,
    private TripService: TripService,
    public sanitizer: DomSanitizer
  ) {
    this.id = +route.snapshot.params['id'];
    this.userId = 1;
  }

  ngOnInit(): void {
    this.TripService.getTrip(this.id).subscribe(data => {
      this.trip = data;
    });
  }

  toggleLike() {
    if (this.trip.likedBy.includes(this.userId)) {
      this.trip.likedBy = this.trip.likedBy.filter((id: number) => id !== this.userId);
    } else {
      this.trip.likedBy.push(this.userId);
    }
    this.TripService.updateTrip(this.trip).subscribe();
  }

}