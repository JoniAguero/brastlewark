import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-professions-gnome',
  template: `<div class="container-professions">
              <h4 class="professions-title">Professions</h4>
              <ng-container *ngIf="professions && professions.length > 0; else elseTemplate">
                <mat-chip-list class="professions-items">
                  <mat-chip *ngFor="let profession of professions">{{profession}}</mat-chip>
                </mat-chip-list>
              </ng-container>
              <ng-template #elseTemplate>
                <p>No records found</p>
              </ng-template>
            </div>`,
  styleUrls: ['./professions-gnome.component.scss']
})
export class ProfessionsGnomeComponent {

  @Input() professions: string [];

  constructor() { }

}
