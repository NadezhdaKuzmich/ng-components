import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotChildComponent } from './slot-child.component';

describe('SlotChildComponent', () => {
  let component: SlotChildComponent;
  let fixture: ComponentFixture<SlotChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SlotChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SlotChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
