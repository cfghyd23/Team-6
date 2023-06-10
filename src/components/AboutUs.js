import React from 'react'
import Carousel from "react-bootstrap/Carousel";
import cfg4 from "../assets/cfg4.jpg";
import cfg1 from "../assets/cfg1.jpg";
import cfg5 from "../assets/cfg5.jpg";
function AboutUs() {
    let obj={
        width:"400px",
        padding: "5px 100px ",
        height: "630px",
      }
   
  return (
    
    <div>
      <Carousel>
        <Carousel.Item>
        <img style = {obj} className="d-block w-100" src={cfg4} alt="Second slide" />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style = {obj} className="d-block w-100" src={cfg1} alt="Second slide" />

          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style = {obj} className="d-block w-100" src={cfg5} alt="Third slide" />

          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    <br/>
    <br/>
    

    </div>
  )
}

export default AboutUs