import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppReservarComponent } from './app-reservar.component';

describe('AppReservarComponent', () => {
  let component: AppReservarComponent;
  let fixture: ComponentFixture<AppReservarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppReservarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppReservarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
