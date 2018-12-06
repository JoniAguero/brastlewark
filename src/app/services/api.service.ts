import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BrastlewarkModel } from '../utils/models/Brastlewark.model';

@Injectable({
  providedIn: 'root'
})


export class ApiService {

  URL = 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json';

  constructor(private http: HttpClient) { }
  getData(counter: number) {
    return this.http.get(this.URL)
      .pipe(
      map((result: BrastlewarkModel) => result.Brastlewark.filter( item => item.id <= counter ))
    );
  }
  getDataByName(name: string) {
    return this.http.get(this.URL)
    .pipe(
      map((result: BrastlewarkModel) => result.Brastlewark.find(item => item.name === name))
    );
  }
  getDataById(id: number) {
    return this.http.get(this.URL)
      .pipe(
        map((result: BrastlewarkModel) => result.Brastlewark.find(item => item.id === id))
      );
  }

}
