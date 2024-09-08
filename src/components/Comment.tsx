"use client";
import Reply from "./Reply";
import { ReplyProps } from "../libs/types";

interface CommentComponent {
  ImagePath: string;
  username: string;
  commentTitle: string;
  likes: number;
  replies: ReplyProps[];
}
export default function Comment({
  ImagePath,
  username,
  commentTitle,
  likes,
  replies,
}: CommentComponent) {
  return (
    <div>
      <div className="d-flex gap-2 my-2">
        <img
          src={ImagePath}
          width="48"
          height="48"
          className="rounded-circle"
          style={{ objectFit: "cover" }}
        />
        <div
          className="rounded rounded-3 p-2"
          style={{ backgroundColor: "#E5E7EB" }}
        >
          <span className="fw-semibold">{username}</span>
          <br />
          <span>{commentTitle}</span>
          <div className="d-flex align-items-center gap-1">
            {likes > 0 && <img src="/like.svg" width={20}></img>}
            {likes > 0 && <span className="text-muted">{likes}</span>}
          </div>
        </div>
      </div>
      {/* You can use map-loop to render Reply component here */}
      {replies.map((rep: any) => (
        <Reply
          key={rep.username}
          ImagePath={rep.userImagePath}
          username={rep.username}
          replyTitle={rep.replyText}
          likeNum={rep.likeNum}
        ></Reply>
      ))}
    </div>
  );
}
