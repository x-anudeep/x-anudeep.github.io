import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, FormsModule, RouterModule],
  standalone: true,
})
export class LoginComponent {
  // Define the 'user' object to bind to the form fields
  user = {
    username: '',
    password: '',
    email: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    if (this.user.username && this.user.password && this.user.email) {
      this.authService.login(this.user.username, this.user.password, this.user.email).subscribe({
        next: (response) => {
          console.log('Login successful', response);
          this.router.navigate(['/students']);
        },
        error: (error) => {
          console.error('Login failed', error);
          alert('Login failed. Please check your credentials.');
        }
      });
    } else {
      alert('Please fill in all fields');
    }
  }

  onSubmit() {
    console.log('Login form submitted');
  }
}
