import { Component, Input } from '@angular/core';
import { CardConfig } from '../generic-card/interface/genric-card.interface';

@Component({
  selector: 'generic-item-row',
  standalone: true,
  templateUrl: './generic-item-row.component.html',
  styleUrls: ['./generic-item-row.component.scss']
})
export class GenericItemRowComponent {

   @Input() public cardConfig!: CardConfig;
 
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
