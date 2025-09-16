import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // ✅ Import RouterModule


@Component({
  selector: 'app-navbar',
  standalone: true,  // Declare this component as standalone
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [CommonModule,FormsModule,RouterModule],
})
export class NavbarComponent {
  // Component logic here
}
