import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, filter, map, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class LikesService {
    private apiUrl = 'http://localhost:5000';

    constructor(private http: HttpClient) { }

    // Get all liked trips
    getLikedTrips(userId: number): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/trips?likedBy=${userId}`);
    }



}


