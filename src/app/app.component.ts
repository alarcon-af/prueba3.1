import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import { ApiserviceService } from './apiservice.service';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prueba3.1';
}
