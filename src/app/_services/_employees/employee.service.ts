import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { Customer } from '../../_models/customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  getAllCustomer() {
    return this.http.get<Customer[]>(`${environment.apiUrl}/api`);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`http://localhost:8080/${id}`);
  }


}
