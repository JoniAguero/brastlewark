import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'front-end';
  items = ['op1', 'op2'];
  data: any;

  constructor(private _apiService: ApiService) {}

  ngOnInit(): void {
    this.getAllData();
  }
  getAllData() {
    this._apiService.getAllData().subscribe(
      data => this.data = data,
      err => console.error(err),
      () => console.log(this.data)
    );
  }
}
