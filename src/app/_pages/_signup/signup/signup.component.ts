import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../_services/_authentications/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent implements OnInit {

  signupform: any = FormGroup;
  loading = false;
  submitted = false;
  hide = true;
  get f() { return this.signupform.controls; }


  constructor(
    private auth: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.signupform = this.formBuilder.group({
      userId: ['', [Validators.required, Validators.minLength(6)]],
      mobile: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(12), Validators.pattern('^[0-9]*$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
    });

  }

  onSubmit() {
    debugger;
    this.submitted = true;

    // reset alert on submit
    // this.alertService.clear();

    // stop here if form is invalid
    if (this.signupform.invalid) {
      return;
    }

    this.loading = true;
    debugger;
    this.auth.signup(this.signupform.value).pipe(first()).subscribe({
      next: () => {
        // this.alertService.success('Registration successful', true);
        alert("Signup successfully");
        this.router.navigate(['/login']);
      },
      error: error => {
        //this.alertService.error(error);
        this.loading = false;
      }
    });
  }

}


