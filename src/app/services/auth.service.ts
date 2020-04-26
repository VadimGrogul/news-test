import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { pluck } from "rxjs/operators";
import { Observable } from "rxjs";
import { UserAuth } from "../interfaces";

@Injectable({providedIn: 'root'})

export class AuthService {
  constructor(private http: HttpClient) {}

  login() {
    localStorage.setItem('isAuthUser', 'true')
  }

  logout() {
    localStorage.removeItem('isAuthUser');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('isAuthUser');
  }

  getUserData(): Observable<UserAuth> {
    return this.http.get<UserAuth>('assets/data.json')
      .pipe(
        pluck('user')
      )
  }
}
