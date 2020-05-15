import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    FlexLayoutModule,
    MatDividerModule,
  ],
  exports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    FlexLayoutModule,
    MatDividerModule,
  ],
})
export class SharedModule {}
