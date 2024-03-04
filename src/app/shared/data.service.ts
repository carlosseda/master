import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private recordSource = new BehaviorSubject<any>(null);
  currentRecord = this.recordSource.asObservable();

  constructor() { }

  updateRecord(record: any) {
    this.recordSource.next(record);
  }
}