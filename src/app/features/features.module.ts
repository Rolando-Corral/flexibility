import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { DesingSystemShowroomComponent } from './desing-system-showroom/desing-system-showroom.component';
import { GenericButtonComponent } from '../shared/atoms/generic-button/generic-button.component';
import { GenericTitleComponent } from '../shared/molecules/generic-title/generic-title.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DesingSystemShowroomComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    GenericButtonComponent,
    GenericTitleComponent
  ]
})
export class FeaturesModule { }
