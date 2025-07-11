import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@spartan-ng/brain/forms';
import { TranslateModule } from '@ngx-translate/core';
import { HlmCardDirective } from '@spartan-ng/ui-card-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { BrnSelectImports } from '@spartan-ng/brain/select';
import { HlmSelectImports } from '@spartan-ng/ui-select-helm';
import { UserTableComponent } from './user-table/user-table.component';
import { UserService } from './service/user.service';
import { Users } from './interfaces/user.interface';

@Component({
  selector: 'app-users',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    HlmCardDirective,
    HlmInputDirective,
    HlmButtonDirective,
    BrnSelectImports,
    HlmSelectImports,
    UserTableComponent
  ],
  providers: [{ provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }],
  templateUrl: './users.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent {
  private readonly formBuilder = inject(FormBuilder);
  private readonly userService = inject(UserService);
  public readonly isDisabledSignal = signal(true);

  constructor() {
    this.usersForm.valueChanges.subscribe(() => {
      this.isDisabledSignal.set(this.usersForm.invalid || this.usersForm.pristine);
    });
  }

  public readonly options = [
    { label: 'user-create.fields.role-options.developer', value: 'developer' },
    { label: 'user-create.fields.role-options.techLead', value: 'techLead' },
    { label: 'user-create.fields.role-options.manager', value: 'manager' }
  ];

  protected usersForm = this.formBuilder.group({
    name: ['', [Validators.minLength(3), Validators.maxLength(30)]],
    email: ['', [Validators.email]],
    role: this.options[0]
  });

  public submitForm(): void {
    if (this.usersForm.valid) {
      const { name, email, role } = this.usersForm.value;
      const userToSend: Users = {
        name: name || '',
        email: email || '',
        role: role?.value || ''
      };
      this.userService.addUser(userToSend).subscribe();
    }
    this.resetForm();
  }

  private resetForm(): void {
    this.usersForm.reset();
    this.usersForm.get('role')?.setValue(this.options[0]);
  }
}
