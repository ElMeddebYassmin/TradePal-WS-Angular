

export class Object{
  id: number;
  amount: number;
  status: string;
  name: string;
  description: string;
  category: ItemCategory;
  OwnerUsername: String;
  CategoryName:String;
}

export class ItemCategory {
  id: number;
  name: string;
  contains_items: string;
}


