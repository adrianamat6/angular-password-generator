import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Iuser } from '../../interfaces/iuser';
import { Password } from '../../services/password';

@Component({
  selector: 'app-password-generator',
  standalone: true, // Asegúrate de que sea standalone si no usas NgModules
  imports: [ReactiveFormsModule],
  templateUrl: './password-generator.html',
  styleUrl: './password-generator.css',
})
export class PasswordGenerator {

  // Variable para guardar la contraseña y mostrarla en el HTML
  generatedPassword: string = '';



  // 1. Inyectamos el servicio
  passwordService = inject(Password);

  // 2. Patrón para validar el email (Regex en formato string)
  emailPattern: string = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$';

  // 3. Configuración del formulario
  userForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  generatePasswordForm() {
// 1. PRIMERO PREGUNTAMOS: ¿Es válido el formulario (pasó la Regex y el nombre)?
  if (this.userForm.valid) {
    
    // 2. SOLO SI ES VÁLIDO: Creamos el objeto y llamamos al servicio
    const userData: Iuser = {
      name: this.userForm.value.username!,
      email: this.userForm.value.email!
    };

    // Esta parte va AQUÍ ADENTRO para que solo ocurra cuando todo está OK
    const result = this.passwordService.generatePassword(userData);
    console.log('Resultado del servicio:', result);


    this.generatedPassword = result.password || '';
    console.log('Contraseña generada:', this.generatedPassword);


  }else{
    // 3. SI NO ES VÁLIDO: Avisamos al usuario
    alert('Por favor, completa el formulario correctamente.');
  }
 }
}