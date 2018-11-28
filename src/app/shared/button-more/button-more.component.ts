import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-more',
  template: `<div class="button-more">
              <button mat-icon-button>
                <mat-icon>arrow_drop_down</mat-icon>
              </button>
             </div>`,
  styleUrls: ['./button-more.component.scss']
})
export class ButtonMoreComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
