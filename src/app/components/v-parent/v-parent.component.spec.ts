import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VParentComponent } from './v-parent.component';

describe('VParentComponent', () => {
  let component: VParentComponent;
  let fixture: ComponentFixture<VParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VParentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
