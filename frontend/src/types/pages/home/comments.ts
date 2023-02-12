export interface CommentProps {
  createdAt: string;
  name: string;
  email: string;
  message: string;
}
export interface CommentsPageProps {
  fetchPage: (page: number, sort: number) => void;
  comments: CommentProps[];
  pages: number;
}
