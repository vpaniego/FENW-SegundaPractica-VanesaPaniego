import {Injectable} from '@angular/core';
import {FormControl} from '@angular/forms';
import {AppUserService} from '../services/app-user.service';

@Injectable()
export class UsernameValidator {

  debouncer: any;

  constructor(public userService: AppUserService) {

  }

  checkUsername(control: FormControl): any {

    console.log('checkUsername');

    clearTimeout(this.debouncer);

    return new Promise(resolve => {

      this.debouncer = setTimeout(() => {

        this.userService.getUserByUsername(control.value).subscribe(
          (res) => {
            if (res.ok) {
              resolve({'usernameInUse': true});
            }
          },
          (err) => {
            resolve(null);
          });

      }, 1000);

    });
  }

}
