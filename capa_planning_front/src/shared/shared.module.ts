import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatInputModule, MatFormFieldModule, MatSelectModule, MatOptionModule, MatToolbarModule,
  MatButtonModule, MatIconModule, MatSidenavModule, MatListModule, MatCheckboxModule, MatTableModule,
  MatPaginatorModule, MatSortModule
} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { ToolbarComponent } from './toolbar/toolbar.component';

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
    MatSortModule
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
    MatSortModule
  ],
  declarations: [ToolbarComponent]
})
export class SharedModule { }
