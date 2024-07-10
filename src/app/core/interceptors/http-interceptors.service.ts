import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptorService } from './api.interceptor.service';
import { ErrorInterceptorService } from './error.interceptor.service';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptorService, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true },
];