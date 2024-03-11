import { Component , Input } from '@angular/core';
import { TableRecordComponent } from './table-record/table-record.component';
import { DeleteModalComponent } from '../delete-modal/delete-modal.component';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, DeleteModalComponent, TableRecordComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

  @Input() endpoint: string;
  @Input() tableStructure: any;
  @Input() records: any[];

  constructor(private dataService: DataService) { 
    this.endpoint = '';
    this.tableStructure = {};
    this.records = [];
  }

  async ngOnInit() {
    await this.loadData();

    this.dataService.refreshTable.subscribe( async () => {
      await this.loadData();
    });
  }

  async loadData(){
    const response = await fetch(`${environment.apiUrl}${this.endpoint}`);
    const data = await response.json();
    this.records = data.rows;
  }
}
