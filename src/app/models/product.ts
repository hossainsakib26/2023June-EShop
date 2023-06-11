export class Product {
  id: number = 0;
  name: string = '';
  price: number = 0;
  quantity: number = 0;
  hasDiscount?: boolean = false;
  discountPercent?: number = 0;
  images?: string[] = [];
  image: string = '';
  description: string = '';

  userId?: number = 0;
  creationDate?: Date = new Date();
  isDelete?: boolean = false;
}
