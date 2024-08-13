import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private api_url = environment.apiURL;

  constructor(private http: HttpClient) { }

  login(data:{email:string,password:string}){
    return this.http.post<any>(this.api_url + "auth/login",data);
  }

  logout(){
    const token = localStorage.getItem('userToken');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.post<any>(this.api_url + "auth/logout", { headers });
  }
}
