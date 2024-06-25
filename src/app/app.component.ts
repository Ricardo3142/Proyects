import { Component } from '@angular/core';
import { AuthenticationService } from './serivces/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(public authService: AuthenticationService, private router: Router){
  }

  logout(){
    this.authService.logout().subscribe(() =>{
      this.router.navigate(['']);
    });
  }
}
