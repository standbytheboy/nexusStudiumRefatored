import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartType, Chart, registerables } from 'chart.js'; // Importe Chart e registerables

@Component({
  selector: 'app-comparison-chart',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './comparison-chart.html',
  styleUrls: ['./comparison-chart.css']
})
export class ComparisonChartComponent {
  public lineChartType: ChartType = 'line';

  constructor() {
    // Registre todos os componentes do Chart.js
    Chart.register(...registerables);
  }

  public lineChartData: ChartConfiguration['data'] = {
    labels: ['Fev', '15 Fev', 'Mar', '15 Mar', '(Hoje)'],
    datasets: [
      {
        data: [0, 5, 10, 15, 20],
        label: 'Vídeos',
        borderColor: '#9747FF',
        backgroundColor: 'rgba(151, 71, 255, 0.1)',
        fill: 'origin',
        tension: 0.4,
      },
      {
        data: [2, 4, 8, 12, 16],
        label: 'Artigos',
        borderColor: '#3CFF3C',
        backgroundColor: 'rgba(60, 255, 60, 0.1)',
        fill: 'origin',
        tension: 0.4,
      },
      {
        data: [1, 3, 6, 9, 12],
        label: 'Exercícios',
        borderColor: '#FFD700',
        backgroundColor: 'rgba(255, 215, 0, 0.1)',
        fill: 'origin',
        tension: 0.4,
      }
    ]
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    elements: {
      point: {
        radius: 0
      }
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: { color: 'var(--text-secondary)' }
      },
      y: {
        border: {
          dash: [5, 5] 
        },
        grid: {
          color: 'rgba(176, 184, 196, 0.2)',
        },
        ticks: { color: 'var(--text-secondary)' },
        beginAtZero: true
      }
    },
    plugins: {
      legend: {
        position: 'top',
        align: 'end',
        labels: {
          color: 'var(--text-secondary)',
          usePointStyle: true,
          boxWidth: 8
        }
      }
    }
  };
}