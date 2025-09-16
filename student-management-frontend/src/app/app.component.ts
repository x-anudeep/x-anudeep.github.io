import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component'; // Import NavbarComponent
import { RouterOutlet } from '@angular/router'; // Import RouterOutlet for routing
import { FooterComponent } from './components/footer/footer.component';
@Component({
  selector: 'app-root',
  standalone: true, // Indicating this component is standalone
  imports: [NavbarComponent, RouterOutlet,FooterComponent],  // Declare the imported components
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Your App Name';
}
