import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { TranslateModule } from '@ngx-translate/core';
import { HlmCardDirective } from '@spartan-ng/ui-card-helm';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-table',
  imports: [MatTableModule, CommonModule, HlmCardDirective, TranslateModule],
  templateUrl: './user-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserTableComponent {
  private readonly userService = inject(UserService);
  displayedColumns: string[] = ['position', 'name', 'email', 'role'];
  users$ = this.userService.getUsers();
}
