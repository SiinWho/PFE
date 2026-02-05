import { Component } from '@angular/core';
import {
  ApexNonAxisChartSeries,
  ApexChart,
  ApexPlotOptions,
  ApexFill,
  ApexStroke,
  ApexResponsive,
  NgApexchartsModule,
} from 'ng-apexcharts';
import { DropdownComponent } from '../../ui/dropdown/dropdown.component';
import { DropdownItemComponent } from '../../ui/dropdown/dropdown-item/dropdown-item.component';

@Component({
  selector: 'app-leave-request-status-chart',
  imports: [
    NgApexchartsModule,
    DropdownComponent,
    DropdownItemComponent
  ],
  templateUrl: './leave-request-status-chart.component.html',
})
export class LeaveRequestStatusChartComponent {
  public series: ApexNonAxisChartSeries = [64, 22, 14];
  public chart: ApexChart = {
    fontFamily: 'Outfit, sans-serif',
    type: 'donut',
    height: 330,
    sparkline: { enabled: true },
  };
  public plotOptions: ApexPlotOptions = {
    pie: {
      donut: {
        size: '65%',
        labels: {
          show: true,
          value: {
            fontSize: '24px',
            fontWeight: 600
          },
          total: {
            show: true,
            label: 'Total',
            fontSize: '14px'
          }
        }
      }
    }
  };
  public fill: ApexFill = {
    type: 'solid',
    colors: ['#16a34a', '#f59e0b', '#ef4444'],
  };
  public stroke: ApexStroke = {
    width: 2,
    colors: [this.getStrokeColor()],
    lineCap: 'round',
  };
  public labels: string[] = ['Approved', 'Pending', 'Rejected'];
  public colors: string[] = ['#16a34a', '#f59e0b', '#ef4444'];
  public responsive: ApexResponsive[] = [
    {
      breakpoint: 1280,
      options: {
        chart: { height: 300 },
        plotOptions: { pie: { donut: { size: '60%', labels: { value: { fontSize: '22px' }, total: { fontSize: '13px' } } } } },
      }
    },
    {
      breakpoint: 1024,
      options: {
        chart: { height: 280 },
        plotOptions: { pie: { donut: { size: '58%', labels: { value: { fontSize: '20px' }, total: { fontSize: '12px' } } } } },
      }
    },
    {
      breakpoint: 768,
      options: {
        chart: { height: 240 },
        plotOptions: { pie: { donut: { size: '55%', labels: { value: { fontSize: '18px' }, total: { fontSize: '12px' } } } } },
      }
    },
    {
      breakpoint: 640,
      options: {
        chart: { height: 220 },
        plotOptions: { pie: { donut: { size: '50%', labels: { value: { fontSize: '16px' }, total: { fontSize: '11px' } } } } },
      }
    }
  ];

  isOpen = false;

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  closeDropdown() {
    this.isOpen = false;
  }

  private getStrokeColor(): string {
    const isDark = document.documentElement.classList.contains('dark');
    return isDark ? '#111827' : '#FFFFFF';
  }
}
