import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AppAuthenticationService} from '../shared/services/app-authentication.service';


@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.css']
})
export class AppLoginComponent implements OnInit {

  loginform: FormGroup;
  showLoginAlertAuthentication = false;
  showLoginAlertUsuario = false;
  submitted = false;

  doLogin(data: FormGroup) {

    this.submitted = true;

    console.log(this.formFields.nospam.value);

    // Se detiene aquí el formulario si es inválido
    if (this.loginform.invalid) {
      return;
    }

    this.appAuthenticationService.login(this.formFields.username.value, this.formFields.password.value)
      .subscribe(response => {
        sessionStorage.setItem('CURRENT_USER', this.formFields.username.value);
        console.log('Login realizado con éxito. Usuario ' + this.formFields.username.value + ' logado correctamente');
        this.router.navigateByUrl('home');
      }, error => {
        console.log('Error login. Usuario ' + this.formFields.username.value + ' no registrado');
        this.showLoginAlertUsuario = true;
        this.submitted = false;
        return;
      });
  }

  constructor(private fb: FormBuilder, private appAuthenticationService: AppAuthenticationService, private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.loginform = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      nospam: ['', [Validators.minLength(0), Validators.maxLength(0)]]
    });

    // reset login status
    this.appAuthenticationService.logout();

  }

  // Getter: Acceso a los campos de control del formulario
  get formFields() {
    return this.loginform.controls;
  }


}
