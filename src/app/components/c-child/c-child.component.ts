import { Component, Input, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-c-child',
  templateUrl: './c-child.component.html',
  styleUrl: './c-child.component.scss',
})
export class CChildComponent {
  @Input() flag = false;
  
  @ContentChild('elem') elem: ElementRef | undefined;

  changeText() {
    if (this.elem) {
      this.elem.nativeElement.innerHTML = 'Changed from Content Child';
    }
  }
}
