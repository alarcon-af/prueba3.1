import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import { ApiserviceService } from 'src/app/apiservice.service';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-edad',
  templateUrl: './edad.component.html',
  styleUrls: ['./edad.component.css']
})
export class EdadComponent {

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
      const labels = this.data.data.map((item: { nombre: any; }) => item.nombre);
      const data = this.data.data.map((item: { edad: any; }) => item.edad);

      this.chart = new Chart('canvas1', {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label: 'Edad de los usuarios',
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

      this.chart = new Chart('canvas2', {
        type: 'line',
        data: {
          labels: labels,
          datasets: [
            {
              label: 'Edad de los usuarios',
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
