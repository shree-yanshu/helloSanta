import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalartworkspageComponent } from './digitalartworkspage.component';

describe('DigitalartworkspageComponent', () => {
  let component: DigitalartworkspageComponent;
  let fixture: ComponentFixture<DigitalartworkspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalartworkspageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalartworkspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
