import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlateContainerOneComponent } from './plate-container-one.component';

describe('PlateContainerOneComponent', () => {
  let component: PlateContainerOneComponent;
  let fixture: ComponentFixture<PlateContainerOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlateContainerOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlateContainerOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
