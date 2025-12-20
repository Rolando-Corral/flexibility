import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleConfig } from './interface/titles.iterface';

@Component({
  selector: 'generic-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './generic-title.component.html',
  styleUrls: ['./generic-title.component.scss']
})
export class GenericTitleComponent {

  @Input() public titleConfig: TitleConfig = {
    title: '',
    subtitle: '',
    iconT: '',
    styleTitle: '',
    iconSb: ''
  };

}
