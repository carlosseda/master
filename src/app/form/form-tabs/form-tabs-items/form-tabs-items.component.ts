import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsService } from '../../../shared/tabs.service';

@Component({
  selector: 'app-form-tabs-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-tabs-items.component.html',
  styleUrl: './form-tabs-items.component.css'
})
export class FormTabsItemsComponent {
  @Input() tabs: any[];
  activeTab: any;

  constructor(private tabsService: TabsService ) { 
    this.tabs = [];
  }

  ngOnInit() {
    if (this.tabs.length > 0) {
      this.activeTab = this.tabs[0].name; 
    }
  }

  selectTab(tabName: any) {
    this.activeTab = tabName;
    this.tabsService.emitSelectTab(tabName);
  }
}
