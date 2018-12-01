import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppInstalacionesComponent } from './app-instalaciones.component';

describe('AppInstalacionesComponent', () => {
  let component: AppInstalacionesComponent;
  let fixture: ComponentFixture<AppInstalacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppInstalacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppInstalacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
