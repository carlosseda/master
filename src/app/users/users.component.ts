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
  formStructure = {
    "tabs": [
      {"name": "general", "label": "General"},
      {"name": "images", "label": "Imágenes"}
    ],
    "inputs": {
      "general": {
        "noLocale": [
          {"name": "id", "element":"input", "type": "hidden"},
          {"name": "name", "element":"input", "type": "text", "label": "Nombre", "width": "half-width"},
          {"name": "email", "element":"input", "type": "email", "label": "Email", "width": "half-width"},
          {"name": "password", "element":"input", "type": "password", "label": "Contraseña", "width": "half-width"},
          {"name": "password_confirmation", "element":"input", "type": "password", "label": "Confirmar contraseña", "width": "half-width"}
        ]
      },
      "images": {
        "noLocale": [
          {"name": "avatar", "element":"input", "type": "image", "label": "Avatar", "width": "half-width", "quantity": "single", "imageConfigurations": 
            {
              "thumbnail": {
                "widthPx": "60",
                "heightPx": "60"
              },
              "xs": {
                "widthPx": "60",
                "heightPx": "60"
              },
              "sm": {
                "widthPx": "60",
                "heightPx": "60"
              },
              "md": {
                "widthPx": "60",
                "heightPx": "60"
              },
              "lg": {
                "widthPx": "60",
                "heightPx": "60"
              }
            } 
          }
        ]
      }
    }
  }
  
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
