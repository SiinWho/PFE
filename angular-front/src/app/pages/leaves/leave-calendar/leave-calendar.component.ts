import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule, KeyValuePipe } from '@angular/common';
import { FullCalendarComponent, FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions, EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { PageBreadcrumbComponent } from '../../../shared/components/common/page-breadcrumb/page-breadcrumb.component';
import { ComponentCardComponent } from '../../../shared/components/common/component-card/component-card.component';

@Component({
  selector: 'app-leave-calendar',
  standalone: true,
  imports: [CommonModule, FullCalendarModule, PageBreadcrumbComponent, ComponentCardComponent],
  templateUrl: './leave-calendar.component.html',
  styleUrl: './leave-calendar.component.css',
})
export class LeaveCalendarComponent implements OnInit {
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next',
      center: 'title',
      right: 'dayGridMonth'
    },
    events: [
      { title: 'Ahmed - Annual', start: '2024-03-15', end: '2024-03-21', extendedProps: { type: 'Annual' } },
      { title: 'Sara - Sick', start: '2024-03-10', end: '2024-03-13', extendedProps: { type: 'Sick' } }
    ],
    eventContent: (arg) => this.renderEventContent(arg)
  };

  ngOnInit(): void { }

  renderEventContent(eventInfo: any) {
    const type = eventInfo.event.extendedProps['type'];
    let colorClass = 'fc-bg-primary';
    if (type === 'Sick') colorClass = 'fc-bg-warning';

    return {
      html: `
        <div class="event-fc-color flex fc-event-main ${colorClass} p-1 rounded-sm overflow-hidden">
          <div class="fc-event-title text-xs truncate">${eventInfo.event.title}</div>
        </div>
      `
    };
  }
}
