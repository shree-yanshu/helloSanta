import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackorderspageComponent } from './trackorderspage.component';

describe('TrackorderspageComponent', () => {
  let component: TrackorderspageComponent;
  let fixture: ComponentFixture<TrackorderspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackorderspageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackorderspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
