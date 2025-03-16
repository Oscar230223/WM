import { Component } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {
  visitsChart: any;
  stateChart: any;
  genderChart: any;

  constructor() {}

  ionViewWillEnter() {
    this.createVisitsChart();
    this.createStateChart();
    this.createGenderChart();
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
      type: 'bar',  // 📊 GRÁFICO DE BARRAS EN VEZ DE LÍNEAS
      data: {
        labels: ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'],
        datasets: [{
          label: 'Visitas por Hora',
          data: [5, 10, 7, 15, 12, 20, 25, 18, 22, 30, 35, 40],
          backgroundColor: 'rgba(255, 99, 132, 0.6)',  // Color de barras
          borderColor: 'rgba(255, 99, 132, 1)',
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

  createStateChart() {
    const ctx = document.getElementById('stateChart') as HTMLCanvasElement;
    if (!ctx) return;

    if (this.stateChart) {
      this.stateChart.destroy();
    }

    this.stateChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Chihuahua', 'Veracruz', 'Guadalajara', 'Chiapas'],
        datasets: [{
          data: [25, 20, 30, 25],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }

  createGenderChart() {
    const ctx = document.getElementById('genderChart') as HTMLCanvasElement;
    if (!ctx) return;

    if (this.genderChart) {
      this.genderChart.destroy();
    }

    this.genderChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Hombres', 'Mujeres'],
        datasets: [{
          data: [55, 45],
          backgroundColor: ['#FFC107', '#2196F3']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }

  destroyCharts() {
    if (this.visitsChart) {
      this.visitsChart.destroy();
      this.visitsChart = null;
    }
    if (this.stateChart) {
      this.stateChart.destroy();
      this.stateChart = null;
    }
    if (this.genderChart) {
      this.genderChart.destroy();
      this.genderChart = null;
    }
  }
}
