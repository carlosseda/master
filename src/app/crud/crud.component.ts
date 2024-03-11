import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from '../table/table.component';
import { FormComponent } from '../form/form.component';
import { FormButtonsComponent } from '../form/form-buttons/form-buttons.component';
import { FormTabsComponent } from '../form/form-tabs/form-tabs.component';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [ CommonModule, FormTabsComponent, TableComponent, FormComponent, FormButtonsComponent],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent {
  @Input() endpoint: string;
  @Input() formStructure: any;
  @Input() tableStructure: any;

  constructor() { 
    this.endpoint = '';
    this.formStructure = {};
    this.tableStructure = {};
  }
}
