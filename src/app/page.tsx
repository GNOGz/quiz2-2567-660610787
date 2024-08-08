import Image from "next/image";
import styles from "./page.module.css";
import { comments } from "@/libs/comments";
import PostOwnner from "@/components/PostOwnner";
import Comment from "@/components/Comment";
import { ReplyProps } from "../libs/types";

interface CommentComponent {
  ImagePath: string;
  username: string;
  commentTitle: string;
  likes: number;
  replies: ReplyProps[] | any;
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
        <PostOwnner PostTitle="Yutthakarn Sajui 660610787" 
        content="ขอเยอะๆได้ไหมครับอาจารย์" 
        profilePic = "/profileImages/sajui_pic.jpg"
        likes = {0}
        >

        </PostOwnner>


        {/* map-loop render Comment component here */}
        {comments.map((cmd:any)=>(
          <Comment ImagePath={cmd.userImagePath} 
          username={cmd.username} 
          commentTitle={cmd.commentText} likes={cmd.likeNum} 
          replies={cmd.replies}></Comment>
        ))}

      </div>
    </div>
  );
}
