import { ChangeDetectionStrategy, Component, viewChild } from '@angular/core';

import { provideIcons, NgIcon } from '@ng-icons/core';
import { lucideChartBar, lucideMail } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { BrnSheetComponent, BrnSheetContentDirective, BrnSheetTriggerDirective } from '@spartan-ng/brain/sheet';
import { HlmSheetComponent, HlmSheetContentComponent, HlmSheetFooterComponent } from '@spartan-ng/ui-sheet-helm';
import { TranslateModule } from '@ngx-translate/core';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { lucideMenu } from '@ng-icons/lucide';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-sheet',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    BrnSheetTriggerDirective,
    BrnSheetContentDirective,
    HlmSheetComponent,
    HlmSheetContentComponent,
    HlmSheetFooterComponent,
    HlmButtonDirective,
    HlmIconDirective,
    NgIcon
  ],
  providers: [provideIcons({ lucideMenu, lucideMail, lucideChartBar })],
  templateUrl: './menu-sheet.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuSheetComponent {
  public viewchildSheetRef = viewChild(BrnSheetComponent);

  closeSheet() {
    this.viewchildSheetRef()?.close({});
  }
}
