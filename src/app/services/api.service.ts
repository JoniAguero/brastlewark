import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class ApiService {

  URL = 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json';

  constructor(private http: HttpClient) { }

  // Uses http.get() to load data from a single API endpoint
  getAllData() {
    return this.http.get(this.URL);
  }
}
