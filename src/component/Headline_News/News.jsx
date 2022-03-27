import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component"; // install - npm i react-infinite-scroll-component
import "bootstrap/dist/css/bootstrap.min.css";                // install - npm install react-bootstrap bootstrap@5.1.3
import { Row  } from "react-bootstrap";
import NewsItem from "./NewsItem";
import LoadingSpinner from "../LoadingSpinner";

export default function News(props) {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const updateNews = async () =>{
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=10&page=
    ${page}`;
    props.setProgress(25);
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(40);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100);
  }

  useEffect(() => {
   updateNews();
   //eslint-disable-next-line
  }, [])
  
  const fetchMoreData = async () => {
    setPage(page+1)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=10&page=
    ${page}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    setLoading(false)
  };
 
    return (
      <>
        <Row style={{ borderBottom: "2px solid rgba(0,0,0,0.3)", marginLeft: "1.8px", marginTop: "30px" }}>
          <h1 className="d-flex align-items-center p-0 pb-2" style={{fontWeight: "600"}}>
            News<span className="text-muted">@</span>Hub {" "}
            <span className="badge bg-danger" style={{fontSize: "20px", margin: " 0 10px", letterSpacing: "1.3px", fontWeight: "600", textTransform: "uppercase"}}>
             Top Headlines
            </span>
          </h1>
        </Row>

        {!loading ?
          ( 
          <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<LoadingSpinner type="main"/>}
        >
        <Row
          className="d-flex "
          id="news_Container"
          style={{
            // maxHeight: "1200px",
            minHeight: "600px",
            marginTop: "20px",
          }}
        >   
           { articles.map((element) => {
            return  (
              <div key={element.url}>
                  <NewsItem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  />
             </div> 
            )
           })}
        </Row>    
        </InfiniteScroll>
          ) : ( <LoadingSpinner type="main"/> )
          }
      </>
    );
  }

