import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCross, lucideInstagram, lucideLinkedin, lucideGithub } from '@ng-icons/lucide';
import { TranslateModule } from '@ngx-translate/core';
import { BrnPopoverComponent, BrnPopoverContentDirective, BrnPopoverTriggerDirective } from '@spartan-ng/brain/popover';
import { BrnSeparatorComponent } from '@spartan-ng/brain/separator';
import { BrnSheetContentDirective, BrnSheetTriggerDirective } from '@spartan-ng/brain/sheet';
import { HlmAvatarComponent, HlmAvatarFallbackDirective, HlmAvatarImageDirective } from '@spartan-ng/ui-avatar-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { HlmPopoverContentDirective } from '@spartan-ng/ui-popover-helm';
import { HlmSeparatorDirective } from '@spartan-ng/ui-separator-helm';
import {
  HlmSheetComponent,
  HlmSheetContentComponent,
  HlmSheetDescriptionDirective,
  HlmSheetHeaderComponent,
  HlmSheetTitleDirective
} from '@spartan-ng/ui-sheet-helm';

@Component({
  selector: 'app-profile-sheet',
  imports: [
    TranslateModule,
    BrnSheetTriggerDirective,
    BrnSheetContentDirective,
    HlmSheetComponent,
    HlmSheetContentComponent,
    HlmSheetHeaderComponent,
    HlmSheetTitleDirective,
    HlmSheetDescriptionDirective,
    HlmAvatarImageDirective,
    HlmAvatarComponent,
    HlmAvatarFallbackDirective,
    BrnPopoverComponent,
    BrnPopoverContentDirective,
    BrnPopoverTriggerDirective,
    HlmPopoverContentDirective,
    HlmSeparatorDirective,
    BrnSeparatorComponent,
    HlmIconDirective,
    NgIcon
  ],
  providers: [provideIcons({ lucideCross, lucideInstagram, lucideLinkedin, lucideGithub })],
  templateUrl: './profile-sheet.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileSheetComponent {
  public socialMedia = {
    instagram: 'https://www.instagram.com/rodolfosalas.dev/',
    linkedIn: 'https://www.linkedin.com/in/rodolfo-salas-21858911b/',
    github: 'https://github.com/rodolfosalasdev/app-salas'
  };

  public redirectTo(media: string): void {
    window.open(media, '_blank');
  }
}
