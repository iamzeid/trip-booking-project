import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TripsService {
    private apiUrl = 'http://localhost:5000/trips';

    constructor(private http: HttpClient) { }

    getTrips(): Observable<any> {
        return this.http.get<any>(this.apiUrl);
    }
}