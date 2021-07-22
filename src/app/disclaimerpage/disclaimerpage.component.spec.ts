import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisclaimerpageComponent } from './disclaimerpage.component';

describe('DisclaimerpageComponent', () => {
  let component: DisclaimerpageComponent;
  let fixture: ComponentFixture<DisclaimerpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisclaimerpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisclaimerpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
