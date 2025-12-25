export type ShopType =
  | 'supermercado'
  | 'verduleria'
  | 'carniceria'
  | 'panaderia'
  | 'fiambreria'
  | 'pescaderia'
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
}