import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildfiveComponent } from './childfive.component';

describe('ChildfiveComponent', () => {
  let component: ChildfiveComponent;
  let fixture: ComponentFixture<ChildfiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildfiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildfiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
