import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeserveComponent } from './weserve.component';

describe('WeserveComponent', () => {
  let component: WeserveComponent;
  let fixture: ComponentFixture<WeserveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeserveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeserveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
