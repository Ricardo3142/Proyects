import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//HTTP
import { withFetch } from '@angular/common/http';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';

//Material imports
import {MatButtonModule} from '@angular/material/button';
import {HomeComponent} from './components/home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { provideHotToastConfig  } from '@ngneat/hot-toast';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatMenuModule} from '@angular/material/menu'
import {HotToastService} from '@ngneat/hot-toast'




const MaterialComponents = [
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  ReactiveFormsModule
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LandingComponent,
    LoginComponent,
    SignUpComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    //HTTP
    HttpClientModule,
    //Components
    MaterialComponents,
  ],

  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideFirebaseApp(() => initializeApp({"projectId":"angular-sign-up-cec64","appId":"1:661228280224:web:7d2a5a332863137593acc5","storageBucket":"angular-sign-up-cec64.appspot.com","apiKey":"AIzaSyBulMP2t0g5Es_X5eGcq7afthpIftqq6CI","authDomain":"angular-sign-up-cec64.firebaseapp.com","messagingSenderId":"661228280224","measurementId":"G-553L4GQR8E"})),
    provideAuth(() => getAuth()),
    provideHotToastConfig(),
    provideAnimationsAsync()
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
