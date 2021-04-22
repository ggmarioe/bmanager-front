import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl = environment.api_url; 

  constructor(private _httpClient: HttpClient) { }

  public login(username: string, password: string){
    return this._httpClient.post<any>(`${this.apiUrl}token/`,{'username': username, 'password': password});
  }
}
