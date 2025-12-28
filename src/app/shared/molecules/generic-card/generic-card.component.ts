import { Component, Input } from '@angular/core';
import { CardConfig } from './interface/genric-card.interface';

@Component({
  selector: 'generic-card',
  templateUrl: './generic-card.component.html',
  styleUrls: ['./generic-card.component.scss']
})
export class GenericCardComponent{

  @Input() public cardConfig!: CardConfig;

}
