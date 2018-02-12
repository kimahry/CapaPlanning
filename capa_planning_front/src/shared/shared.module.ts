import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatInputModule, MatFormFieldModule, MatSelectModule, MatOptionModule, MatToolbarModule,
  MatButtonModule, MatIconModule, MatSidenavModule, MatListModule, MatCheckboxModule, MatTableModule,
  MatPaginatorModule, MatSortModule, MatProgressBarModule, MatProgressSpinnerModule,
} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { ToolbarComponent } from './toolbar/toolbar.component';
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
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ToolbarComponent,
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
  ],
  declarations: [ToolbarComponent]
})
export class SharedModule { }
