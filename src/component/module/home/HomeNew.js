import React from "react";
import "../../../pages/stylePages.scss";
import PostCategory from "../post/PostCategory";
import PostTitle from "../post/PostTitle";
import PostMeta from "../post/PostMeta";
import PostImage from "../post/PostImage";

const HomeNew = () => {
  return (
    <div className="container-home">
      <div className="titleheader-new">Newest update</div>
      <div className="new-wrap">
        <div className="new-contentleft">
          <PostImage
            className={"new-contentleftimg"}
            url={"../../banlamviec1.jpg"}
            alt={"hinhanh"}
          ></PostImage>
          <PostCategory className={"catelogy2"}>Kiến Thức</PostCategory>
          <PostTitle className={"title-new"}>
            Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
          </PostTitle>
          <PostMeta date={"Mar 23"} author={"Andiez Le"}></PostMeta>
        </div>
        <div className="new-contentright">
          <div className="grid-content">
            <div className="grid-item">
              <PostImage
                className={"grid-itemimg"}
                url={"../../banlamviec1.jpg"}
                alt={"hinhanh"}
              ></PostImage>

              <div className="contentnew-right">
                <PostCategory className={"catelogy"}>Kiến Thức</PostCategory>
                <PostTitle className={"title-new-right"}>
                  Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
                </PostTitle>
                <PostMeta date={"Mar 23"} author={"Andiez Le"}></PostMeta>
              </div>
            </div>
            <div className="grid-item">
              <PostImage
                className={"grid-itemimg"}
                url={"../../banlamviec1.jpg"}
                alt={"hinhanh"}
              ></PostImage>

              <div className="contentnew-right">
                <PostCategory className={"catelogy"}>Kiến Thức</PostCategory>
                <PostTitle className={"title-new-right"}>
                  Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
                </PostTitle>
                <PostMeta date={"Mar 23"} author={"Andiez Le"}></PostMeta>
              </div>
            </div>
            <div className="grid-item">
              <PostImage
                className={"grid-itemimg"}
                url={"../../banlamviec1.jpg"}
                alt={"hinhanh"}
              ></PostImage>

              <div className="contentnew-right">
                <PostCategory className={"catelogy"}>Kiến Thức</PostCategory>
                <PostTitle className={"title-new-right"}>
                  Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
                </PostTitle>
                <PostMeta date={"Mar 23"} author={"Andiez Le"}></PostMeta>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="new-contentbot">
        <div className="grid-contentbot">
          <div className="contentbot-item">
            <PostImage
              className={"contentbot-itemimg"}
              url={"../../banlamviec1.jpg"}
              alt={"hinhanh"}
            ></PostImage>

            <PostCategory className={"catelogy2"}>Kiến Thức</PostCategory>
            <PostTitle className={"title-contentbot"}>
              Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
            </PostTitle>
            <PostMeta date={"Mar 23"} author={"Andiez Le"}></PostMeta>
          </div>
          <div className="contentbot-item">
            <PostImage
              className={"contentbot-itemimg"}
              url={"../../banlamviec1.jpg"}
              alt={"hinhanh"}
            ></PostImage>

            <PostCategory className={"catelogy2"}>Kiến Thức</PostCategory>
            <PostTitle className={"title-contentbot"}>
              Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
            </PostTitle>
            <PostMeta date={"Mar 23"} author={"Andiez Le"}></PostMeta>
          </div>
          <div className="contentbot-item">
            <PostImage
              className={"contentbot-itemimg"}
              url={"../../banlamviec1.jpg"}
              alt={"hinhanh"}
            ></PostImage>

            <PostCategory className={"catelogy2"}>Kiến Thức</PostCategory>
            <PostTitle className={"title-contentbot"}>
              Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
            </PostTitle>
            <PostMeta date={"Mar 23"} author={"Andiez Le"}></PostMeta>
          </div>
          <div className="contentbot-item">
            <PostImage
              className={"contentbot-itemimg"}
              url={"../../banlamviec1.jpg"}
              alt={"hinhanh"}
            ></PostImage>
            <PostCategory className={"catelogy2"}>Kiến Thức</PostCategory>
            <PostTitle className={"title-contentbot"}>
              Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
            </PostTitle>
            <PostMeta date={"Mar 23"} author={"Andiez Le"}></PostMeta>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNew;
