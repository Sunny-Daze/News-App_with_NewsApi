import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
  const capitilizeText = (s) => {
    return s[0].toUpperCase() + s.slice(1);
  };

  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(false);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);

  const fetchNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api}&page=1&pagesize=${props.pageSize}`;
    setloading(true);
    let data = await fetch(url);
    props.setProgress(50);
    // console.log(data)
    let parsedData = await data.json();
    // console.log(parsedData);
    props.setProgress(75);
    setarticles(parsedData.articles);
    settotalResults(parsedData.totalResults);
    setloading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    document.title = `News App - ${capitilizeText(props.category)}`;
    fetchNews();
    //eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.api}&page=${
      page + 1
    }&pagesize=${props.pageSize}`;
    setpage(page + 1);
    let data = await fetch(url);
    // console.log(data)
    let parsedData = await data.json();
    // console.log(parsedData);
    setarticles(articles.concat(parsedData.articles));
    settotalResults(totalResults);
  };

  return (
    <>
      <h3
        className="text-center"
        style={{ marginBottom: "25px", marginTop: "70px" }}
      >
        News Mongo
      </h3>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imageurl={element.urlToImage}
                    newsurl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
}
