import { Component } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {

  showForgot = false;

  constructor() { }
  openForgotPassword() {
    this.showForgot = true
  }
  openForgotPasswordOtp() {
    this.showForgot = false
  }


}
