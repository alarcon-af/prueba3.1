import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import { ApiserviceService } from 'src/app/apiservice.service';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-localidad',
  templateUrl: './localidad.component.html',
  styleUrls: ['./localidad.component.css']
})
export class LocalidadComponent {

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
      const localidades = this.data.data.map((item: { localidad: any; }) => item.localidad);
      const localidadesUnicas = [...new Set(localidades)];
      const cantidadesTotales = localidadesUnicas.map(localidad => {
        return this.data.data.filter((item: { localidad: any; }) => item.localidad === localidad).length;
    });

      this.chart = new Chart('canvas1', {
        type: 'bar',
        data: {
          labels: localidadesUnicas,
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
          labels: localidadesUnicas,
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
