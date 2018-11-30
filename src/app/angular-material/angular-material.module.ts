import { NgModule } from '@angular/core';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatMenuModule } from '@angular/material';

@NgModule({
    imports: [MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatMenuModule],
    exports: [MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatMenuModule],
})
export class AngularMaterialModule { }
