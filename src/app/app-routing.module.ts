import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { CarEditComponent } from './components/car-edit/car-edit.component';
import { HomeComponent } from './components/home/home.component';
import { MaintenanceComponent } from './components/maintenance/maintenance.component';
import { TopComponent } from './components/top/top.component';
import { AuthGuard } from './guard/auth.guard';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'auth', component: AuthPageComponent, canActivate:[AuthGuard], children: [
    {path:'',canActivateChild:[AuthGuard], children:[{path: 'home', component: HomeComponent},
    {path: 'maintenance', component: MaintenanceComponent},
    {path: 'top', component: TopComponent},
    {path: 'car-add', component: CarAddComponent},
    {path: 'car-details/:id', component: CarDetailsComponent},
    {path: 'car-edit/:id', component: CarEditComponent} ] },

  ]},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
