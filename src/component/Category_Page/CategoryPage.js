
import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component"; 
import "bootstrap/dist/css/bootstrap.min.css";  
import { Row, Container } from "react-bootstrap";
import CategoryPageItem from "./CategoryPageItems";
import LoadingSpinner from "../LoadingSpinner"; 

export default function CategoryPage(props) {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const updateNews = async () =>{
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=12&page=
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
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=12&page=
    ${page}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    
  };
    return (
      <Container>
         <Row style={{ borderBottom: "2px solid rgba(0,0,0,0.3)", marginLeft: "1.8px", marginTop: "30px" }}>
          <h1 className="d-flex align-items-center p-0 pb-2" style={{fontWeight: "600"}}>
            News<span className="text-muted">@</span>Hub {" "}
            <span className="badge bg-primary" style={{fontSize: "20px", margin: " 0 10px", letterSpacing: "1.3px", fontWeight: "600"}}>
              {props.category.toUpperCase()}
            </span>
          </h1>
        </Row>

        {!loading ?
          ( 
            <InfiniteScroll
          dataLength={articles.length-2}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<LoadingSpinner type="main"/>}
        >
          <div
              className="d-flex flex-wrap "
              id="news_Container"
              style={{
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
          {
            articles.map((element) => {
              return (
                <div key={element.url} style={{maxWidth: "33.33%", padding: "15px"}}>
                  <CategoryPageItem
                    title={element.title}
                    description={element.description}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    date={element.publishedAt}
                  />
                </div>
              );
            })
          }
        </div>
        </InfiniteScroll>
          ) : ( <LoadingSpinner type="main"/> )
          }
      </Container>
    );
  }



 