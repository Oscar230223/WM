import { Component } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
  visitsChart: any;

  constructor() {}

  ionViewWillEnter() {
    this.createVisitsChart();
  }

  ionViewWillLeave() {
    this.destroyCharts();
  }

  createVisitsChart() {
    const ctx = document.getElementById('visitsChart') as HTMLCanvasElement;
    if (!ctx) return;

    if (this.visitsChart) {
      this.visitsChart.destroy();
    }

    this.visitsChart = new Chart(ctx, {
      type: 'bar',  // 📊 CAMBIAMOS A GRÁFICO DE BARRAS
      data: {
        labels: ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'],
        datasets: [{
          label: 'Visitas por Hora',
          data: [5, 10, 7, 15, 12, 20, 25, 18, 22, 30, 35, 40],
          backgroundColor: 'rgba(75, 192, 192, 0.6)',  // Color de las barras
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  destroyCharts() {
    if (this.visitsChart) {
      this.visitsChart.destroy();
      this.visitsChart = null;
    }
  }
}
