import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import flatpickr from 'flatpickr';
import { Instance } from 'flatpickr/dist/types/instance';
import { NgApexchartsModule } from 'ng-apexcharts';

import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexGrid,
  ApexLegend,
  ApexMarkers,
  ApexStroke,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis,
} from 'ng-apexcharts';
import { ChartTabComponent } from '../../common/chart-tab/chart-tab.component';

type TabOption = 'optionOne' | 'optionTwo' | 'optionThree';

@Component({
  selector: 'app-leave-requests-over-time-chart',
  imports: [NgApexchartsModule, ChartTabComponent],
  templateUrl: './leave-requests-over-time-chart.component.html',
})
export class LeaveRequestsOverTimeChartComponent implements AfterViewInit {
  @ViewChild('datepicker') datepicker!: ElementRef<HTMLInputElement>;

  ngAfterViewInit() {
    flatpickr(this.datepicker.nativeElement, {
      mode: 'range',
      static: true,
      monthSelectorType: 'static',
      dateFormat: 'M j',
      defaultDate: [new Date(Date.now() - 6 * 24 * 60 * 60 * 1000), new Date()],
      onReady: (selectedDates: Date[], dateStr: string, instance: Instance) => {
        (instance.element as HTMLInputElement).value = dateStr.replace('to', '-');
        const customClass = instance.element.getAttribute('data-class');
        instance.calendarContainer?.classList.add(customClass!);
      },
      onChange: (selectedDates: Date[], dateStr: string, instance: Instance) => {
        (instance.element as HTMLInputElement).value = dateStr.replace('to', '-');
      },
    });
  }

  public chart: ApexChart = {
    fontFamily: 'Outfit, sans-serif',
    height: 310,
    type: 'area',
    toolbar: { show: false },
  };

  public colors: string[] = ['#fb6514'];

  public stroke: ApexStroke = {
    curve: 'straight',
    width: [2],
  };

  public fill: ApexFill = {
    type: 'gradient',
    gradient: {
      opacityFrom: 0.55,
      opacityTo: 0,
    },
  };

  public markers: ApexMarkers = {
    size: 0,
    strokeColors: '#fff',
    strokeWidth: 2,
    hover: { size: 6 },
  };

  public grid: ApexGrid = {
    xaxis: { lines: { show: false } },
    yaxis: { lines: { show: true } },
  };

  public dataLabels: ApexDataLabels = { enabled: false };

  public tooltip: ApexTooltip = {
    enabled: true,
    x: { format: 'dd MMM yyyy' },
  };

  public xaxis: ApexXAxis = {
    type: 'category',
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    axisBorder: { show: false },
    axisTicks: { show: false },
    tooltip: { enabled: false },
  };

  public yaxis: ApexYAxis = {
    labels: {
      style: {
        fontSize: '12px',
        colors: ['#6B7280'],
      },
    },
    title: {
      text: '',
      style: { fontSize: '0px' },
    },
  };

  public legend: ApexLegend = {
    show: false,
    position: 'top',
    horizontalAlign: 'left',
  };

  public series: ApexAxisChartSeries = [
    { name: 'Leave Requests', data: [12, 9, 14, 18, 16, 20, 22, 19, 17, 15, 13, 11] },
  ];

  private monthlyData = [12, 9, 14, 18, 16, 20, 22, 19, 17, 15, 13, 11];
  private quarterlyCategories = ['Q1', 'Q2', 'Q3', 'Q4'];
  private quarterlyData = [35, 54, 60, 39];
  private yearlyCategories = ['2022', '2023', '2024', '2025'];
  private yearlyData = [160, 185, 210, 195];

  onTabChange(option: TabOption) {
    if (option === 'optionOne') {
      this.xaxis = { ...this.xaxis, categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] };
      this.series = [{ name: 'Leave Requests', data: this.monthlyData }];
    } else if (option === 'optionTwo') {
      this.xaxis = { ...this.xaxis, categories: this.quarterlyCategories };
      this.series = [{ name: 'Leave Requests', data: this.quarterlyData }];
    } else {
      this.xaxis = { ...this.xaxis, categories: this.yearlyCategories };
      this.series = [{ name: 'Leave Requests', data: this.yearlyData }];
    }
  }
}
