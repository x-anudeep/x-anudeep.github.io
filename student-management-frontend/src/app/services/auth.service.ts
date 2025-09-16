import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; // Import this!
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl; // Change to your actual backend URL

  constructor(private http: HttpClient) {}

  
  login(username: string, password: string, email: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, {
      username,
      password,
      email
    });
  }
  
  
  register(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/register`, data);
  }
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');
  }
}
