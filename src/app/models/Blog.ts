import { Status } from "./Status";

export class Blog {
  id: number;
  title: string;
  content: string;
  image: string;
  status: Status;
  views: number;
  publicationDate: Date; 
}
