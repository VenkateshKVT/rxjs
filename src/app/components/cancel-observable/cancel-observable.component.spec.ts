import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelObservableComponent } from './cancel-observable.component';

describe('CancelObservableComponent', () => {
  let component: CancelObservableComponent;
  let fixture: ComponentFixture<CancelObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelObservableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
