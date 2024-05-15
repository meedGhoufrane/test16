import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  
  // private apiUrl = `${environment.api}auth`;

  constructor(private http: HttpClient) { }

  // authenticate(request: any): Observable<any> {
  //   return this.http.post<any>(`${this.apiUrl}/authenticate`, request);
  // }
  
  // register(request: any): Observable<any> {
  //   return this.http.post<any>(`${this.apiUrl}/register`, request);
  // }

}
