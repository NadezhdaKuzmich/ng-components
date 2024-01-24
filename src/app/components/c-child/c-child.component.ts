import {
  Component,
  Input,
  ContentChild,
  ElementRef,
  ContentChildren,
  QueryList,
} from '@angular/core';
import { CGrandChildComponent } from '../c-grand-child/c-grand-child.component';

@Component({
  selector: 'app-c-child',
  templateUrl: './c-child.component.html',
  styleUrl: './c-child.component.scss',
})
export class CChildComponent {
  @Input() flag = false;

  @ContentChild('elem') elem: ElementRef | undefined;
  @ContentChildren(CGrandChildComponent) grandChild:
    | QueryList<CGrandChildComponent>
    | undefined;

  changeText() {
    if (this.elem) {
      this.elem.nativeElement.innerHTML = 'Changed from ContentChild';
    }
  }

  changeGrandChildColor() {
    this.grandChild?.forEach(el => el.changeColor())
  }
}
