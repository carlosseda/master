import { Component, Input } from '@angular/core';
import { CrudComponent } from '../crud/crud.component';

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [ CrudComponent ],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.css'
})
export class FaqsComponent {
  @Input() formFields = [
    {"name": "id", "element": "input", "type": "hidden"},
    {"name": "name", "element": "input", "type": "text", "label": "Nombre", "width": "half-width"},
    {"name": "question", "element": "input", "type": "text", "label": "Pregunta", "width": "half-width"},
    {"name": "answer", "element": "textarea", "label": "Respuesta", "width": "half-width"},
    {'name': 'platforms', 'element':'input',  'type': 'checkbox', 'label': 'Plataformas', 'width': 'full-width', 'options':
      [
        {'label': 'Web', 'value': 'web'},
        {'label': 'Android', 'value': 'android'},
        {'label': 'iOS', 'value': 'ios'}
      ]
    },
    {'name': 'platforms', 'element':'input', 'type': 'radio', 'label': 'Plataformas', 'width': 'full-width', 'options':
      [
        {'label': 'Web', 'value': 'web'},
        {'label': 'Android', 'value': 'android'},
        {'label': 'iOS', 'value': 'ios'}
      ]
    },
    {'name': 'visible', 'element':'select', 'label': 'Visible', 'width': 'one-third-width', 'options': 
      [
        {'label': 'Si', 'value': 'true'},
        {'label': 'No', 'value': 'false'}
      ]
    }
  ];

  constructor() { }
}
