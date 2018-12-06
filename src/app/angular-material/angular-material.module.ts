import { NgModule } from '@angular/core';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatMenuModule, MatChipsModule,
MatFormFieldModule, MatSnackBarModule, MatProgressSpinnerModule } from '@angular/material';

@NgModule({
    imports: [MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatMenuModule, MatChipsModule,
    MatFormFieldModule, MatSnackBarModule, MatProgressSpinnerModule ],
    exports: [MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatMenuModule, MatChipsModule,
    MatFormFieldModule, MatSnackBarModule, MatProgressSpinnerModule ],
})
export class AngularMaterialModule { }
