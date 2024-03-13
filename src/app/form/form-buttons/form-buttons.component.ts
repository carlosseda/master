import { Component, Input } from '@angular/core';
import { DataService } from '../../shared/data.service';

@Component({
  selector: 'app-form-buttons',
  standalone: true,
  imports: [],
  templateUrl: './form-buttons.component.html',
  styleUrl: './form-buttons.component.css'
})
export class FormButtonsComponent {

  constructor(private dataService: DataService) {}

  async submitForm() {
    this.dataService.emitSubmitForm()
  }

  async refreshForm() {
    this.dataService.emitRefreshForm()
  }
}
