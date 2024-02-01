import { Component, OnInit, inject } from '@angular/core';
import { Auth, LoginData } from '../../models/interface/auth';
import { FormControl, FormGroupDirective, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../controllers/auth/auth.service';
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'
import {
  MatSnackBarRef,
} from '@angular/material/snack-bar';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required, Validators.min(4), Validators.max(22)]);
  matcher = new MyErrorStateMatcher();
  message: string = '';
  open: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    const auth: Auth = JSON.parse(localStorage.getItem('auth')!);
    const token: string = auth!.token;
    if (token !== '') window.location.href = '/dashboard'
  }

  handleLogin(): void {
    const data: LoginData = { email: this.emailFormControl.value as string, password: this.passwordFormControl.value as string }
    this.authService.login(data)
      .subscribe((response) => {
        localStorage.setItem('auth', JSON.stringify(response.data))
        this.message = 'Bienvenido de nuevo!!!'
        this.open = true;

        setTimeout(() => this.open = false, 2000)
        setTimeout(() => window.location.href = '/dashboard', 2500)
      })
  }
}
