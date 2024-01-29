import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from 'src/app/helpers/Validators';
import { AuthService } from 'src/app/services/authSevice/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  isColapsed = true;
  focus;
  focus1;
  focus2;
  focus3;
  focus4;
  form: FormGroup;
  customValidators = CustomValidators;
  

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('register-page');

    this.form = this.fb.group({
      username: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [Validators.required, Validators.pattern(/(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8}$/)],
      ],
    });
  }
    
    register() {
      const user = {
        username: this.username.value,
        email: this.email.value,
        password: this.password.value,
        first_name: this.first_name.value,
        last_name: this.last_name.value,
      };

      if (this.form.invalid) {
        console.log('Formulario inválido');
        return;
      }

      this.authService.registerUser(user).subscribe(
        (response) => {
          console.log('Usuario registrado con éxito', response);
          this.router.navigate(['/login']);
        }
      );

  }
get username() { return this.form.get('username'); }
get first_name() { return this.form.get('first_name'); }
get last_name() { return this.form.get('last_name'); }
get email() { return this.form.get('email'); }
get password() { return this.form.get('password'); }




ngOnDestroy() {
  var body = document.getElementsByTagName('body')[0];
  body.classList.remove('register-page');
}

}