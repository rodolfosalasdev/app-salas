import { ChangeDetectionStrategy, Component } from '@angular/core';

import { provideIcons, NgIcon } from '@ng-icons/core';
import { lucideCross, lucideMail } from '@ng-icons/lucide';
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
import { TranslateModule } from '@ngx-translate/core';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { lucideMenu } from '@ng-icons/lucide';

@Component({
  selector: 'app-menu-sheet',
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
    HlmIconDirective,
    NgIcon
  ],
  providers: [provideIcons({ lucideMenu, lucideMail })],
  templateUrl: './menu-sheet.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuSheetComponent {}
