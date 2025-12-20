import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericButtonConfig } from './interface/generic-button.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'generic-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './generic-button.component.html',
  styleUrls: ['./generic-button.component.scss'],
})
export class GenericButtonComponent {

  @Input() public config!: GenericButtonConfig;

  constructor(private router: Router) { }

  public onClick(): void {
    if (this.config.action) {
      this.config.action();
      return;
    }

    if (this.config.route) {
      this.router.navigate([this.config.route]);
    }
  }
}
