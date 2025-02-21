import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../serivces/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  user$ = this.authService.currentUser$;

  constructor(private authService: AuthenticationService){}
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


}
