import { Component } from '@angular/core';
import { GenericButtonConfig } from 'src/app/shared/atoms/generic-button/interface/generic-button.interface';

@Component({
  selector: 'app-desing-system-showroom',
  templateUrl: './desing-system-showroom.component.html',
  styleUrls: ['./desing-system-showroom.component.scss']
})
export class DesingSystemShowroomComponent {

  public backButtonConfig: GenericButtonConfig = {
    label: 'Back',
    classMode: 'btn-unbordered primary',
    route: '/',
    icon: 'bi-arrow-left',
  };

}
