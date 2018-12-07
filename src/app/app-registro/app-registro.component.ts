import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {AppUserService} from '../shared/services/app-user.service';
import {User} from '../shared/model/user';
import {UsernameValidator} from '../shared/validators/username';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-app-registro',
  templateUrl: './app-registro.component.html',
  styleUrls: ['./app-registro.component.css']
})
export class AppRegistroComponent implements OnInit {

  registryForm: FormGroup;
  submitted = false;
  newuser: User;
  showRegistryNewUser = false;
  returnUrl: string;

  doRegistro(data: FormGroup) {
    this.submitted = true;

    // Se detiene aquí el formulario si es inválido
    if (this.registryForm.invalid) {
      return;
    } else {
      this.newuser = new User(this.formFields.username.value, this.formFields.email.value,
        this.formFields.password.value, this.formFields.repassword.value, new Date(this.formFields.birthdate.value).getTime());
    }

    this.appUserService.postUser(this.newuser).subscribe(response => {
      console.log('Nuevo usuario registrado correctamente.');

      this.toastrService.success('Usuario ' + this.newuser.username + ' registrado correctamente', 'Registro correcto!');

      this.router.navigateByUrl(this.returnUrl);
    }, error => {
      console.log('Error en alta de un nuevo usuario.');
      this.toastrService.success('Error en el alta de un nuevo usuario', 'Registro no realizado!');
      this.showRegistryNewUser = true;
      return;
    });
  }

  constructor(private fb: FormBuilder, private appUserService: AppUserService, private route: ActivatedRoute,
              private router: Router, private usernameValidator: UsernameValidator, private toastrService: ToastrService) {
  }

  ngOnInit() {
    this.registryForm = this.fb.group({
      username: ['', Validators.required, this.usernameValidator.checkUsername.bind(this.usernameValidator)],
      password: ['', Validators.required],
      repassword: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      birthdate: ['', ''],
      nospam: ['', [Validators.minLength(0), Validators.maxLength(0)]]
    });

    // return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['login'] || '/';

  }

  // Getter: Acceso a los campos de control del formulario
  get formFields() {
    return this.registryForm.controls;
  }

}
