import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMeterialControlsComponent } from './angular-meterial-controls.component';

describe('AngularMeterialControlsComponent', () => {
  let component: AngularMeterialControlsComponent;
  let fixture: ComponentFixture<AngularMeterialControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularMeterialControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularMeterialControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
