// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CitymasterComponent } from './citymaster/citymaster.component';
import { UpdateCompComponent } from './update-comp/update-comp.component';
import {RegisterComponent} from './register/register.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { ForgotComponent } from './forgot/forgot.component';

const routes: Routes = [
  { path: '', redirectTo: '/reg', pathMatch: 'full' }, 
  { path: 'app', component: AppComponent },
  { path: 'city', component: CitymasterComponent },
  {path : 'updt', component:UpdateCompComponent},
  {path : 'reg', component:RegisterComponent},
  {path : 'log', component:LoginUserComponent},
  {path : 'forgot', component:ForgotComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
