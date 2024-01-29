import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from 'src/app/helpers/Validators';
import { AuthService } from 'src/app/services/authSevice/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  focus;
  focus1;
  focus2;
  login_form: FormGroup;
  customValidators = CustomValidators;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.login_form = this.fb.group({
      username: ['' ,Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  get username() { return this.login_form.get('username'); }
  get password() { return this.login_form.get('password'); }
  login() {
    const user = {
      username: this.username.value,
      password: this.password.value,
    };

    if (this.login_form.invalid) {
      console.log('Formulario inválido');
      return;
    }

    this.authService.loginUser(user).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/']);
      }
    );
  }
}