import { Component, Input } from '@angular/core';
import { CrudComponent } from '../crud/crud.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [ CrudComponent ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  endpoint = '/api/admin/users';
  formStructure = [
    {"name": "id", "element": "input", "type": "hidden"},
    {"name": "name", "element": "input", "type": "text", "label": "Nombre", "width": "half-width"},
    {"name": "email", "element": "input", "type": "email", "label": "Email", "width": "half-width"},
    {"name": "password", "element": "input", "type": "password", "label": "Contraseña", "width": "half-width"},
    {"name": "password_confirmation", "element": "input", "type": "password", "label": "Confirmar contraseña", "width": "half-width"}
  ];
  tableStructure = { 
    'headers': [
      {'label': 'Nombre', 'field': 'name'},
      {'label': 'Email', 'field': 'email'},
      {'label': 'Fecha de creación', 'field': 'createdAt'},
      {'label': 'Fecha de actualización', 'field': 'updatedAt'}
    ],
    'recordButtons': ['edit', 'remove'],
    'tableButtons': ['filterButton']
  }

  constructor() { }
}
