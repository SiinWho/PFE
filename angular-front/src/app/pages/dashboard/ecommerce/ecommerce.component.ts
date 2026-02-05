import { Component } from '@angular/core';
import { EcommerceMetricsComponent } from '../../../shared/components/ecommerce/ecommerce-metrics/ecommerce-metrics.component';
import { EmployeesByDepartmentChartComponent } from '../../../shared/components/ecommerce/employees-by-department-chart/employees-by-department-chart.component';
import { LeaveRequestStatusChartComponent } from '../../../shared/components/ecommerce/leave-request-status-chart/leave-request-status-chart.component';
import { LeaveRequestsOverTimeChartComponent } from '../../../shared/components/ecommerce/leave-requests-over-time-chart/leave-requests-over-time-chart.component';
import { DemographicCardComponent } from '../../../shared/components/ecommerce/demographic-card/demographic-card.component';
import { RecentOrdersComponent } from '../../../shared/components/ecommerce/recent-orders/recent-orders.component';

@Component({
  selector: 'app-ecommerce',
  imports: [
    EcommerceMetricsComponent,
    EmployeesByDepartmentChartComponent,
    LeaveRequestStatusChartComponent,
    LeaveRequestsOverTimeChartComponent,
    DemographicCardComponent,
    RecentOrdersComponent,
  ],
  templateUrl: './ecommerce.component.html',
})
export class EcommerceComponent {}
