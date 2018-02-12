import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoUigridComponent } from './kendo-uigrid.component';

describe('KendoUigridComponent', () => {
  let component: KendoUigridComponent;
  let fixture: ComponentFixture<KendoUigridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KendoUigridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendoUigridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
