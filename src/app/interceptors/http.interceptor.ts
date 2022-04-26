import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, finalize, Observable, retry, switchMap, take, tap, throwError } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class HttpInterceptor implements HttpInterceptor {

  token: string;
  tenat: string

  constructor(private authSrv: AuthService) {
    this.token = environment.adminToken;
    this.tenat = environment.adminTenat;
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  return this.authSrv.user$.pipe(take(1), switchMap(user =>{
   // if(!user) {
   //   return next.handle(request)
    //}

    const newReq = request.clone({
      headers:request.headers.set('Authorization',`Bearer ` +this.token).set("X-TENANT-ID",this.tenat)
    })

    return next.handle(newReq)
  }))
}

}

