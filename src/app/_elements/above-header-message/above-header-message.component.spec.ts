import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboveHeaderMessageComponent } from './above-header-message.component';

describe('AboveHeaderMessageComponent', () => {
  let component: AboveHeaderMessageComponent;
  let fixture: ComponentFixture<AboveHeaderMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboveHeaderMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboveHeaderMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
