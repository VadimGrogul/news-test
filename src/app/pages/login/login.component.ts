import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Params, Router } from "@angular/router";

import { AuthService } from "../../services/auth.service";
import { AlertMessage, UserAuth } from "../../interfaces";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public authForm: FormGroup;
  public message: AlertMessage;
  public isShowMessage = false;

  constructor(private router: Router,
              private auth: AuthService,
              private activatedRoute: ActivatedRoute
              ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      if (params['authFail']) {
        this.isShowMessage = true;
        this.message = {
          type: 'light',
          message: 'You need to Log In to continue.'
        };

        setTimeout(() => {
          this.isShowMessage = false;
        }, 5000)
      }
    })

    this.authForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      confirmPassword: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
        this.confirmPassword.bind(this)
      ])
    })
  }

  confirmPassword(control: FormControl) {
    if (!control.value) {
      return;
    }

    if (control.value === this.authForm.get('password').value) {
      return null;
    } else {
      return {
        confirmPassword: true
      }
    }
  }

  submit() {
    if (this.authForm.invalid) {
      return;
    }

    this.auth.getUserData()
      .subscribe((res: UserAuth) => {
        if (this.authForm.value.name !== res.name || +this.authForm.value.password !== +res.password) {
          this.isShowMessage = true;
            this.message = {
              type: 'danger',
              message: 'User name or password is incorrect.'
            };

            setTimeout(() => {
              this.isShowMessage = false;
            }, 5000)
            return;
        } else {
          this.auth.login();
          this.router.navigate(['/'])
        }
      })
  }

}
