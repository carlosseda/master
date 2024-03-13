import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTabsPanelComponent } from './form-tabs-panel.component';

describe('FormTabsPanelComponent', () => {
  let component: FormTabsPanelComponent;
  let fixture: ComponentFixture<FormTabsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormTabsPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormTabsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
