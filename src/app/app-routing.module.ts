import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo} from '@angular/fire/auth-guard';

const redirectToLogin = () => redirectUnauthorizedTo(['Login']);
const redirectToHome = () => redirectLoggedInTo(['home']);

// Crea las rutas de los siguientes componentes y los exporta en el módulo AppRoutingModule asia appModule
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LandingComponent 
  },

  {
    path:'login',
    component: LoginComponent,
    ...canActivate(redirectToHome)
  },

  {
    path:'sign-up',
    component: SignUpComponent,
    ...canActivate(redirectToHome)

  },

  {
    path:'home',
    component: HomeComponent,
    ...canActivate(redirectToLogin)
  },
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
