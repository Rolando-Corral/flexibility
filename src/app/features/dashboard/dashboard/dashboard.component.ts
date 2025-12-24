import { Component } from '@angular/core';
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

  users: any[] = [];
  shoppings: Shopping[] = [];
  loading = false;

   public buttonShowroomConfig: GenericButtonConfig = {
      label: 'Go to showroom',
      classMode: 'btn btn-info',
      route: '/showroom'
    };

  public usersButtonConfig: GenericButtonConfig = {
    label: 'Cargar Compras',
    classMode: 'btn-unbordered primary',
    icon: 'bi-arrow-left',
    action: () => this.loadShoppings()
  };
    
    public titleConfig: TitleConfig = {
      title: 'Dashboard',
      subtitle: 'Welcome to your dashboard',
      // iconT: 'bi-house',
      styleTitle: 'text-glow',
      // iconSb: 'bi-arrow-right'
    };

    constructor(private dataTestService: DataTestService) {}

     loadUsers() {
    this.loading = true;
    this.dataTestService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.loading = false;
        console.log('Usuarios cargados', this.users);
      },
      error: (err) => {
        console.error('Error cargando usuarios', err);
        this.loading = false;
      }
    });
  }

loadShoppings() {
  this.loading = true;

  this.dataTestService.getShoppings().subscribe({
    next: (data: Shopping[]) => {
      this.shoppings = this.shoppingsMapper(data);
      this.loading = false;
      console.log('Shoppings cargados', this.shoppings);
    },
    error: (err) => {
      console.error('Error cargando shoppings', err);
      this.loading = false;
    }
  });
}


private shoppingMapper(data: Shopping): Shopping {
  return {
    id: data.id,
    commerce: data.commerce,
    items: data.items,
    total: data.total,
    date: new Date(data.date),
  };
}

private shoppingsMapper(data: Shopping[]): Shopping[] {
  return data.map(d => this.shoppingMapper(d));
}


}
