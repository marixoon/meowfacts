import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  public loginUser(username: string): void {
    localStorage.setItem('user', JSON.stringify({ username: username }));
  }

  public logoutUser(): void {
    localStorage.removeItem('user');
  }

  public isLoggedIn(): boolean {
    return !!localStorage.getItem('user');

  }
}
