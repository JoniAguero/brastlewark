import { NgModule } from '@angular/core';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatMenuModule, MatChipsModule,
MatFormFieldModule, MatSnackBarModule } from '@angular/material';

@NgModule({
    imports: [MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatMenuModule, MatChipsModule,
    MatFormFieldModule, MatSnackBarModule ],
    exports: [MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatMenuModule, MatChipsModule,
    MatFormFieldModule, MatSnackBarModule ],
})
export class AngularMaterialModule { }
