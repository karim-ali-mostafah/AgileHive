import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { StorageService } from 'src/app/core/services/storage.service';
import { tap } from 'rxjs';
const AUTH_API = 'http://';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class AuthenricatorService {

  constructor(private http: HttpClient, private storageService: StorageService) {}

  // login(username: FormControl, password: FormControl): Observable<any> {
  //   return this.http.post(
  //     AUTH_API + 'signin',
  //     {
  //       username: username.value,
  //       password: password.value,
  //     },
  //     httpOptions
  //   );
  // }
  // register(username: FormControl, email: FormControl, password: FormControl): Observable<any> {
  //   return this.http.post(
  //     AUTH_API + 'signup',
  //     {
  //       username: username.value,
  //       email:email.value,
  //       password: password.value,
  //     },
  //     httpOptions
  //   );
  // }

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${AUTH_API}/api/login`, { username, password }, httpOptions).pipe(
      tap((response: any) => {
        this.storageService.saveAccessToken(response.access); // Save access token
        this.storageService.saveRefreshToken(response.refresh); // Save refresh token
        this.storageService.saveUser(response.user); // Save user details
      })
    );
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(`${AUTH_API}/api/signup`, { username, email, password }, httpOptions).pipe(
      tap((response: any) => {
        this.storageService.saveAccessToken(response.access);
        this.storageService.saveUser(response.user);
      })
    );
  }

  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'signout', { }, httpOptions);
  }
}
