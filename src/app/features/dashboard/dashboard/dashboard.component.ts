import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Shop } from 'src/app/core/interfaces/shop.interface';
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

  public shops: Shop[] = [];


  constructor(private dataTestService: DataTestService) {}


  public ngOnInit(): void {
    this.dataTestService.getShops().subscribe((data: Shop[]) => {
      this.shops = data;
      console.log('Shops data:', this.shops);
    });
  }


 public getShopIcon(type: string): string {
  const icons: Record<string, string> = {
    supermercado: 'assets/imgs/shops/super.png',
    carniceria: 'assets/imgs/shops/carne.png',
    panaderia: 'assets/imgs/shops/pan.png',
    verduleria: 'assets/imgs/shops/verdu.png',
    kiosco: 'assets/imgs/shops/kiosco.png',
    pizzeria: 'assets/imgs/shops/pizza.png',
    almacen: 'assets/imgs/shops/almacen.png',
    dietetica: 'assets/imgs/shops/diet.png',
  };

  return icons[type] ?? 'assets/imgs/shops/default.png';
}

}
