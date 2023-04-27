import React, { useEffect, useState } from "react";
import "../../../pages/stylePages.scss";
import PostCategory from "../post/PostCategory";
import PostTitle from "../post/PostTitle";
import PostMeta from "../post/PostMeta";
import {
  collection,
  limit,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../../firebase-app/firebase-config";
import { useAuth } from "../../../context/context-config";

const HomeFreature = () => {
  const { users } = useAuth();
  console.log(users);
  const [posts, setPosts] = useState();
  useEffect(() => {
    const colRef = collection(db, "posts");
    const q = query(colRef, where("Hot", "==", true), limit(3));
    onSnapshot(q, (snapshot) => {
      const rs = [];
      snapshot.forEach((item) => {
        rs.push({
          id: item.id,
          ...item.data(),
        });
      });
      setPosts(rs);
    });
  }, []);

  return (
    <div className="container-home">
      <div className="wrap-fea">
        <div className="header-fea">Feature</div>
        <div className="gird-fea">
          {posts?.length > 0 &&
            posts.map((item) => {
              const author = users.map((user) => {
                if (user.id === item.userId) {
                  return user.Fullname;
                }
              });
              const timestamp = item.createdAt;
              const date = new Date(timestamp?.seconds * 1000);
              const day = date.getDate();
              const month = date.getMonth() + 1;
              const daymonth = `${month}/${day}`;
              return (
                <div
                  style={{ backgroundImage: `url(${item.image})` }}
                  className="item-fea"
                  key={item.image}
                >
                  <div className="layout"></div>
                  <div className="header-item">
                    <PostCategory>{item.Categories}</PostCategory>
                    <PostMeta
                      className={"wapper-author"}
                      date={daymonth ? daymonth : "Mar 23"}
                      author={author}
                    ></PostMeta>
                  </div>
                  <PostTitle>{item.Title}</PostTitle>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default HomeFreature;
