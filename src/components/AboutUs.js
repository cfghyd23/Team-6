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
      <div className=' p-5'>
        <h1 className='text-danger'>Who are we?</h1>
        <p>We are Blood Warriors Foundation, a registered NGO with a visionary mission to empower the community and break the stigmas surrounding blood donation for Thalassemia patients. We aspire to be the backbone of support for those affected by this life-altering blood disorder. By fostering policy-level change and promoting prenatal diagnosis, we aim to identify carriers of Thalassemia, and build a future where this debilitating disorder is a thing of the past.</p>
      </div>
    <br/>
    <br/>
    

    </div>
  )
}

export default AboutUs