import { Info, New, Product } from "@/models";
import { Todos } from "@/models/Todo";

export interface RootState {
  filter: string;
  todos: Todos[];
  user: any;
  infos: Info[];
  profileInitials: string | undefined;
  email: string;
  address: string;
  name: string;
  phone: string;
  uuid: string;
  products: Product[];
  news: New[];
  filterProduct: string;
}
