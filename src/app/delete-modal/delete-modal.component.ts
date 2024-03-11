import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-delete-modal',
  standalone: true,
  imports: [],
  templateUrl: './delete-modal.component.html',
  styleUrl: './delete-modal.component.css'
})
export class DeleteModalComponent implements OnInit {
  @Input() state: string;
  @Input() endpoint: any;

  constructor(private dataService: DataService) { 
    this.state = ""
    this.endpoint = '';
  }

  ngOnInit() {
    this.dataService.deleteButton.subscribe(endpoint => {
      if(endpoint){
        this.endpoint = endpoint;
        this.openModal();
      }
    });
  }

  async deleteRecord() {
    try{
      const response = await fetch(this.endpoint, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      this.dataService.emitRefreshTable();
      this.closeModal();
    } catch (error) {
      console.error('Error:', error);
    }
  }

  openModal() {
    this.state = "active"    
  }

  closeModal() {
    this.state = ""
  }
}
