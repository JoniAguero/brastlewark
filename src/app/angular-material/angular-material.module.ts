import { NgModule } from '@angular/core';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule } from '@angular/material';

@NgModule({
    imports: [MatInputModule, MatButtonModule, MatSelectModule, MatIconModule],
    exports: [MatInputModule, MatButtonModule, MatSelectModule, MatIconModule],
})
export class AngularMaterialModule { }
