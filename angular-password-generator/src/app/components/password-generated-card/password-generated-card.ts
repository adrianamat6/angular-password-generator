import { Component } from '@angular/core';
import { input } from '@angular/core';
import { inject } from '@angular/core';
import { Password } from '../../services/password';
@Component({
  selector: 'app-password-generated-card',
  imports: [],
  templateUrl: './password-generated-card.html',
  styleUrl: './password-generated-card.css',
})
export class PasswordGeneratedCard {

  passwordService = inject(Password);

  // Creamos un acceso directo a la signal del servicio
  password = this.passwordService.passwordGenerada;

}
