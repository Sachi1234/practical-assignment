import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { ProductComponent } from './product/product.component';
import {MDBBootstrapModule} from "angular-bootstrap-md";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [ProductListComponent, ProductComponent],
    imports: [
        CommonModule,
        MDBBootstrapModule,
        RouterModule
    ]
})
export class ProductListModule { }
