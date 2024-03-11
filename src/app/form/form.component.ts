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
  @Input() method: string;
  @Input() url: string;

  constructor(private dataService: DataService) { 
    this.endpoint = '';
    this.formStructure = [];
    this.formData = {};
    this.method = 'POST';
    this.url = '';
  }

  ngOnInit() {

    this.url = `${environment.apiUrl}${this.endpoint}`;

    this.dataService.currentRecord.subscribe(record => {
      if (record) {
        this.formData = record;
        this.method = 'PUT';
        this.url = `${environment.apiUrl}${this.endpoint}/${record.id}`;
      }
    });
  }

  async submitForm() {

    try{
      const response = await fetch(this.url, {
        method: this.method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.formData)
      });

      this.dataService.emitRefreshTable();

      this.formData = {};

    }catch(error){
      console.error(error);
    }
  }

  async clearForm() {
    this.formData = {};
  }
}
