import { Injectable } from '@angular/core';
import { SessionStorageService } from 'ngx-webstorage';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
const USER = 'user';
const ACCESS_TOKEN_KEY = 'access-token';
const REFRESH_TOKEN_KEY = 'refresh-token';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor(private sessionStorage: SessionStorageService, private http: HttpClient) {}

  clean(): void {
    this.sessionStorage.clear();
  }

  public saveUser(user: any): void {
    this.sessionStorage.clear(USER);
    this.sessionStorage.store(USER, JSON.stringify(user));
  }

  public getUser(): any {
    const user = this.sessionStorage.retrieve(USER);
    return user ? JSON.parse(user) : {};
  }

  public isLoggedIn(): boolean {
    return !!this.sessionStorage.retrieve(USER);
  }

  public getAccessToken(): string {
    return this.sessionStorage.retrieve(ACCESS_TOKEN_KEY);
  }

  public saveAccessToken(token: string): void {
    this.sessionStorage.store(ACCESS_TOKEN_KEY, token);
  }

  public getRefreshToken(): string {
    return this.sessionStorage.retrieve(REFRESH_TOKEN_KEY);
  }

  public saveRefreshToken(token: string): void {
    this.sessionStorage.store(REFRESH_TOKEN_KEY, token);
  }

  public refreshJwtToken(): Observable<any> {
    return this.http.post('/', {}).pipe(
      map((response: any) => {
        this.saveAccessToken(response.access);
        this.saveRefreshToken(response.refresh);
        return response; 
      })
    );
  }

  public verifyJwtToken(token: string): void {
  this.http.post('/', { token }).subscribe((response: any) => {
    //verified token mmmmmm action needed here btw
  });
}
}
