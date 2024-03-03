import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-payment-successful',
  standalone: true,
  imports: [],
  templateUrl: './payment-successful.component.html',
  styleUrl: './payment-successful.component.css'
})
export class PaymentSuccessfulComponent {
  constructor(private router: Router) { }

  navigateToBookedTrips(): void {
    console.log('Navigating to booked-trips');
    this.router.navigate(['/booked-trips']);
  }
  ngOnInit(): void {}
}
