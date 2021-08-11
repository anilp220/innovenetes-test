import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  url = 'https://api.github.com/';
  constructor(private httpClient: HttpClient) { }

  getUser(username: string) {
    return this.httpClient.get(this.url + 'users/' + username + '/repos')
      .toPromise()
  }
}
