import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TripsService } from '../../Services/search.service';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [TripsService],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgFor,
    RouterLink
  ]
})

export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  trips:any = [];

  constructor(
    private formBuilder: FormBuilder,
    private tripsService: TripsService
  ) {
    this.searchForm = this.formBuilder.group({
      destination: '',
      minPrice: '',
      maxPrice: '',
      startDate: '',
      endDate: ''
    });
  }

  ngOnInit(): void {
    this.tripsService.getTrips().subscribe(data => {
      this.trips = data;
    });
  }

  onSubmit(): void {
    this.tripsService.getTrips().subscribe(data => {
      const filters = this.searchForm.value;

      this.trips = data.filter((trip: any) => {
        let destinationMatch = true;
        let minPriceMatch = true;
        let maxPriceMatch = true;
        let startDateMatch = true;
        let endDateMatch = true;

        if (filters.destination) {
          destinationMatch = trip.destination.toLowerCase().includes(filters.destination.toLowerCase());
        }

        if (filters.minPrice) {
          minPriceMatch = trip.price >= filters.minPrice;
        }

        if (filters.maxPrice) {
          maxPriceMatch = trip.price <= filters.maxPrice;
        }

        if (filters.startDate) {
          startDateMatch = trip.startDate >= filters.startDate;
        }

        if (filters.endDate) {
          endDateMatch = trip.endDate <= filters.endDate;
        }

        return destinationMatch && minPriceMatch && maxPriceMatch && startDateMatch && endDateMatch;
      });

    });
  }
}
