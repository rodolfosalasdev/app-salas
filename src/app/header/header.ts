import { TitleCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  imports: [MatCardModule, TitleCasePipe, MatMenuModule, MatButtonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  public readonly title = signal(['texto1', 'texto2', 'texto3', 'texto4', 'texto5', 'texto6']);
}
