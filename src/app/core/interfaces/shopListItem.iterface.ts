import { CardConfig } from "src/app/shared/molecules/generic-card/interface/genric-card.interface";
import { Shop } from "./shop.interface";

export interface ShopListItem {
  shop: Shop;
  card: CardConfig;
}