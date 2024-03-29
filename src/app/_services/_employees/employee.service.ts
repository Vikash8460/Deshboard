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

  addEmployee(data: any): Observable<any> {
    return this.http.post('http://localhost:3000/employees', data);
  }

  getAllEmployee() {
    return this.http.get<Customer[]>(`${environment.apiUrl}/customer`);
}

updateEmployee(id: number, data: any): Observable<any> {
  return this.http.put(`http://localhost:3000/customer/${id}`, data);
}


  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`http://localhost:8080/${id}`);
  }


}
