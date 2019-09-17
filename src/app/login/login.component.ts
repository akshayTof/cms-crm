import { Component } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {Inject} from '@angular/core';

@Component ({
   selector: 'app-login',
   encapsulation: ViewEncapsulation.None,
   templateUrl: '/login.component.html',
   styleUrls: ['/login.component.css']
})
export class LoginComponent  {
    messageForm: FormGroup;
    submitted = false;
    success = false;

    constructor(@Inject(FormBuilder) private formBuilder: FormBuilder,  @Inject(Router) private router: Router) {
        this.messageForm = this.formBuilder.group({
          email: ['', Validators.required],
          password: ['', Validators.required]
        });
      }

    login() {
        this.router.navigateByUrl('dashboard/home');
    }

    onSubmit() {
        this.submitted = true;
        if (this.messageForm.invalid) {
          return;
        }

        if (this.messageForm.controls.email.value === 'admin@tof.com' && this.messageForm.controls.password.value === 'qwerty') {
          console.log(this.messageForm.controls.email.value);
          this.success = true;
          this.router.navigateByUrl('artist');
        } else {
          return;
        }
      }
}
