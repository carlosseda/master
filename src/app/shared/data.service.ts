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

  private refreshFormSource = new Subject<void>();
  refreshForm = this.refreshFormSource.asObservable();

  private submitFormSource = new Subject<void>();
  submitForm = this.submitFormSource.asObservable();

  private deleteButtonSource = new BehaviorSubject<any>(null);
  deleteButton = this.deleteButtonSource.asObservable();

  constructor() { }

  updateRecord(record: any) {
    this.recordSource.next(record);
  }

  emitRefreshTable() {
    this.refreshTableSource.next();
  }

  emitRefreshForm() {
    this.refreshFormSource.next();
  }

  emitSubmitForm() {
    this.submitFormSource.next();
  }

  emitDeleteButtonClicked(endpoint: string) {
    this.deleteButtonSource.next(endpoint);
  }
}