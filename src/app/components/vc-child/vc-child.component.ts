import { Component } from '@angular/core';

@Component({
  selector: 'app-vc-child',
  templateUrl: './vc-child.component.html',
  styleUrl: './vc-child.component.scss',
})
export class VcChildComponent {
  isBlue = false;

  changeColor() {
    this.isBlue = !this.isBlue;
  }
}
