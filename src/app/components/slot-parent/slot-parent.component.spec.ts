import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotParentComponent } from './slot-parent.component';

describe('SlotParentComponent', () => {
  let component: SlotParentComponent;
  let fixture: ComponentFixture<SlotParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SlotParentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SlotParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
