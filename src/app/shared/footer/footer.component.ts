import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `<div class="footer">
              Jonathan Agüero - {{year}}
             </div>`,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  year = new Date().getFullYear();

  constructor() { }

}
