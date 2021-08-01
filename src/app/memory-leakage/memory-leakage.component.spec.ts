import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryLeakageComponent } from './memory-leakage.component';

describe('MemoryLeakageComponent', () => {
  let component: MemoryLeakageComponent;
  let fixture: ComponentFixture<MemoryLeakageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemoryLeakageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoryLeakageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
