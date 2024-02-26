import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-input',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './form-input.component.html',
  styleUrl: './form-input.component.css'
})
export class FormInputComponent {
  @Input() label: string;
  @Input() name: string;
  @Input() type: string;
  @Input() placeholder: string;
  @Input() id: string;
  @Input() required: boolean;
  @Input() minlength: number;
  @Input() maxlength: number;
  @Input() pattern: string;
  @Input() disabled: boolean;
  @Input() width: string;
  control = new FormControl();

  constructor() {
    this.label = '';
    this.name = '';
    this.type = '';
    this.placeholder = '';
    this.id = '';
    this.required = false;
    this.minlength = 0;
    this.maxlength = 0;
    this.pattern = '';
    this.disabled = false;
    this.width = '';
  }
}
