import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingsPageOneComponent } from './listings-page-one.component';

describe('ListingsPageOneComponent', () => {
  let component: ListingsPageOneComponent;
  let fixture: ComponentFixture<ListingsPageOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingsPageOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingsPageOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
