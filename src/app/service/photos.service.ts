import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  url: string = 'https://api.unsplash.com/'
  localhost: string = 'http://uri.unplash/?code=3T87tkW13p8uhqiU50pZUFsknDGr-RZHduKYFGuF3vk'
  local: string = 'urn:ietf:wg:oauth:2.0:oob'
  private key: string = 'WOFZ0_n3NymUJsDbWG_7AhJ4SCE-EVpzRgN3sEVYgTY'
  constructor(private http: HttpClient) {}

  httpHeaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getApi(): Observable<object>{
    const getURL = this.url + `?client_id=${this.key}`
    return this.http.get(this.localhost, this.httpHeaders);
  }
}
