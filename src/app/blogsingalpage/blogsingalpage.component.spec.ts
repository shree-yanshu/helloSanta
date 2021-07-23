import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsingalpageComponent } from './blogsingalpage.component';

describe('BlogsingalpageComponent', () => {
  let component: BlogsingalpageComponent;
  let fixture: ComponentFixture<BlogsingalpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogsingalpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogsingalpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
