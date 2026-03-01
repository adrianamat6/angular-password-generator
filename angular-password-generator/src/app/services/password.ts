import { Injectable } from '@angular/core';
import { Iuser } from '../interfaces/iuser';

@Injectable({
  providedIn: 'root',
})
export class Password {

  generatePassword(userData: Iuser): Iuser {
    // 1. Extraemos las primeras 3 letras del nombre (en minúsculas)
    const partName = userData.name.substring(0, 3).toLowerCase();
    
    // 2. Obtenemos la longitud del email
    const emailLength = userData.email.length;
    
    // 3. Extraemos el primer carácter del email en mayúsculas
    const firstCharEmail = userData.email.charAt(0).toUpperCase();

    // 4. Combinamos los elementos para crear la clave
    // Resultado ej: "adr@15A"
    const generatedPass = `${partName}@${emailLength}${firstCharEmail}`;

    // Retornamos el objeto original pero añadiéndole la propiedad password
    return { ...userData, password: generatedPass }; 
  }
}