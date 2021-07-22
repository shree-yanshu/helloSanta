import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourorderspageComponent } from './yourorderspage.component';

describe('YourorderspageComponent', () => {
  let component: YourorderspageComponent;
  let fixture: ComponentFixture<YourorderspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourorderspageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YourorderspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
