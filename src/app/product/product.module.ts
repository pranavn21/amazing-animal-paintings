import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import {MatCard, MatCardModule} from '@angular/material/card';
import { FlexModule } from '@angular/flex-layout';
import {MatSnackBarModule} from '@angular/material/snack-bar'


@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    MatCard,
    MatCardModule,
    FlexModule,
    MatSnackBarModule
  ]
})
export class ProductModule { }
