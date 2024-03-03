import { Component } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, user } from '@angular/fire/auth';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})

export class SigninComponent {
  constructor(
    private auth: Auth,
    private router: Router
  ) { }

  async loginWithGoogle() {
    try {
      const result = await signInWithPopup(this.auth, new GoogleAuthProvider());
      console.log(result.user);
      localStorage.setItem('user', JSON.stringify(result.user));
      this.router.navigate(['/']);
    } catch (error) {
      alert("Check your google account and try again.")
    }
  }

  async login(email: string, password: string) {
    try {
      const result = await signInWithEmailAndPassword(this.auth, email, password)
        .then((result) => {
          console.log(result.user);

          localStorage.setItem('user', JSON.stringify(result.user));
          this.router.navigate(['/']);

        })
    }
    catch (error) {
      alert("Check your email and password and try again.")
    }
  }

}


