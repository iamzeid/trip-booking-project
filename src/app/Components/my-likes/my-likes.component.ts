import { Component } from '@angular/core';
import { LikesService } from '../../Services/likes.service';
import { TripService } from '../../Services/trip.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-my-likes',
  standalone: true,
  imports: [CommonModule, RouterLink],
  providers: [LikesService, TripService
  ],
  templateUrl: './my-likes.component.html',
  styleUrl: './my-likes.component.css'
})

export class MyLikesComponent {
  trips: any;
  userId = 1;
  constructor(
    private TripService: TripService,
    private LikesService: LikesService
  ) { }

  ngOnInit(): void {
    this.TripService.getAllTrips().subscribe(data => {
      this.trips = data;
    });
  }

}
