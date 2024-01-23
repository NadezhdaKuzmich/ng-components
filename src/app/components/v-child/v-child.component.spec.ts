import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VChildComponent } from './v-child.component';

describe('VChildComponent', () => {
  let component: VChildComponent;
  let fixture: ComponentFixture<VChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
