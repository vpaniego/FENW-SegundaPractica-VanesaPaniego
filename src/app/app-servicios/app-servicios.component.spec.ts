import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppServiciosComponent } from './app-servicios.component';

describe('AppServiciosComponent', () => {
  let component: AppServiciosComponent;
  let fixture: ComponentFixture<AppServiciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppServiciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
