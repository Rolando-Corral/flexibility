import { Component } from '@angular/core';
import { Observable } from 'rxjs';
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
    title: 'Dashboard',
    subtitle: 'Listado de comercios registrados en la plataforma',
  }

  public shops: Observable<any[]> = this.dataTestService.getShops();



  constructor(private dataTestService: DataTestService) {}


  ngOnInit(): void {
    this.shops.subscribe(data => {
      console.log('Shops data:', data);
    });
  }

}
