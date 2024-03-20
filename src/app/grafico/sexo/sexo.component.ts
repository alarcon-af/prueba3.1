import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import { ApiserviceService } from 'src/app/apiservice.service';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-sexo',
  templateUrl: './sexo.component.html',
  styleUrls: ['./sexo.component.css']
})
export class SexoComponent {

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
      const sexos = this.data.data.map((item: { sexo: any; }) => item.sexo);
      const sexosUnicos = [...new Set(sexos)];
      const cantidadesTotales = sexosUnicos.map(sexo => {
        return this.data.data.filter((item: { sexo: any; }) => item.sexo === sexo).length;
    });

      this.chart = new Chart('canvas1', {
        type: 'bar',
        data: {
          labels: sexosUnicos,
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
          labels: sexosUnicos,
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
