import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleConfig } from './interface/titles.iterface';

@Component({
  selector: 'generic-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './generic-title.component.html',
  styleUrls: ['./generic-title.component.scss']
})
export class GenericTitleComponent implements OnInit {

  @Input() public titleConfig: TitleConfig = {
    title: '',
    subtitle: '',
    iconT: '',
    styleTitle: '',
    iconSb: ''
  };

  constructor() { }

  ngOnInit(): void {
    console.log('title: ', this.titleConfig);
  }

}
