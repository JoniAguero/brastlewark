import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-details-gnome',
  template: `<div class="details-container">
              <div>
                <h4 class="details-title">{{title}}</h4>
              </div>
              <div class="details-info">
                <div class="details-info-icon">
                  <mat-icon class="arrow_right">arrow_right</mat-icon>
                </div>
                <div class="details-info-data">
                  <p>{{data}}</p>
                </div>
              </div>
            </div>`,
  styleUrls: ['./details-gnome.component.scss']
})
export class DetailsGnomeComponent implements OnInit {

  @Input() data: any;
  @Input() title: String;

  constructor() { }

  ngOnInit() {}

}
