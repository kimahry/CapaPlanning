import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatInputModule, MatFormFieldModule, MatSelectModule, MatOptionModule, MatToolbarModule,
  MatButtonModule, MatIconModule, MatSidenavModule, MatListModule, MatCheckboxModule, MatTableModule,
  MatPaginatorModule, MatSortModule, MatProgressBarModule, MatProgressSpinnerModule, MatDialogModule
} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
// App
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ConfirmDialogComponent } from './modals/confirm-dialog/confirm-dialog.component';
import '../app/rxjs-operators';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // Material
    CdkTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCheckboxModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatDialogModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // Components
    ToolbarComponent,
    ConfirmDialogComponent,
    // Material
    CdkTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCheckboxModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatDialogModule
  ],
  entryComponents: [ConfirmDialogComponent],
  declarations: [ToolbarComponent, ConfirmDialogComponent]
})
export class SharedModule { }
