import { NgModule } from '@angular/core';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatMenuModule, MatChipsModule,
MatFormFieldModule } from '@angular/material';

@NgModule({
    imports: [MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatMenuModule, MatChipsModule,
    MatFormFieldModule ],
    exports: [MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatMenuModule, MatChipsModule,
    MatFormFieldModule ],
})
export class AngularMaterialModule { }
