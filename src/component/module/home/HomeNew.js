import React from "react";
import "../../../pages/stylePages.scss";

const HomeNew = () => {
  return (
    <div className="container-home">
      <div className="titleheader-new">Newest update</div>
      <div className="new-wrap">
        <div className="new-contentleft">
          <img srcSet="../../banlamviec1.jpg" alt="hinhanh"></img>
          <div className="button-new">Kiến thức</div>
          <div className="title-new">
            Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
          </div>
          <div className="date-author">
            <div className="date">Mar 23</div>
            <div className="author">Andiez Le</div>{" "}
          </div>
        </div>
        <div className="new-contentright">
          <div className="grid-content">
            <div className="grid-item">
              <img srcSet="../../banlamviec.png" alt=""></img>
              <div className="contentnew-right">
                <div className="button-newright">Kiến thức</div>
                <div className="title-new-right">
                  Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
                </div>
                <div className="date-author">
                  <div className="date">Mar 23</div>
                  <div className="author">Andiez Le</div>
                </div>
              </div>
            </div>
            <div className="grid-item">
              <img srcSet="../../banlamviec.png" alt=""></img>
              <div className="contentnew-right">
                <div className="button-newright">Kiến thức</div>
                <div className="title-new-right">
                  Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
                </div>
                <div className="date-author">
                  <div className="date">Mar 23</div>
                  <div className="author">Andiez Le</div>
                </div>
              </div>
            </div>
            <div className="grid-item">
              <img srcSet="../../banlamviec.png" alt=""></img>
              <div className="contentnew-right">
                <div className="button-newright">Kiến thức</div>
                <div className="title-new-right">
                  Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
                </div>
                <div className="date-author">
                  <div className="date">Mar 23</div>
                  <div className="author">Andiez Le</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNew;
