import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { GenericsHeaderComponent } from '../shared/organims/generics-header/generics-header.component';
import { GenericButtonComponent } from '../shared/atoms/generic-button/generic-button.component';
import { GenericCardComponent } from '../shared/molecules/generic-card/generic-card.component';
import { GenericItemRowComponent } from '../shared/molecules/generic-item-row/generic-item-row.component';
import { ShopDetailComponent } from './shops/shop-detail/shop-detail.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ShopDetailComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    GenericButtonComponent,
    GenericsHeaderComponent,
    GenericCardComponent,
    GenericItemRowComponent
  ]
})
export class FeaturesModule { }
