import { Component } from '@angular/core';
import { Auth,signOut } from '@angular/fire/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signout',
  standalone: true,
  imports: [],
  templateUrl: './signout.component.html',
  styleUrl: './signout.component.css'
})
export class SignoutComponent {
  constructor(
    private auth: Auth,
    private router: Router
  ) {}
  logout(){
        signOut(this.auth);
        localStorage.removeItem('user');
        this.router.navigateByUrl('/signin');
      }
}
