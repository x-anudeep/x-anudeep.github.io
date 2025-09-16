import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8080/api/users/register';  // Adjust the URL based on your backend endpoint

  constructor(private http: HttpClient) { }

  // Register method to handle the registration
  register(user: User): Observable<any> {
    return this.http.post<any>(this.apiUrl, user);
  }
}
