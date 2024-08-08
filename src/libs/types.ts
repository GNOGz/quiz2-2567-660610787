// You can define interfaces for all React components here.
// Do not forget to export properly.
interface ReplyProps {
    ImagePath:string, 
    username:string, 
    replyTitle:string, 
    likes:number
}
export type { ReplyProps };
interface CommentComponent {
    ImagePath: string;
    username: string;
    commentTitle: string;
    likes: number;
    replies: ReplyProps[] | any;
  }
export type { CommentComponent };
