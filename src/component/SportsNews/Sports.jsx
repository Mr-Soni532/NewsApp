import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row } from "react-bootstrap";
import SportsItem from "./SportsItem";
import LoadingSpinner from "../LoadingSpinner";




export default function Sports(props) {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  
  const updateNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=business&apiKey=${props.apiKey}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles)
    setLoading(false)
  }
  
  useEffect(() => {
      updateNews();
   //eslint-disable-next-line
  }, [])


    return (
      <>
        <Row style={{marginTop: "80px"}}>
          <h1 className="badge bg-primary fs-5 px-3">Sports Highlights</h1>
        </Row>

        <Row
          className="d-flex "
          id="sports_container"
          style={{
            overflow: "scroll",
            overflowX: "hidden",
            maxHeight: "600px",
            
          }}
        >
          {loading ? (
            <LoadingSpinner type="side"/>
          ) : articles.map((element) => {
                return (
                  <div key={element.url}>
                    <SportsItem
                      title={element.title}
                      description={element.description}
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                    />
                  </div>
                );
              })}
        </Row>
      </>
    );
  }

