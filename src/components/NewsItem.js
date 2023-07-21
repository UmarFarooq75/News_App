import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageurl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="my-4">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front ">
              <div className="badegs">
                <span className="badge rounded-pill bg-danger">{source}</span>
              </div>
              <img src={imageurl} className="card-img-top" alt="..." />
            </div>
            <div className="flip-card-back">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
              <a
                href={newsUrl}
                target="_black"
                className="btn btn-sm btn-primary"
              >
                Read More
              </a>
              <div className="card-footer">
                <small className="text">
                  By {!author ? "Unkown" : author} on{" "}
                  {new Date(date).toGMTString()}
                </small>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="card" style={{ height: "29rem" }}>
          <img
            src={imageurl}
            className="card-img-top"
            style={{ height: "15rem" }}
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a
              href={newsUrl}
              target="_black"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
          <div className="card-footer">
            <small className="text">
              By {!author ? "Unkown" : author} on {new Date(date).toGMTString()}
            </small>
          </div>
        </div> */}
      </div>
    );
  }
}

export default NewsItem;
