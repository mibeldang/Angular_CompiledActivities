import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatadrivenComponent } from './datadriven.component';

describe('DatadrivenComponent', () => {
  let component: DatadrivenComponent;
  let fixture: ComponentFixture<DatadrivenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatadrivenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatadrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
