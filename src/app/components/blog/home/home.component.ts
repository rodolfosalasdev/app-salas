import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HomeComponent {

  cards = [
    { title: 'title 1',
      contentTitle: 'Special title treatment',
      content: '', 
      action: ''
    },
    { title: 'title 2', 
      contentTitle: 'Special title treatment',
      content: 'With supporting text below as a natural lead-in to additional content.', 
      action: 'Go somewhere'
    },
    { title: 'title 3',
      contentTitle: 'Special title treatment',
      content: '', 
      action: ''
    },
  ]

}
