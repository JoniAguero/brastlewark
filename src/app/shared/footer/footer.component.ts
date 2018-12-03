import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `<div class="footer">
              Jonathan Agüero - {{year}}
             </div>`,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  year = new Date().getFullYear();

  constructor() { }

  ngOnInit() {
  }

}
