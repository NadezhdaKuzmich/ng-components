import { Component, EventEmitter, Input, Output, input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  @Input() description = 'Child Component without props';
  @Input() name = 'Child Counter';
  @Input('step') stepCounter = 2;
  @Input() counterValue = 12;
  @Input() flag = false;

  @Output() inputChange = new EventEmitter<string>();
  @Output() counterChange = new EventEmitter<number>();

  increment() {
    this.counterValue = this.counterValue + this.stepCounter;
    this.counterChange.emit(this.counterValue);
  }

  onInputChange(event: Event) {
    this.inputChange.emit((event.target as HTMLTextAreaElement).value);
  }
}
