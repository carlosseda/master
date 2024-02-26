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
  @Input() formFields = [
    {"name": "id", "type": "hidden"},
    {"name": "name", "type": "text", "label": "Nombre", "width": "half-width"},
    {"name": "email", "type": "email", "label": "Email", "width": "half-width"},
    {"name": "password", "type": "password", "label": "Contraseña", "width": "half-width"},
    {"name": "password_confirmation", "type": "password", "label": "Confirmar contraseña", "width": "half-width"}
  ];

  constructor() { }
}
