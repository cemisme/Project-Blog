import React from "react";
import "../../../pages/stylePages.scss";
import PostCategory from "../post/PostCategory";
import PostTitle from "../post/PostTitle";
import PostMeta from "../post/PostMeta";

const HomeFreature = () => {
  return (
    <div className="container-home">
      <div className="wrap-fea">
        <div className="header-fea">Feature</div>
        <div className="gird-fea">
          <div className="item-fea">
            <div className="layout"></div>
            <div className="header-item">
              <PostCategory>Kiến Thức</PostCategory>
              <PostMeta
                className={"wapper-author"}
                date={"Mar 23"}
                author={"Andiez Le"}
              ></PostMeta>
            </div>
            <PostTitle>
              Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
            </PostTitle>
          </div>
          <div
            style={{ backgroundImage: `url(../../banlamviec.png)` }}
            className="item-fea"
          >
            <div className="layout"></div>

            <div className="header-item">
              <PostCategory>Kiến Thức</PostCategory>
              <PostMeta
                className={"wapper-author"}
                date={"Mar 23"}
                author={"Andiez Le"}
              ></PostMeta>
            </div>
            <PostTitle>
              Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
            </PostTitle>
          </div>
          <div className="item-fea">
            <div className="layout"></div>

            <div style={{}} className="header-item">
              <PostCategory>Kiến Thức</PostCategory>
              <PostMeta
                className={"wapper-author"}
                date={"Mar 23"}
                author={"Andiez Le"}
              ></PostMeta>
            </div>
            <PostTitle>
              Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
            </PostTitle>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFreature;
