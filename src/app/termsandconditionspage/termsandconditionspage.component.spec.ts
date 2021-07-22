import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsandconditionspageComponent } from './termsandconditionspage.component';

describe('TermsandconditionspageComponent', () => {
  let component: TermsandconditionspageComponent;
  let fixture: ComponentFixture<TermsandconditionspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TermsandconditionspageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsandconditionspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
