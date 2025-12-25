import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { GenericsHeaderComponent } from '../shared/organims/generics-header/generics-header.component';
import { GenericButtonComponent } from '../shared/atoms/generic-button/generic-button.component';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    GenericButtonComponent,
    GenericsHeaderComponent
  ]
})
export class FeaturesModule { }
