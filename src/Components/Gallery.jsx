import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import Image1 from "../images/gallery/image-1.png";
import Image2 from "../images/gallery/image-2.png";
import Image3 from "../images/gallery/image-3.png";
import Image4 from "../images/gallery/image-4.png";
import Image5 from "../images/gallery/image-5.png";
import Image6 from "../images/gallery/image-6.png";
import Image7 from "../images/gallery/image-7.png";
import Image8 from "../images/gallery/image-8.png";
import Image9 from "../images/gallery/image-9.png";
import Image10 from "../images/gallery/image-10.png";

const Gallery = () => {
  const images = [
    { id: 1, imgName: Image1, alt: "", tag: "" },
    { id: 2, imgName: Image2, alt: "", tag: "" },
    { id: 3, imgName: Image3, alt: "", tag: "" },
    { id: 4, imgName: Image4, alt: "", tag: "" },
    { id: 5, imgName: Image5, alt: "", tag: "" },
    { id: 6, imgName: Image6, alt: "", tag: "" },
    { id: 7, imgName: Image7, alt: "", tag: "" },
    { id: 8, imgName: Image8, alt: "", tag: "" },
    { id: 9, imgName: Image9, alt: "", tag: "" },
    { id: 10, imgName: Image10, alt: "", tag: "" },
  ];

  

  return (
    <div>
      <div className="py-3 py-md-5 bg-primary">
        <h1 className="text-white text-center">Gallery</h1>
      </div>
      <div id="gallery" className="pt-3 pb-3 pt-md-5 pb-md-5 bg-light">
        <Container>
          <SimpleReactLightbox>
            <SRLWrapper>
              <Row className="g-3">
                {images.map((item) => (
                  <Col md={4} xs={6} key={item.id}>
                    <div className="m-1 text-center border rounded">
                      <Link to={item.imgName}>
                        <Image
                          src={item.imgName}
                          alt={item.alt}
                          className="img-fluid"
                        />
                      </Link>
                    </div>
                  </Col>
                ))}
              </Row>
            </SRLWrapper>
          </SimpleReactLightbox>
        </Container>
      </div>
    </div>
  );
};

export default Gallery;
