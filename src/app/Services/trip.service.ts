import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, filter, map, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

export interface Trip {
  id: number;
  destination: string;
  startDate: string;
  endDate: string;
  price: number;
  remainingSeats: number;
  likedBy: number[];
  bookedBy: number[];
}
export interface Booking {
  id: number;
  userId: number;
  tripId: number;
  destination: string;
  startDate: string;
  endDate: string;
  price: number;
  bookedBy: number[];
}

@Injectable({
  providedIn: 'root'
})

export class TripService {
  private apiUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  getAllTrips(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/trips`);
  }

  getTrip(id: number): Observable<Trip> {
    return this.http.get<Trip>(`${this.apiUrl}/trips/${id}`);
  }

  updateTrip(trip: Trip): Observable<any> {
    return this.http.patch(`${this.apiUrl}/trips/${trip.id}`, trip);
  }

  checkUser() {
    return JSON.parse(localStorage.getItem("user") as string);
  }

  getBookedTrips(userId: number): Observable<Booking[]> {
    return this.http.get<Booking[]>(`${this.apiUrl}/bookings?userId=${userId}`);
  }

  addBooking(booking: Booking): Observable<Booking> {
    return this.http.post<Booking>(`${this.apiUrl}/bookings`, booking);
  }  
}


