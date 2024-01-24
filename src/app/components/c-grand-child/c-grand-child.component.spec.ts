import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CGrandChildComponent } from './c-grand-child.component';

describe('CGrandChildComponent', () => {
  let component: CGrandChildComponent;
  let fixture: ComponentFixture<CGrandChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CGrandChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CGrandChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
