import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvHistoryComponent } from './cv-history.component';

describe('CvHistoryComponent', () => {
  let component: CvHistoryComponent;
  let fixture: ComponentFixture<CvHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CvHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
