import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { Container, Form, Row, Col, Button, Image } from "react-bootstrap";
import formCover from "assets/form-cover.png";
import ojala_logo from "assets/ojala_logo.png";


const formValidation = yup.object({
  username: yup.string().required("Username is required"),
  password: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
});

function AdminLogin() {
  const handleSubmit = (values) => {
    
    console.log("Login submitted:", values);
  };

  return (
    <Container fluid className="px-0">
      
      <Col>
        <Image className="header-logo" src={ojala_logo} alt="Ojala Logo" fluid />
      </Col>

      <Container fluid className="my-4 w-75">
        <Row>
          {/* Login Form */}
          <Col md={6}>
            <Formik
              validationSchema={formValidation}
              onSubmit={handleSubmit}
              initialValues={{
                username: "",
                password: "",
              }}
            >
              {({ handleSubmit, handleChange, values, touched, errors }) => (
                <Form noValidate onSubmit={handleSubmit}>
                  <Row className="mb-3 gy-2">
                    
                    <Col md={12}>
                      <h1>Welcome back!</h1>
                    </Col>

                    {/* Username Input */}
                    <Col md={12}>
                      <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                          type="text"
                          name="username"
                          value={values.username}
                          onChange={handleChange}
                          isInvalid={touched.username && !!errors.username}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.username}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>

                    {/* Password Input */}
                    <Col md={12}>
                      <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          name="password"
                          value={values.password}
                          onChange={handleChange}
                          isInvalid={touched.password && !!errors.password}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.password}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  
                  <Container fluid className="w-75 my-4 text-center">
                    <Button type="submit">Login</Button>
                  </Container>
                </Form>
              )}
            </Formik>
          </Col>

          <Col md={6} style={{ marginTop: "5em"}}>
            <Image src={formCover} alt="Form Cover" fluid/>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default AdminLogin;
