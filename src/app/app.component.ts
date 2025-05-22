import { Component } from '@angular/core';

import { HeaderComponent } from './features/header/header.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
