import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActfiveComponent } from './actfive.component';

describe('ActfiveComponent', () => {
  let component: ActfiveComponent;
  let fixture: ComponentFixture<ActfiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActfiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActfiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
