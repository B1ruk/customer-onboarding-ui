import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CustomerLayoutComponent } from './customer-layout/customer-layout.component';
import {SharedModule} from "../../shared/shared/shared.module";


@NgModule({
  declarations: [
    CustomerFormComponent,
    CustomerLayoutComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    SharedModule
  ]
})
export class CustomerModule { }
