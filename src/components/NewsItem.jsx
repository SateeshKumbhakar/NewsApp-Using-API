import React from "react";

export default function NewsItem(props){
  
    const defaultImgUrl =
      "https://staticg.sportskeeda.com/editor/2021/12/28fe7-16408341284496-1920.jpg";
    let { title, description, imgUrl, newsUrl, author, dateTime, source } = props;
    return (
      <div className="container my-3">
        <div className="card" style={{ marginTop: "28px" }}>
          <span
            className="  badge rounded-pill "
            style={{ color:"rgb(224 226 226)", background:"rgb(12 0 75)"}}
          ><i className="fas fa-chart-pie"></i>
            {source ? source : "Unknown Source"}
          </span>

          <img
            src={imgUrl ? imgUrl : defaultImgUrl}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title ? title.slice(0, 30) : ""}...</h5>
            <p className="card-text">
              {description ? description.slice(0, 60) : " "}...
            </p>
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : ""} {new Date(dateTime).toGMTString()}
              </small>
            </p>
            <a href={newsUrl ? newsUrl : " "} className="btn btn-dark btn-sm">
              Read More...
            </a>
          </div>
        </div>
      </div>
    );

}
