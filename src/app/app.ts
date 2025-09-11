import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { Header } from './header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  public readonly title = signal('app-salas');
}
