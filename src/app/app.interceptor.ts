import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Provider } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";


const { apiUrl } = environment;
@Injectable()
export class AppInterceptor implements HttpInterceptor{
    API = '/api'
     intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
     if (req.url.startsWith('/api')) {
        req = req.clone({
            url: req.url.replace(this.API, apiUrl),
            withCredentials: true
        })
        
     }
        
        
     return next.handle(req);
     }
    
}

export const appInterceptorProviders: Provider = {
    useClass: AppInterceptor,
    multi: true,
    provide: HTTP_INTERCEPTORS,
}
  
