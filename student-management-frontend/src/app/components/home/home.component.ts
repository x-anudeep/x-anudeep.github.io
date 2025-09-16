import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // ✅ Import RouterModule

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [CommonModule,FormsModule,RouterModule],
  styleUrls: ['./home.component.css'],
  standalone: true
})
export class HomeComponent {}
