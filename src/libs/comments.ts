import { CommentComponent } from "./types";

export const comments:any= [
  {
    username: "Lisa",
    userImagePath: "/profileImages/lisa.jpg",
    commentText: "จริงค่าาาาา",
    likeNum: 555,
    replies: [
      {
        username: "Cat Meme",
        userImagePath: "/profileImages/popcat.png",
        replyText: "ลิซ่าาาาาาา Rockstar",
        likeNum: 20,
      },
      {
        username: "หมาน้อย",
        userImagePath: "/profileImages/puppy.jpg",
        replyText: "จริงด้วยค้าบบบบบบบบ",
        likeNum: 0,
      },
      ,
    ],
  },
  {
    username: "Charlie Brown",
    userImagePath: "/profileImages/charliebrown.jpg",
    commentText: "บ้าไปแล้ว... หรือเปล่า?",
    likeNum: 0,
    replies: [],
  },
];
