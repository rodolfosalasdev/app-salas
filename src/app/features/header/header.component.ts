import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { ProfileSheetComponent } from './profile-sheet/profile-sheet.component';
import { TranslationService } from '../../core/service/translation.service';
import { TranslateModule } from '@ngx-translate/core';

import { BrnSelectImports } from '@spartan-ng/brain/select';
import { HlmSelectImports } from '@spartan-ng/ui-select-helm';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ProfileSheetComponent,
    TranslateModule,
    BrnSelectImports,
    HlmSelectImports
  ],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  public siteName = 'RODOLFOSALAS.DEV';
  private readonly formBuilder = inject(FormBuilder);
  private readonly translationService = inject(TranslationService);

  public readonly options = [
    { label: '🇪🇸 Español', value: 'es' },
    { label: '🇧🇷 Português', value: 'pt' },
    { label: '🇺🇸 English', value: 'en' }
  ];

  protected form = this.formBuilder.group({
    Language: this.options[0]
  });

  onLanguageChange(selectedOption: any) {
    const lang = selectedOption?.value || '';
    this.translationService.changeLanguage(lang);
  }
}
