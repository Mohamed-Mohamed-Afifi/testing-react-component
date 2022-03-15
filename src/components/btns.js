import { Container } from "react-bootstrap";
import React from "react";
function Button({button, filter}) {
  return (
      <Container className="text-center">
      <h5 className="cat-heading text-center my-3">Choose any product</h5>
      <div className="buttons d-flex flex-lg-row flex-column mx-auto text-center justify-content-center align-items-lg-center my-5 col-8">
          {
              button.map((cat, i)=>{
                  return <button type="button" onClick={()=> filter(cat)} className="btn mx-lg-3" key={i}>{cat}</button>
              })
          }
      </div>

      </Container>
  )
}

export default Button;
