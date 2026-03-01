import { Injectable, signal } from '@angular/core';
import { Iuser } from '../interfaces/iuser';

@Injectable({
  providedIn: 'root',
})
export class Password {
  // Estado de la aplicación
  passwordGenerada = signal<string>('');

  /**
   * Método principal (Orquestador)
   */
  generatePassword(userData: Iuser): Iuser {
    // 1. Calculamos la nueva cadena
    const generatedPass = this.buildPasswordString(userData.name, userData.email);

    // 2. Actualizamos el estado (la Signal)
    this.passwordGenerada.set(generatedPass);

    // 3. Retornamos el objeto transformado
    return { ...userData, password: generatedPass };
  }

  //-----------------------------------------------------------------------------------------
  /**
   * Une las piezas de la contraseña
   */
  private buildPasswordString(name: string, email: string): string {
    const namePart = this.getNamePrefix(name);
    const emailPart = this.getEmailSuffix(email);
    
    return `${namePart}@${emailPart}`;
  }

  /**
   * Lógica específica para el nombre: 3 letras en minúscula
   */
  private getNamePrefix(name: string): string {
    return name.substring(0, 3).toLowerCase();
  }

  /**
   * Lógica específica para el email: Longitud + primera letra en Mayúscula
   */
  private getEmailSuffix(email: string): string {
    const length = email.length;
    const firstChar = email.charAt(0).toUpperCase();
    return `${length}${firstChar}`;
  }

  /**
   * Método extra por si alguna vez necesitas limpiar el estado
   */
  resetPassword(): void {
    this.passwordGenerada.set('');
  }
}