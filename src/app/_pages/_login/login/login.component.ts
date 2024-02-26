import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../_services/_authentications/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  loginform: any = FormGroup;
  loading = false;
  submitted = false;
  hide = true;
  get f() { return this.loginform.controls; }

  constructor(
    private auth: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    //private alertService: AlertService
  ) {
    if (this.auth.userValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.loginform = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }


  onSubmit() {
    debugger;
    this.submitted = true;
    // reset alerts on submit
    //this.alertService.clear();
    // stop here if form is invalid
    if (this.loginform.invalid) {
      return;
    }
    this.loading = true;
    debugger;
    this.auth.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe({
        next: () => {
          alert("Login Successfully!");
          // get return url from query parameters or default to home page
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/admin';
          this.router.navigateByUrl(returnUrl);
        },
        error: error => {
          console.log("error")
          ///.alertService.error(error);
          this.loading = false;
        }
      });
  }
}

