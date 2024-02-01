import { Injectable } from '@angular/core';
import { LoginData } from '../../models/interface/auth';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl: string;

  constructor(private http: HttpClient) { 
    this.baseUrl = environment.baseUrl;
  }

  login(data: LoginData): Observable<any> {
    return this.http.post(`http://localhost:3000/api/auth/login`, data);
  }
}
