import { Injectable, signal } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Users } from '../interfaces/user.interface';
import { toObservable } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  usersData: Users[] = [
    { position: 1, name: 'Pedro', email: 'pedro@gmail.com', role: 'developer' },
    { position: 2, name: 'Tiago', email: 'tiago@gmail.com', role: 'developer' },
    { position: 3, name: 'João', email: 'joao@gmail.com', role: 'developer' },
    { position: 4, name: 'Pedro', email: 'pedro@gmail.com', role: 'developer' },
    { position: 5, name: 'Tiago', email: 'tiago@gmail.com', role: 'developer' },
    { position: 6, name: 'João', email: 'joao@gmail.com', role: 'developer' },
    { position: 7, name: 'Pedro', email: 'pedro@gmail.com', role: 'developer' },
    { position: 8, name: 'Tiago', email: 'tiago@gmail.com', role: 'developer' },
    { position: 9, name: 'João', email: 'joao@gmail.com', role: 'developer' }
  ];

  public usersSignal = signal<Users[]>(this.usersData);

  public getUsers(): Observable<Users[]> {
    return toObservable(this.usersSignal);
  }

  public addUser(user: Users): Observable<Users> {
    const newUser: Users = {
      ...user,
      position: this.usersSignal().length + 1
    };
    this.usersSignal.set([...this.usersSignal(), newUser]);
    return of(newUser);
  }
}
