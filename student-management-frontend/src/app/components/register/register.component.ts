import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { RouterModule } from '@angular/router'; // ✅ Import RouterModule


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [CommonModule,FormsModule,RouterModule],
  standalone:true
  
})
export class RegisterComponent {
  user: User = new User();  // Initialize the user model

  constructor(private userService: UserService) {}
  onSubmit() {
    console.log('Login form submitted');
    this.register();  // Call the register method when form is submitted
    
    }

  // Register function to call the UserService for registration
  register() {
    this.userService.register(this.user).subscribe(
      response => {
        alert('Registration successful!');
        // Optionally redirect to login or other page
      },
      error => {
        alert('Error registering user!');
        console.error('Registration error: ', error);
      }
    );
  }
}
