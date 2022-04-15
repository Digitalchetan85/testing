import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import * as Yup from "yup";

const Contact = () => {
  const [formStatus, setformStatus] = useState("");

  const initialValues = {
    name: "",
    email: "",
    phone: "",
  };

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().required("required").email("Invalid email format"),
    phone: Yup.string()
      .required("required")
      .matches(phoneRegExp, "Phone No is not valid")
      .min(10, "Phone No Minimum 10 Digits")
      .max(10, "Phone No Minimum 10 Digits"),
  });

  const onSubmit = (values) => {};
  return (
    <>
      <div className="py-3 py-md-5 bg-primary">
        <h1 className="text-white text-center">Contact</h1>
      </div>
      .
      <section id="contact-1" className="pt-3 pb-3 pt-md-5 pb-md-5">
        <Container>
          <Row>
            <Col md={4}>
              <div className="text-center rounded p-3">
                <i className="fas fa-map-marker-alt fs-3 p-3 text-primary bg-white border border-primary rounded-circle"></i>

                <address className="mt-3">
                  <h2 className="text-primary">Tselazang Boutique Hotel</h2>
                  <p className="text-primary text-center fw-bold mb-0">Arithang, Near SP Turning</p>
                  <p className="text-primary text-center fw-bold mb-0">Gangtok - 737101</p>
                </address>
              </div>
            </Col>
            <Col md={4}>
              <div className="text-center rounded p-3">
                <i className="fas fa-phone-volume fs-3 p-3 text-primary bg-white border border-primary rounded-circle"></i>

                <address className="mt-3">
                  <p className="text-center">
                    <a
                      className="text-decoration-none text-primary fw-bold fs-5"
                      href="tel:07003395709"
                    >
                      +91 70033 95709
                    </a>
                    <br></br>
                    <a
                      className="text-decoration-none text-primary fw-bold fs-5"
                      href="tel:08972728358"
                    >
                      +91 89727 29358
                    </a>
                  </p>
                </address>
              </div>
            </Col>
            <Col md={4}>
              <div className="text-center rounded p-3">
                <i className="fas fa-envelope fs-3 p-3 text-primary bg-white border border-primary rounded-circle"></i>

                <address className="mt-3">
                  <div className="text-center">
                    <a
                      className="text-decoration-none text-primary fw-bold fs-5"
                      href="mailto:info@Tselazang.com"
                    >
                      info@Tselazang.com
                    </a>
                  </div>
                </address>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <div className="py-3 py-md-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            <h2 className="text-primary text-center py-3">
              Any Queries? <br></br> Please write a Mail to Us.
            </h2>
            <Col md={6} className="align-self-center">
              <div className="text-center">
                <h4 className="text-center">Tariff</h4>
                <Table bordered hover>
                  <thead>
                    <tr>
                      <th>Sl.no</th>
                      <th>Rooms</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td> 3 Bedded Rooms Facing the Valley</td>
                      <td>Rs 2500/- each</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>3 Bedded Rooms Not Facing the Valley</td>
                      <td>Rs 2000/- each</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>4 Bedded Rooms Facing the Valley</td>
                      <td>Rs 3500/- each</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>
                        Off seaseon discount from 16th June to 30th September
                      </td>
                      <td>30% Off</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Season Discount from October to December</td>
                      <td>20% Off</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Season Discount from January to March</td>
                      <td>40% Off</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Col>
            <Col md={6}>
              <div className="p-3 bg-white">
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={onSubmit}
                >
                  <Form className="p-3">
                    <Row className="mb-3">
                      <Col md={12}>
                        <div className="mb-3">
                          <Field
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            placeholder="Name"
                          />
                          <small className="text-danger">
                            <ErrorMessage name="name" />
                          </small>
                        </div>
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Col md={12}>
                        <div className="mb-3">
                          <Field
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            placeholder="Email"
                          />
                          <small className="text-danger">
                            <ErrorMessage name="email" />
                          </small>
                        </div>
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Col md={12}>
                        <div className="mb-1">
                          <Field
                            type="tel"
                            className="form-control"
                            id="phone"
                            name="phone"
                            placeholder="Enter phone number"
                          />
                          <small className="text-danger">
                            <ErrorMessage name="phone" />
                          </small>
                        </div>
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Col md={12}>
                        <div className="mb-1">
                          <Field
                            as="textarea"
                            rows="6"
                            type="text"
                            className="form-control"
                            id="message"
                            name="message"
                            placeholder="Message"
                          />
                          <small className="text-danger">
                            <ErrorMessage name="message" />
                          </small>
                        </div>
                      </Col>
                    </Row>
                    <Row className="">
                      <Col md={12}>
                        {formStatus ? (
                          <div className="alert alert-success p-3 text-center">
                            {formStatus}
                          </div>
                        ) : null}
                      </Col>
                    </Row>
                    <Row className="">
                      <Col md={12}>
                        <div className="">
                          <Button
                            className="btn btn-success text-white text-uppercase form-control"
                            type="submit"
                          >
                            Submit
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </Form>
                </Formik>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3544.4505511921366!2d88.60675871505389!3d27.330379382949488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x515b9d66564c8078!2zMjfCsDE5JzQ5LjQiTiA4OMKwMzYnMzIuMiJF!5e0!3m2!1sen!2sin!4v1649853188876!5m2!1sen!2sin"
          width="100%"
          height="450"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
