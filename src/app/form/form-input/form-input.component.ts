import { Component,  forwardRef, Input } from '@angular/core';
import { FormsModule, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  standalone: true,
  imports: [ CommonModule, FormsModule ],
  templateUrl: './form-input.component.html',
  styleUrl: './form-input.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormInputComponent),
      multi: true
    }
  ]
})

export class FormInputComponent implements ControlValueAccessor {
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
  @Input() options: any[];
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
    this.options = [];
  }

  private innerValue: any = '';

  onChange: any = () => {};
  onTouched: any = () => {};

  get value(): any {
    return this.innerValue;
  }

  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChange(v);
    }
  }

  writeValue(value: any): void {
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
