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
  chart: any = [];
  data: any;
  constructor(private _apiserv:ApiserviceService, public auth: AuthService) {}

  ngOnInit() {

    this._apiserv.getdata().subscribe(res=>{
      this.data=res;
      console.log('Datos obtenidos:', this.data);
      this.createChart();
    },
    (error) => {
      console.error('Error al obtener datos:', error);
    })

    

  }

  createChart() {
    if (this.data) {
      const canvasElement = document.getElementById('canvas');
      const labels = this.data.data.map((item: { name: any; }) => item.name);
      const data = this.data.data.map((item: { written: any; }) => item.written);

      this.chart = new Chart('canvas', {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label: '# of Votes',
              data: data,
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }
}
