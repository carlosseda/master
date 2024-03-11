import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment';
import { DataService } from '../../shared/data.service';

@Component({
  selector: 'app-table-record',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-record.component.html',
  styleUrl: './table-record.component.css'
})

export class TableRecordComponent {
  @Input() endpoint: string;
  @Input() headers: any[];
  @Input() recordButtons: any[];
  @Input() record: any;

  constructor(private dataService: DataService) { 
    this.endpoint =  ''
    this.headers = [];
    this.recordButtons = [];
    this.record = {};
  }

  async editElement() {
    const response = await fetch(`${environment.apiUrl}${this.endpoint}/${this.record.id}`);
    const record = await response.json();
    this.dataService.updateRecord(record);
  }

  async removeElement() {
    const url = `${environment.apiUrl}${this.endpoint}/${this.record.id}`
    this.dataService.emitDeleteButtonClicked(url);
  }
}


