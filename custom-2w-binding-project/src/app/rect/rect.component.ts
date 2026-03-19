import { Component, EventEmitter, Input, model, Output } from '@angular/core';

@Component({
  selector: 'app-rect',
  standalone: true,
  imports: [],
  templateUrl: './rect.component.html',
  styleUrl: './rect.component.css',
})
export class RectComponent {
  // @Input({ required: true }) size!: { width: string; height: string };
  // @Output() sizeChange = new EventEmitter<{ width: string; height: string }>();

  // enteredWidth = '';
  // enteredHeight = '';

  size = model.required<{ width: string; height: string }>();
  onReset() {
    // this.size.height = '100';
    // this.size.width = '100';

    // this.sizeChange.emit({
    //   width: '500',
    //   height: '500',
    // });

    this.size.set({
      width: '500',
      height: '500',
    });
  }
}
