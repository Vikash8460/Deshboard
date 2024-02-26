import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../../_components/dashboard/dashboard.component';
import { HeaderComponent } from '../../_layouts/header/header.component';
import { LayoutComponent } from '../../_layouts/layout/layout.component';
import { AddEmployeeComponent } from '../../_components/employees/add-employee/add-employee.component';
import { EmployeeTableComponent } from '../../_components/employees/employee-table/employee-table.component';
import { ProfileComponent } from '../../_components/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent },
      {path: 'header', component: HeaderComponent },
      {path: 'add-employee', component: AddEmployeeComponent },
      {path: 'employee-table', component: EmployeeTableComponent },
      {path: 'profile', component: ProfileComponent },
     
      { path: '', redirectTo: '/admin/dashboard', pathMatch: 'full' },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
