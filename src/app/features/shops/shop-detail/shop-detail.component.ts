import { Component, Input } from '@angular/core';
import { Shop } from 'src/app/core/interfaces/shop.interface';

@Component({
  selector: 'shop-detail',
  templateUrl: './shop-detail.component.html',
  styleUrls: ['./shop-detail.component.scss']
})
export class ShopDetailComponent {

   @Input() shop: Shop | null = null;

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
