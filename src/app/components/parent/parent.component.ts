import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent {
  parentName = 'Parent Component';
  parentCounter = 200;
  startCount = 0;
  parentStepValue = 6;

  handleInputChange(str: string) {
    this.parentName = str;
  }

  handleChildCounterChange(num: number) {
    this.parentCounter = num;
  }
}
