import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PasswordGenerator } from './components/password-generator/password-generator';
import { PasswordGeneratedCard } from './components/password-generated-card/password-generated-card';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PasswordGenerator, PasswordGeneratedCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-password-generator');
}
