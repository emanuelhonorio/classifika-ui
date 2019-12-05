import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountService } from 'src/app/modules/account/services/account.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private accService: AccountService) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {

    if (this.accService.isLogado() && req.url.startsWith(environment.classifikaUrl)) {
      const dupReq = req.clone({
        headers: req.headers.set('Authorization', `Basic ${this.accService.getToken()}`),
      });
      return next.handle(dupReq);
    }

    return next.handle(req);
 }
}
