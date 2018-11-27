import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-gnomes',
  templateUrl: './gnomes.component.html',
  styleUrls: ['./gnomes.component.scss']
})
export class GnomesComponent implements OnInit {

  data: any;

  constructor(private _apiService: ApiService) { }

  ngOnInit(): void {
    this.getAllData();
  }
  getAllData() {
    this._apiService.getAllData().subscribe(
      (data: any) => this.data = data.Brastlewark,
      err => console.error(err),
      () => console.log(this.data)
    );
  }

}
