import { Component, QueryList, ViewChildren } from '@angular/core';
import { VcChildComponent } from '../vc-child/vc-child.component';

@Component({
  selector: 'app-vc-parent',
  templateUrl: './vc-parent.component.html',
  styleUrl: './vc-parent.component.scss',
})
export class VcParentComponent {
  @ViewChildren('child') childList: QueryList<VcChildComponent> | undefined;

  changeChildColor() {
    this.childList?.forEach((el) => el.changeColor());
  }
}
