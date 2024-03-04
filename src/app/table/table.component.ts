import { Component , Input  } from '@angular/core';
import { TableRecordComponent } from './table-record/table-record.component';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, TableRecordComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

  @Input() endpoint: string;
  @Input() tableStructure: any;
  @Input() records: any[];

  constructor() { 
    this.endpoint = '';
    this.tableStructure = {};
    this.records = [];
  }

  async ngOnInit() {
    const response = await fetch(`${environment.apiUrl}${this.endpoint}`);
    const data = await response.json();
    this.records = data.rows;
  }

}
