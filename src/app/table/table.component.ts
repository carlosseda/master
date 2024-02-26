import { Component } from '@angular/core';
import { TableRecordComponent } from './table-record/table-record.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [TableRecordComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

}
