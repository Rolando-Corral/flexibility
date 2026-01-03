export type ShopType =
  | 'supermercado'
  | 'verduleria'
  | 'carniceria'
  | 'panaderia'
  | 'kiosco'
  | 'pizzeria'
  | 'dietetica'
  | 'almacen'
  | 'mercado';

export interface Shop {
  id: number;
  name: string;
  type: ShopType;
  address: string;
  city: string;
  isOpen: boolean;
  phone: string;
}