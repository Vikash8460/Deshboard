import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.scss'
})
export class AddEmployeeComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // addCustomerForm!: FormGroup;
  // submitted = false;
  // get f() { return this.addCustomerForm.controls; }

  // constructor(
  //   private formBuilder: FormBuilder,
  //   private http: HttpClient
  // ) { }
  // ngOnInit(): void {
  //   this.addCustomerForm = this.formBuilder.group({
  //     firstname: ['', Validators.required],
  //     lastname: ['', Validators.required],
  //     email: ['', [Validators.required, Validators.email]],
  //     moblieno: ['', [Validators.required, Validators.minLength(4),
  //     Validators.maxLength(20), Validators.pattern(/^\d{10}$/)]],
  //     city: ['', Validators.required],
  //     pincode: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(6)]],
  //     text: ['', Validators.required],
  //     date: ['', Validators.required]
  //   });

  // }

  // onSubmit(): void {
  //   this.submitted = true;

  //   if (this.addCustomerForm.invalid) {
  //     return;
  //   }
  //   if (this.addCustomerForm.valid) {
  //     this.http.post('http://localhost:8080/api/addCustomer', this.addCustomerForm.value).subscribe(
  //       response => {
  //         console.log('Success!', response);
  //         alert('Customer added successfully');
  //       },
  //       error => console.error('Error!', error)
  //     );
  //   } else {
  //     console.log('Form Not Valid');
  //   }
  // }
}