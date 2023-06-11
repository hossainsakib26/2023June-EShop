export class Category {
  id: number = 0;
  name: string = '';
  image: string = '';

  userId?: number = 0;
  creationDate?: Date = new Date();
  isDelete?: boolean = false;
}
