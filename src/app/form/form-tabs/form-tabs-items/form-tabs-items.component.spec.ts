import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTabsItemsComponent } from './form-tabs-items.component';

describe('FormTabsItemsComponent', () => {
  let component: FormTabsItemsComponent;
  let fixture: ComponentFixture<FormTabsItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormTabsItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormTabsItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
