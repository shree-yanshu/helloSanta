import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourcartpageComponent } from './yourcartpage.component';

describe('YourcartpageComponent', () => {
  let component: YourcartpageComponent;
  let fixture: ComponentFixture<YourcartpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourcartpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YourcartpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
