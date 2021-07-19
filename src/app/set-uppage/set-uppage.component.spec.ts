import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetUppageComponent } from './set-uppage.component';

describe('SetUppageComponent', () => {
  let component: SetUppageComponent;
  let fixture: ComponentFixture<SetUppageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetUppageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetUppageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
