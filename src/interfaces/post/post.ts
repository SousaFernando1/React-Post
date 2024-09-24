export interface IPost {
  id?: number;
  title: string;
  description: string;
  author: string;
  createdAt: string;
}

export interface ICreatePost {
  title: string;
  description: string;
}
