import { Component, forwardRef, Input } from '@angular/core';
import { FormsModule, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-form-select',
  standalone: true,
  imports: [ CommonModule , FormsModule ],
  templateUrl: './form-select.component.html',
  styleUrl: './form-select.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormSelectComponent),
      multi: true
    }
  ]
})
export class FormSelectComponent implements ControlValueAccessor {
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
