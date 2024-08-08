import Image from "next/image";
import styles from "./page.module.css";
import { comments } from "@/libs/comments";
import PostOwnner from "@/components/PostOwnner";
import Comment from "@/components/Comment";
import { ReplyProps } from "../libs/types";

interface CommentComponent {
  userImagePath: string;
  username: string;
  commentText: string;
  likeNum: number;
  replies: ReplyProps[];
}

export default function Home() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "ghostwhite" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm bg-white"
      >
        {/* Post Owner Example*/}
        <PostOwnner
          PostTitle="Yutthakarn Sajui 660610787"
          content="แอร์ห้อง 516 เย็นมากเลยครับ"
          profilePic="/profileImages/sajui_pic3.jpg"
          likes={0}
        ></PostOwnner>

        {/* map-loop render Comment component here */}
        {comments.map((cmd: CommentComponent) => (
          <Comment
            key={cmd.username}
            ImagePath={cmd.userImagePath}
            username={cmd.username}
            commentTitle={cmd.commentText}
            likes={cmd.likeNum}
            replies={cmd.replies}
          />
        ))}
      </div>
    </div>
  );
}
