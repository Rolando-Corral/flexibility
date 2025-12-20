import { Component } from '@angular/core';
import { GenericButtonConfig } from 'src/app/shared/atoms/generic-button/interface/generic-button.interface';
import { TitleConfig } from 'src/app/shared/molecules/generic-title/interface/titles.iterface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

   public buttonBackConfig: GenericButtonConfig = {
      label: 'Go to showroom',
      classMode: 'btn-unbordered primary',
      route: '/showroom'
    };
    
    public titleConfig: TitleConfig = {
      title: 'Dashboard',
      subtitle: 'Welcome to your dashboard',
      // iconT: 'bi-house',
      styleTitle: 'text-glow',
      // iconSb: 'bi-arrow-right'
    };


}
