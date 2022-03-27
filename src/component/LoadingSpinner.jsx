import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Spinner } from "react-bootstrap";
export default function LoadingSpinner(props) {
    return (
     <>
        {props.type === "main"? (
          <div
          className="d-flex justify-content-center align-items-center mt-5"
          style={{ width: "100%" }}
        >
          <Spinner animation="grow" variant="danger" />
          <Spinner animation="grow" variant="warning" className="ms-2 me-2"/>
          <Spinner animation="grow" variant="info" />
        </div>
        ):(<div
          className="d-flex justify-content-center align-items-center"
          style={{ width: "100%" }}
        >
          <Spinner animation="border" variant="dark" />
        </div>)}
      </>
    );
  }

