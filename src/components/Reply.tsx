"use client";
import { ReplyProps } from "../libs/types";

export default function Reply({ ImagePath, username, replyTitle, likeNum }:any) {
  return(
  <div className="d-flex gap-2 my-2 ps-5">
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
      <span>{replyTitle}</span>
      <div className="d-flex align-items-center gap-1">
      { likeNum > 0 && <img src="/like.svg" width={20}></img> }
        { likeNum > 0 && <span className="text-muted">{likeNum} คน</span>}
      </div>
    </div>
  </div>);
}
