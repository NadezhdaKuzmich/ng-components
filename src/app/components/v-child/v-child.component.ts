import { Component } from '@angular/core';

@Component({
  selector: 'app-v-child',
  templateUrl: './v-child.component.html',
  styleUrl: './v-child.component.scss',
})
export class VChildComponent {
  isGreen = false;

  changeColor() {
    this.isGreen = !this.isGreen;
  }
}
