import { Component, ElementRef, ViewChild } from '@angular/core';
import { VChildComponent } from '../v-child/v-child.component';

@Component({
  selector: 'app-v-parent',
  templateUrl: './v-parent.component.html',
  styleUrl: './v-parent.component.scss',
})
export class VParentComponent {
  currentText = 'Default text';
  @ViewChild('child') childComponent: VChildComponent | undefined;
  @ViewChild('parentInput') inputValue: ElementRef | undefined;

  changeChildColor() {
    this.childComponent?.changeColor();
  }

  updateText() {
    this.currentText = this.inputValue?.nativeElement.value;
  }

  takeFocus() {
    this.inputValue?.nativeElement.focus();
  }
}
