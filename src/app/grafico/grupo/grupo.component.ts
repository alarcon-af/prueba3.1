import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import { ApiserviceService } from 'src/app/apiservice.service';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.css']
})
export class GrupoComponent {

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
      const grupos = this.data.data.map((item: { grupo: any; }) => item.grupo);
      const gruposUnicos = [...new Set(grupos)];
      const cantidadesTotales = gruposUnicos.map(grupo => {
        return this.data.data.filter((item: { grupo: any; }) => item.grupo === grupo).length;
    });

      this.chart = new Chart('canvas1', {
        type: 'bar',
        data: {
          labels: gruposUnicos,
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
          labels: gruposUnicos,
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
