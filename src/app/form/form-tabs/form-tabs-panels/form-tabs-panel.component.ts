import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsService } from '../../../shared/tabs.service';

@Component({
  selector: 'app-form-tabs-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-tabs-panel.component.html',
  styleUrl: './form-tabs-panel.component.css'
})
export class FormTabsPanelComponent {
  @Input() isActive: boolean = false;
  @Input() tab: any;

  constructor(private tabsService: TabsService) { 
    this.tab = '';

    this.tabsService.selectedTab.subscribe(tab => {
      if (this.tab == tab) {
        this.isActive = true;
      } else {
        this.isActive = false;
      }
    });
  }
}
