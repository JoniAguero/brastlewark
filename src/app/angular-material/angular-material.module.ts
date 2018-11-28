import { NgModule } from '@angular/core';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatCardModule } from '@angular/material';

@NgModule({
    imports: [MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatCardModule],
    exports: [MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatCardModule],
})
export class AngularMaterialModule { }
