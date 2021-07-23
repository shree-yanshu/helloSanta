import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyagainpageComponent } from './buyagainpage.component';

describe('BuyagainpageComponent', () => {
  let component: BuyagainpageComponent;
  let fixture: ComponentFixture<BuyagainpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyagainpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyagainpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
