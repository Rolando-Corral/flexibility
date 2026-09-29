export const SHOP_ICONS: Record<string, string> = {
  supermercado: 'assets/imgs/shops/super.png',
  carniceria: 'assets/imgs/shops/carne.png',
  panaderia: 'assets/imgs/shops/pan.png',
  verduleria: 'assets/imgs/shops/verdu.png',
  kiosco: 'assets/imgs/shops/kiosco.png',
  pizzeria: 'assets/imgs/shops/pizza.png',
  almacen: 'assets/imgs/shops/almacen.png',
  dietetica: 'assets/imgs/shops/diet.png',
};

const DEFAULT_ICON = 'assets/imgs/shops/default.png';

export function getShopIcon(type: string): string {
  return SHOP_ICONS[type] ?? DEFAULT_ICON;
}