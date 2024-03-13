import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TabsService {

  private tabSource = new BehaviorSubject<any>(null);
  selectedTab = this.tabSource.asObservable();

  constructor() { }

  emitSelectTab(tab: any) {
    this.tabSource.next(tab);
  }
}

