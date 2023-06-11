import React from 'react'
import Carousel from "react-bootstrap/Carousel";
import cfg4 from "../assets/cfg4.jpg";
import cfg1 from "../assets/cfg1.jpg";
import cfg5 from "../assets/cfg5.jpg";
import one from "../assets/1.jpeg";
import two from "../assets/2.jpeg"
function AboutUs() {
    let obj={
        width:"400px",
        padding: "5px 100px ",
        height: "630px",
      }
   
  return (
    
    <div container >
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
      <div className='p-4 container'>
        <h2 className='text-danger text-center p-3'>Blood Analytics </h2>
        <div className="row text-center">
        <div className="col-6"><img src={one} width="90%"/></div>
        <div className="col-6"><img src={two} width="75%"/></div>
        </div>
      </div>
      <div className='container' >
      <div className='p-4'>
        <h2 className='text-danger'>Who are we?</h2>
        <p>We are Blood Warriors Foundation, a registered NGO with a visionary mission to empower the community and break the stigmas surrounding blood donation for Thalassemia patients. We aspire to be the backbone of support for those affected by this life-altering blood disorder. By fostering policy-level change and promoting prenatal diagnosis, we aim to identify carriers of Thalassemia, and build a future where this debilitating disorder is a thing of the past.</p>
      </div>
      <div className='p-4'>
        <h2 className='text-danger'>Why Blood donation is important?</h2>
        <p>Blood donation does not simply help that specific person but also contributes to a responsible gesture towards society. Moreover, it also enhances the health of the donor. As the cell depletion allows a way for production, not new cells that freshen our body system.
        Emphasize that blood donation is a lifesaving act that can make a significant difference in someone's life.Morale of ones individuality is satisfied.Moreover humanity comes into existence.
        Blood donation stimulates the production of new blood cells, which can improve cardiovascular health and reduce the risk of certain diseases.</p>
      </div>
      </div>
    </div>
  )
}

export default AboutUs