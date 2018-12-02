import { NgModule } from '@angular/core';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatMenuModule, MatChipsModule } from '@angular/material';

@NgModule({
    imports: [MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatMenuModule, MatChipsModule],
    exports: [MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatMenuModule, MatChipsModule],
})
export class AngularMaterialModule { }
