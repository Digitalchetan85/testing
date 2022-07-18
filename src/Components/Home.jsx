import React, { useEffect } from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import second from "../images/second.png";
import Image2 from "../images/gallery/image-2.png";
import Image3 from "../images/gallery/image-6.png";
import Image4 from "../images/gallery/image-4.png";
import MainSlider from "./Includes/MainSlider";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <MainSlider />
      <div className="py-3 py-md-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={4}></Col>
            <Col md={10}>
              <h2 className="text-primary text-center py-3">
                Welcome to Tselazang Boutique Hotel
              </h2>
              <p>
                Tselazang Boutique budget hotel is in the heart of Gangtok
                offering amenities suitable for common man. It's situated in a
                convenient location close to all local amenities. The place is
                attractive and most of our rooms overlook the mountain view
                where you can enjoy the Pristine scenery. Most times of the year
                you can view the very high mountains of Himalayas, its complex
                geologic structure, large valleys, deep river gorges and rich
                vegetarian.
              </p>
              <p>
                We are in Arithang and a home to Pedestrianized MG Market.
                Restaurants serve local tea, traditional thupka noodles and Momo
                dumplings, while chic cafes offer coffees and pastries.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="">
        <Container fluid>
          <Row className="justify-content-center bg-light">
            <Col md={4} className="align-self-center">
              <div className="text-center">
                <p className="p-3">
                  We offer Boarding and lodging services affordable to common
                  man. We have 8 triple Bedded Rooms and one 4 bedded Bedrooms
                  fitted with modern amenities. The Rooms are spacious and have
                  24 hours hot and cold-water supply, Television and WIFI
                  facilities.
                </p>
              </div>
            </Col>
            <Col md={8}>
              <div className="">
                <Image src={second} className="img-fluid" alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="location" className="position-relative">
        <div>
          <div className="">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3544.4505511921366!2d88.60675871505389!3d27.330379382949488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x515b9d66564c8078!2zMjfCsDE5JzQ5LjQiTiA4OMKwMzYnMzIuMiJF!5e0!3m2!1sen!2sin!4v1649853188876!5m2!1sen!2sin"
              width="100%"
              height="450"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="d-none d-md-block position-absolute top-50 start-0 translate-middle-y bg-light p-2 ms-5 border border-5 border-primary">
            <div className="p-3">
              <h2 className="text-primary">Tselazang Boutique Hotel</h2>
              <p>Arithang, Near SP Turning</p>
              <p>Gangtok - 737101</p>
              <p>Phone - 70033 95709/89727 29358/96357 92999/90623 21664</p>
            </div>
          </div>
          <div className="position-absolute top-50 start-0 translate-middle-y ms-3 d-block d-md-none bg-light p-2 border border-5 border-primary">
            <div className="p-3">
              <h2 className="text-primary">Tselazang Boutique Hotel</h2>
              <p>Arithang, Near SP Turning</p>
              <p>Gangtok - 737101</p>
              <p>Phone - 70033 95709/89727 29358/96357 92999/90623 21664</p>
            </div>
          </div>
        </div>
      </div>
      <div id="gallery" className="py-3 py-md-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col md={12}>
              <h2 className="text-primary text-center py-3">Gallery</h2>
              <Row className="justify-content-center g-3">
                <Col md={4}>
                  <div className="text-center">
                    <Link to="/gallery" className="text-decoration-none">
                      <Image src={Image2} className="img-fluid" alt="" />
                    </Link>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="text-center">
                    <Link to="/gallery" className="text-decoration-none">
                      <Image src={Image3} className="img-fluid" alt="" />
                    </Link>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="text-center">
                    <Link to="/gallery" className="text-decoration-none">
                      <Image src={Image4} className="img-fluid" alt="" />
                    </Link>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Home;
