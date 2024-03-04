import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormInputComponent } from './form-input/form-input.component';
import { FormSelectComponent } from './form-select/form-select.component';
import { FormTextareaComponent } from './form-textarea/form-textarea.component';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, FormInputComponent, FormSelectComponent, FormTextareaComponent, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})

export class FormComponent {
  @Input() endpoint: string;
  @Input() formStructure: any[];
  @Input() formData: any;

  constructor(private dataService: DataService) { 
    this.endpoint = '';
    this.formStructure = [];
    this.formData = {};
  }

  ngOnInit() {
    this.dataService.currentRecord.subscribe(record => {
      if (record) {
        this.formData = record;
      }
    });
  }

  async submitForm(event: Event) {

    event.preventDefault();

    const response = await fetch(`${environment.apiUrl}${this.endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.formData)
    });

    const data = await response.json();

    this.formData = {};
  }
}
