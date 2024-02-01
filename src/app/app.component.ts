import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Auth } from './models/interface/auth';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'frontend-smart-soft';

  ngOnInit(): void {
    const auth: Auth | null = JSON.parse(localStorage.getItem('auth')!);
    if (!auth) localStorage.setItem('auth', JSON.stringify({ token: '', user: {} }))
  }
}
