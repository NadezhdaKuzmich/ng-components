import { Component } from '@angular/core';

@Component({
  selector: 'app-c-grand-child',
  templateUrl: './c-grand-child.component.html',
  styleUrl: './c-grand-child.component.scss',
})
export class CGrandChildComponent {
  isPurple = false;

  changeColor() {
    this.isPurple = !this.isPurple;
  }
}
