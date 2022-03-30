import React from "react";

export default function NewsItem(props) {
  let { title, description, imageurl, newsurl, author, date } = props;
  return (
    <div className="my-3">
      <div className="card">
        <img
          src={
            imageurl
              ? imageurl
              : "https://www.albertadoctors.org/images/ama-master/feature/Stock%20photos/News.jpg"
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              From {author ? author : "Unknown"} on{" "}
              {new Date(date).toGMTString()}{" "}
            </small>
          </p>
          <a
            href={newsurl}
            target="_blank"
            className="btn btn-sm btn-dark"
            rel="noreferrer"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
