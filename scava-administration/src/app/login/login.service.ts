import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private resourceUrl = 'http://localhost:8086/api/authentication';

  constructor(
      private httpClient: HttpClient
  ) { }

  login(data) {
    console.log(data);
    return this.httpClient.post(this.resourceUrl, data, {observe: 'response'});
  }

  saveToken(token: string) {
      localStorage.setItem('jwtToken', token);
  }

}
