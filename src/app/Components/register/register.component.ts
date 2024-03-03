import { Component } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {


  constructor(
    private auth: Auth,
    private router: Router) { }

  async register(email: string, password: string) {
    try {
      const result = await createUserWithEmailAndPassword(this.auth, email, password)
        .then((result) => {


          console.log(result.user);
          localStorage.setItem('user', JSON.stringify(result.user));
          this.router.navigate(['/']);

        })

    } catch (error) {
      alert("This mail Is Already Registered, Please Login");
    }
  }


}

