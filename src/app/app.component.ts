import { Component } from '@angular/core';
import { LoginService } from "./services/login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'Meow App 🐾';
  constructor(private readonly loginService: LoginService) {}

  public isLoggedIn(): boolean {
    return this.loginService.isLoggedIn();
  }

  public logout(): void {
    this.loginService.logoutUser();
  }
}
