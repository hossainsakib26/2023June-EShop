export class SubCategory {
  id: number = 0;
  name: string = '';
  categoryId: number = 0;
  image: string = '';

  userId?: number = 0;
  creationDate?: Date = new Date();
  isDelete?: boolean = false;
}
