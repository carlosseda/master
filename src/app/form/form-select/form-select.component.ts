import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-select',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './form-select.component.html',
  styleUrl: './form-select.component.css'
})
export class FormSelectComponent {
  @Input() element: string;
  @Input() label: string;
  @Input() name: string;
  @Input() id: string;
  @Input() required: boolean;
  @Input() disabled: boolean;
  @Input() width: string;
  @Input() options: any[];
  control = new FormControl();

  constructor() {
    this.element = '';
    this.label = '';
    this.name = '';
    this.id = '';
    this.required = false;
    this.disabled = false;
    this.width = '';
    this.options = [];
  }
}
