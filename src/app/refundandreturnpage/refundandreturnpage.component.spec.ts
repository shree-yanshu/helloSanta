import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundandreturnpageComponent } from './refundandreturnpage.component';

describe('RefundandreturnpageComponent', () => {
  let component: RefundandreturnpageComponent;
  let fixture: ComponentFixture<RefundandreturnpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefundandreturnpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundandreturnpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
