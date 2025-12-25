import { Component } from '@angular/core';
import { Shopping } from 'src/app/core/interfaces/shoppings.interface';
import { DataTestService } from 'src/app/core/services/data-test.service';
import { GenericButtonConfig } from 'src/app/shared/atoms/generic-button/interface/generic-button.interface';
import { TitleConfig } from 'src/app/shared/molecules/generic-title/interface/titles.iterface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

    public titleConfig: TitleConfig = {
      title: 'Dashboard'
    };
    public loading: boolean = false;

    constructor(private dataTestService: DataTestService) {}
}
