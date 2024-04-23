import React from 'react';
import slideshowPic1 from '../../assets/output.jpg';
import slideshowPic2 from '../../assets/money.jpeg';
import slideshowPic3 from '../../assets/ai.jpg';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slideshowPic1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Helps Eliminate Food Waste</h3>
            <p>Reduce food waste by efficiently managing your pantry items.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slideshowPic3}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>AI Recipe Generation</h3>
            <p>
              Get personalized recipe suggestions based on your available
              ingredients.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slideshowPic2}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Saves Money and Promotes Health</h3>
            <p>
              Save money by using what you have and eat healthier homemade
              meals.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default LandingPage;
