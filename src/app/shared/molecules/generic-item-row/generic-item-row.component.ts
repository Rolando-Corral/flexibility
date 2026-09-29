import { Component, Input } from '@angular/core';
import { CardConfig } from '../generic-card/interface/genric-card.interface';
import { getShopIcon } from '../../utils/shop-icon.util';

@Component({
  selector: 'generic-item-row',
  standalone: true,
  templateUrl: './generic-item-row.component.html',
  styleUrls: ['./generic-item-row.component.scss']
})
export class GenericItemRowComponent {

  @Input() public cardConfig!: CardConfig;
  public iconPath = getShopIcon(this.cardConfig?.type);

  constructor() { }

  ngOnInit(): void {
    this.iconPath = this.getIcon();
  }

  getIcon(): string {
    return getShopIcon(this.cardConfig?.type);
  }


}
