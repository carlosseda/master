import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRecordComponent } from './table-record.component';

describe('TableRecordComponent', () => {
  let component: TableRecordComponent;
  let fixture: ComponentFixture<TableRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableRecordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
