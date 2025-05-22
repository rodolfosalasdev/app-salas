import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, viewChild } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChartBar, lucideMail, lucideMenu } from '@ng-icons/lucide';
import { TranslateModule } from '@ngx-translate/core';
import { BrnSheetComponent, BrnSheetContentDirective, BrnSheetTriggerDirective } from '@spartan-ng/brain/sheet';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { HlmSheetComponent, HlmSheetContentComponent, HlmSheetFooterComponent } from '@spartan-ng/ui-sheet-helm';

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
