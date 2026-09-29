import { Component } from '@angular/core';
import { Shop } from 'src/app/core/interfaces/shop.interface';
import { DataTestService } from 'src/app/core/services/data-test.service';
import { CardConfig } from 'src/app/shared/molecules/generic-card/interface/genric-card.interface';
import { TitleConfig } from 'src/app/shared/molecules/generic-title/interface/titles.iterface';
import { getShopIcon } from 'src/app/shared/utils/shop-icon.util';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {


  // Configuraciones
  public titleConfig: TitleConfig = {
    title: 'Dashboard',
    subtitle: 'Listado de comercios registrados en la plataforma',
  }
  public cardConfig: CardConfig[] = [];

  public shops: Shop[] = [];
  public loading: boolean = false;
  public hasError: boolean = false;
  public isEmpty: boolean = false;
  public iconPath: string = '';

  // estado seleccionado
  public selectedShop: Shop | null = null;

  constructor(private dataTestService: DataTestService) { }

  public ngOnInit(): void {
    this.loadShopList();
  }

  public loadShopList(): void {
    this.loading = true;
    this.hasError = false;
    this.isEmpty = false;

    this.dataTestService.getShops().subscribe({
      next: (data: Shop[]) => {
        this.shops = data;
        this.iconPath = this.getIcon();

        this.isEmpty = !data || data.length === 0;
        this.loading = false;
      },
      error: () => {
        this.hasError = true;
        this.loading = false;
      }
    });
  }

  public onSelectShop(shop: Shop): void {
    this.selectedShop = shop;
    console.log('Selected shop:', this.selectedShop);
  }

  getIcon(): string {
    return getShopIcon(this.selectedShop?.type || '');
  }


}
