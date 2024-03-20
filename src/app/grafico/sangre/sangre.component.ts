import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import { ApiserviceService } from 'src/app/apiservice.service';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-sangre',
  templateUrl: './sangre.component.html',
  styleUrls: ['./sangre.component.css']
})
export class SangreComponent {

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
      const tipos = this.data.data.map((item: { sangre: any; }) => item.sangre);
      const tiposUnicos = [...new Set(tipos)];
      const cantidadesTotales = tiposUnicos.map(sangre => {
        return this.data.data.filter((item: { sangre: any; }) => item.sangre === sangre).length;
    });

      this.chart = new Chart('canvas1', {
        type: 'bar',
        data: {
          labels: tiposUnicos,
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
          labels: tiposUnicos,
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
