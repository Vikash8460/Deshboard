import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './_pages/_login/login/login.component';
import { ForgotPasswordComponent } from './_pages/_forgot-password/forgot-password/forgot-password.component';
import { SignupComponent } from './_pages/_signup/signup/signup.component';
import { NotFoundComponent } from './_pages/_not-found/not-found/not-found.component';
import { authGuard } from './_helpers/_guards/auth.guard';
import { ServerErrorComponent } from './_pages/server-error/server-error.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'signup', component: SignupComponent },

  {
    path: 'admin',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./_modules/admin/admin.module').then((m) => m.AdminModule),
  },

  { path: '500', component: ServerErrorComponent },
  //{ path: '**', redirectTo: '/500' },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
