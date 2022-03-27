import React from "react";
import defaultImg from "../../assets/defaultImg.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";

export default function CategoryPageItems({ title, description, imageUrl, newsUrl,  date }) {
    return (
      <>  
        <Card style={{ width: "100%" }} className="mx-auto my-3">
          <Card.Img variant="top" src={imageUrl ? imageUrl : defaultImg} style={{maxHeight: "220px"}} />
          <Card.Body>
            <Card.Title>{title ? title.slice(0, 50) : ""}...</Card.Title>
            <Card.Text style={{ color: "rgba(0,0,0,0.6)" }}>
              {description ? description.slice(0,90) : ""}...
            </Card.Text>
            <div >
              <small className=" fs-6 text-muted">
          <span className="text-dark ">{new Date(date).toGMTString()}</span>
              </small>
              <Button variant="secondary" href={newsUrl} className="float-end ">
                Read More
              </Button>
            </div>
          </Card.Body>
        </Card>
      </>
    );
  }

