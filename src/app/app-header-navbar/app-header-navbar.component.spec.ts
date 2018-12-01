import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHeaderNavbarComponent } from './app-header-navbar.component';

describe('AppHeaderNavbarComponent', () => {
  let component: AppHeaderNavbarComponent;
  let fixture: ComponentFixture<AppHeaderNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppHeaderNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppHeaderNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
