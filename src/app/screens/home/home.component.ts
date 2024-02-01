import { Component, OnInit } from '@angular/core';
import { Auth } from '../../models/interface/auth';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    const auth: Auth = JSON.parse(localStorage.getItem('auth')!);
    const token: string = auth!.token;
    if (token === '') window.location.href = '/login'
  }
}
