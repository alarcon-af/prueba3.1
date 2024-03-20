import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import { ApiserviceService } from 'src/app/apiservice.service';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-estrato',
  templateUrl: './estrato.component.html',
  styleUrls: ['./estrato.component.css']
})
export class EstratoComponent {

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
      const canvasElement1 = document.getElementById('canvas1');
      const estratos = this.data.data.map((item: { estrato: any; }) => item.estrato);
      const estratosUnicos = [...new Set(estratos)];
      const cantidadesTotales = estratosUnicos.map(estrato => {
        return this.data.data.filter((item: { estrato: any; }) => item.estrato === estrato).length;
    });

      this.chart = new Chart('canvas1', {
        type: 'bar',
        data: {
          labels: estratosUnicos,
          datasets: [
            {
              label: 'Cantidad de usuarios por estrato',
              data: cantidadesTotales,
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
        type: 'pie',
        data: {
          labels: estratosUnicos,
          datasets: [
            {
              label: 'Cantidad de usuarios por estrato',
              data: cantidadesTotales,
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
