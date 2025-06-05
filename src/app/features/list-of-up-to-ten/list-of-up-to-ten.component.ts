import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmCardDirective } from '@spartan-ng/ui-card-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-list-of-up-to-ten',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HlmCardDirective,
    HlmInputDirective,
    HlmButtonDirective,
    TranslateModule
  ],
  templateUrl: './list-of-up-to-ten.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListOfUpToTenComponent {
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
