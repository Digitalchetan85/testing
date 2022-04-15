import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const AboutUs = () => {
  return (
    <>
      <div className="py-3 py-md-5 bg-primary">
        <h1 className="text-white text-center">About Us</h1>
      </div>

      <div className="py-3 py-md-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={10}>
              {/* <h2 className="text-primary text-center py-3">Welcome to Tselazang Boutique Hotel</h2> */}
              <p>
                Tselazang Bourique budget hotel is in the heart of Gangtok
                offering amenities suitable for common man. It's situated in a
                convenient location close to all local amenities. The place is
                attractive and most of our rooms overlook the mountain view wher
                you can enjoy the Pristine scenery. Most times of the year you
                can view the very high mountains of Himalayas, its complex
                geologic structure, large valleys, deep river gorges and rich
                vegetarian.
              </p>
              <p>
                We are in Arihang and a home to Pedestrainized MG Market,
                Restuarants serve locakl tea, traditional thupka noodles and Mom
                dumplings, while chic cafes offer coffees and pastries.
              </p>
              <p>
                We offer Boarding and Lodging services affordable to common man.
                We have tripe bess and one four bedded Bedded Bedrooms fitted
                with modern amenities. The Rooms are spacious and have 24 hours
                hot and Cold-water supply, Television and WIfI facilities.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default AboutUs;
