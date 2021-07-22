import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandmadeartworkspageComponent } from './handmadeartworkspage.component';

describe('HandmadeartworkspageComponent', () => {
  let component: HandmadeartworkspageComponent;
  let fixture: ComponentFixture<HandmadeartworkspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandmadeartworkspageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HandmadeartworkspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
