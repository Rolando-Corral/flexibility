import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericButtonComponent } from '../../atoms/generic-button/generic-button.component';
import { GenericTitleComponent } from '../../molecules/generic-title/generic-title.component';
import { GenericButtonConfig } from '../../atoms/generic-button/interface/generic-button.interface';
import { TitleConfig } from '../../molecules/generic-title/interface/titles.iterface';

@Component({
  selector: 'generic-header',
  standalone: true,
  imports: [CommonModule, GenericTitleComponent, GenericButtonComponent],
  templateUrl: './generics-header.component.html',
  styleUrls: ['./generics-header.component.scss']
})
export class GenericsHeaderComponent {

  @Input() public titleConfig!: TitleConfig;
  @Input() public buttonConfig?: GenericButtonConfig;

}
