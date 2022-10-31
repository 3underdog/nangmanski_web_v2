export type WriterImage = {
  id: string;
  image: string;
};
export type Writer = {
  nickName: string;
  images: Array<WriterImage>;
  level: number;
};

export type Comment = {
  comment_id: string | null;
  content: string;
  created_at: string;
  id: string;
  post_id: string;
  state: string;
  type: string;
  value: string | null;
  writer: Writer;
};

export type Comments = Array<Comment>;

export type ReplyType = {
  isReply: boolean;
  comment_id: string;
  comment_user: string;
  comment_content: string;
};
