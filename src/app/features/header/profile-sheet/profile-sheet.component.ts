import { ChangeDetectionStrategy, Component, viewChild } from '@angular/core';

import { provideIcons, NgIcon } from '@ng-icons/core';
import { lucideCross, lucideInstagram, lucideLinkedin } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';
import { BrnSheetContentDirective, BrnSheetTriggerDirective } from '@spartan-ng/brain/sheet';
import {
  HlmSheetComponent,
  HlmSheetContentComponent,
  HlmSheetDescriptionDirective,
  HlmSheetFooterComponent,
  HlmSheetHeaderComponent,
  HlmSheetTitleDirective
} from '@spartan-ng/ui-sheet-helm';
import { HlmAvatarImageDirective, HlmAvatarComponent, HlmAvatarFallbackDirective } from '@spartan-ng/ui-avatar-helm';
import { TranslateModule } from '@ngx-translate/core';

import {
  BrnPopoverCloseDirective,
  BrnPopoverComponent,
  BrnPopoverContentDirective,
  BrnPopoverTriggerDirective
} from '@spartan-ng/brain/popover';
import { HlmPopoverCloseDirective, HlmPopoverContentDirective } from '@spartan-ng/ui-popover-helm';

import { HlmSeparatorDirective } from '@spartan-ng/ui-separator-helm';
import { BrnSeparatorComponent } from '@spartan-ng/brain/separator';

import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
  selector: 'app-profile-sheet',
  standalone: true,
  imports: [
    TranslateModule,
    BrnSheetTriggerDirective,
    BrnSheetContentDirective,
    HlmSheetComponent,
    HlmSheetContentComponent,
    HlmSheetHeaderComponent,
    HlmSheetFooterComponent,
    HlmSheetTitleDirective,
    HlmSheetDescriptionDirective,
    HlmButtonDirective,
    HlmInputDirective,
    HlmLabelDirective,
    HlmAvatarImageDirective,
    HlmAvatarComponent,
    HlmAvatarFallbackDirective,
    BrnPopoverCloseDirective,
    BrnPopoverComponent,
    BrnPopoverContentDirective,
    BrnPopoverTriggerDirective,
    HlmPopoverCloseDirective,
    HlmPopoverContentDirective,
    HlmSeparatorDirective,
    BrnSeparatorComponent,
    HlmIconDirective,
    NgIcon
  ],
  providers: [provideIcons({ lucideCross, lucideInstagram, lucideLinkedin })],
  templateUrl: './profile-sheet.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileSheetComponent {
  public socialMedia = {
    instagram: 'https://www.instagram.com/rodolfosalas.dev/',
    linkedIn: 'https://www.linkedin.com/in/rodolfo-salas-21858911b/'
  };

  public redirectTo(media: string): void {
    window.open(media, '_blank');
  }
}
