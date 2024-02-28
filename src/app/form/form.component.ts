import { NgForm } from '@angular/forms';
import { Component, Input,  } from '@angular/core';
import { FormInputComponent } from './form-input/form-input.component';
import { FormSelectComponent } from './form-select/form-select.component';
import { FormTextareaComponent } from './form-textarea/form-textarea.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormInputComponent, FormSelectComponent, FormTextareaComponent, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})

export class FormComponent {
  @Input() formFields: any[];

  constructor() { 
    this.formFields = [];
  }

  ngOnInit() {
  }

  submitForm(formContainer: HTMLFormElement, event: Event) {

    event.preventDefault();

    console.log('Form container:', formContainer);  
    const formData = new FormData(formContainer);

    console.log('Form data:', formData)

    formData.forEach((value, key) => {
      console.log(key, value);
    });
  }
}
