export type Category = {
  id: number;
  text: string;
  state: string;
};

export type Writer = {
  nickName: string;
  images: Array<PostImage>;
  level: number;
};

export type PostImage = {
  id: string;
  image: string;
};

export type Results = {
  id: string;
  writer: Writer;
  categorty: Category;
  title: string;
  content: string;
  images: Array<PostImage>;
  value: string | null;
  state: string;
  viewCount: number;
  commentCount: number;
  created_at: string;
};

export type Data = {
  count: number;
  next: string;
  previus: string;
  results: Array<Results>;
};
