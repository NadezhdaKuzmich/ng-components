import { Component } from '@angular/core';

@Component({
  selector: 'app-v-child',
  templateUrl: './v-child.component.html',
  styleUrl: './v-child.component.scss',
})
export class VChildComponent {
  isPurple = false;

  changeColor() {
    this.isPurple = !this.isPurple;
  }
}
