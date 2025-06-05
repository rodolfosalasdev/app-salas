import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ListOfUpToTenComponent } from '../list-of-up-to-ten/list-of-up-to-ten.component';

@Component({
  selector: 'app-home',
  imports: [ListOfUpToTenComponent],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  name = signal('');
  names = signal<string[]>([]);

  updateName(event: Event): void {
    this.name.set((event.target as HTMLInputElement).value);
  }

  submitForm(): void {
    if (this.name() && this.names().length < 10) {
      this.names.update((currentNames) => {
        const newNames = [...currentNames, this.name()];
        return newNames;
      });
    }
    this.name.set('');
  }

  clear(): void {
    this.names.set([]);
    this.name.set('');
  }
}
