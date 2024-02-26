import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatTreeModule} from '@angular/material/tree';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from '../../_components/dashboard/dashboard.component';
import { AddEmployeeComponent } from '../../_components/employees/add-employee/add-employee.component';
import { EmployeeTableComponent } from '../../_components/employees/employee-table/employee-table.component';
import { FooterComponent } from '../../_layouts/footer/footer.component';
import { HeaderComponent } from '../../_layouts/header/header.component';
import { LayoutComponent } from '../../_layouts/layout/layout.component';
import { SidenavComponent } from '../../_layouts/sidenav/sidenav.component';
import { ProfileComponent } from '../../_components/profile/profile.component';


@NgModule({
  declarations: [
    SidenavComponent,
    FooterComponent,
    HeaderComponent,
    LayoutComponent,
    DashboardComponent,
    AddEmployeeComponent,
    EmployeeTableComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatGridListModule,
    MatDialogModule,
    MatExpansionModule,  
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatTreeModule,
    MatCheckboxModule,
    MatProgressBarModule,
    
  ]
})
export class AdminModule { }
