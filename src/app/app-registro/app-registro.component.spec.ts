import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRegistroComponent } from './app-registro.component';

describe('AppRegistroComponent', () => {
  let component: AppRegistroComponent;
  let fixture: ComponentFixture<AppRegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppRegistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
