import React, { useEffect } from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import Image2 from "../images/image2.jpg";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div className="py-3 py-md-5 bg-primary">
        <h1 className="text-white text-center">Services</h1>
      </div>
      <div className="py-3 py-md-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8}>
              {/* <h2 className="text-primary text-center py-3">Welcome to Tselazang Boutique Hotel</h2> */}
              <ul>
                <li>
                  We offer Boarding and lodging services affordable to common
                  man. We have 8 triple Bedded Rooms and one 4 bedded Bedrooms
                  fitted with modern amenities. The Rooms are spacious and have
                  24 hours hot and cold-water supply, Television and WIFI
                  facilities.
                </li>
                <li>
                  Our Restaurant offer both Vegetarian and Non-vegetarian Food.
                  Breakfast is on the house and we provide Paratha, Puri, Bread
                  Butter, sandwiches etc. Our Breakfast also include south
                  delicious like Upma and Poha. We have separate arrangements
                  for making vegetarian and non-vegetarian food.
                </li>
                <li>
                  We can arrange and organize your transport schedule all over
                  Sikkim and neighbouring areas like Darjeeling, Nepal, and
                  Bhutan.
                </li>
                <li>
                  We Provide Pick up drop facilities from Airports namely,
                  Bagdogra ( west Bengal ) and Pakyong ( Gangtok ) /We also
                  provide Pick up and drop facilities from nearest Railway
                  station NJP/ Siliguri.
                </li>
              </ul>
            </Col>
            <Col md={4}>
              <div className="text-center">
                <Image src={Image2} className="img-fluid" alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Services;
