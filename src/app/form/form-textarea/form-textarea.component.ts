import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-textarea',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './form-textarea.component.html',
  styleUrl: './form-textarea.component.css'
})
export class FormTextareaComponent {
  @Input() label: string;
  @Input() name: string;
  @Input() placeholder: string;
  @Input() id: string;
  @Input() required: boolean;
  @Input() disabled: boolean;
  @Input() width: string;
  control = new FormControl();

  constructor() {
    this.label = '';
    this.name = '';
    this.placeholder = '';
    this.id = '';
    this.required = false;
    this.disabled = false;
    this.width = '';
  }
}
