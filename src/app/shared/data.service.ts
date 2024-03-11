import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private recordSource = new BehaviorSubject<any>(null);
  currentRecord = this.recordSource.asObservable();

  private refreshTableSource = new Subject<void>();
  refreshTable = this.refreshTableSource.asObservable();

  private deleteButtonSource = new BehaviorSubject<any>(null);
  deleteButton = this.deleteButtonSource.asObservable();

  constructor() { }

  updateRecord(record: any) {
    this.recordSource.next(record);
  }

  emitRefreshTable() {
    this.refreshTableSource.next();
  }

  emitDeleteButtonClicked(endpoint: string) {
    this.deleteButtonSource.next(endpoint);
  }
}