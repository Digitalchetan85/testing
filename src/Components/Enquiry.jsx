import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import * as Yup from "yup";

const Enquiry = () => {
  const [formStatus, setformStatus] = useState("");

  const initialValues = {
    name: "",
    email: "",
    phone: "",
  };

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

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
        <h1 className="text-white text-center">Enquiry</h1>
      </div>
.
      <div className="py-3 py-md-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={6}>
              <div className="p-3 bg-light">
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
                      <Col md={6}>
                        <div className="mb-1">
                          <Field
                            type="text"
                            className="form-control"
                            id="persons"
                            name="persons"
                            placeholder="No of Persons"
                          />
                          <small className="text-danger">
                            <ErrorMessage name="persons" />
                          </small>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="mb-1">
                          <Field
                            type="text"
                            className="form-control"
                            id="days"
                            name="days"
                            placeholder="No of Days"
                          />
                          <small className="text-danger">
                            <ErrorMessage name="days" />
                          </small>
                        </div>
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Col md={12}>
                        <div className="mb-1">
                          <Field
                            type="text"
                            className="form-control"
                            id="address"
                            name="address"
                            placeholder="Address"
                          />
                          <small className="text-danger">
                            <ErrorMessage name="address" />
                          </small>
                        </div>
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Col md={12}>
                        <div className="mb-1">
                          <Field
                            as="textarea"
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
    </>
  );
};

export default Enquiry;
