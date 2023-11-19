import React from "react";
import { Formik } from "formik";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import adminLoginGif from "assets/admin-login.gif"
import ojala_logo from "assets/ojala_logo.png";
import schema from "schema/admin-login-schema-validation";
import {postAdminLogin} from "services/admin-login-service";
import { useNavigate } from "react-router-dom";

function AdminLogin() {

  const navigate = useNavigate();
  function redirectAfter3Seconds() {
    setTimeout(function () {
      navigate("/admin-dashboard", { replace: true });
    }, 2000);
  }
  const handleSubmit = async (values) => {
    const isAuthenticated = postAdminLogin(values);
    (await isAuthenticated===true) ? redirectAfter3Seconds() : alert(await isAuthenticated) ;
  };

  return (
    <Container fluid className="my-1">
      
      <Col>
        <Image className="header-logo" src={ojala_logo} alt="Ojala Logo" fluid />
      </Col>

      <Container fluid className="my-4 w-75">
        <Row>
          {/* Login Form */}
          <Col md={6}>
            <Formik
              validationSchema={schema}
              onSubmit={handleSubmit}
              initialValues={{
                email: "",
                password: "",
              }}
            >
              {({ handleSubmit, handleChange, values, touched, errors }) => (
                <Form noValidate onSubmit={handleSubmit}>
                  <Row className="mb-3 gy-2">
                    
                    <Col md={12}>
                      <h1>Welcome back!</h1>
                    </Col>

                    {/* email Input */}
                    <Col md={12}>
                      <Form.Group>
                        <Form.Label htmlFor="email">Email</Form.Label>
                        <Form.Control
                          id="email"
                          type="text"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          isInvalid={touched.email && !!errors.email}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.email}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>

                    {/* Password Input */}
                    <Col md={12}>
                      <Form.Group>
                        <Form.Label htmlFor="password">Password</Form.Label>
                        <Form.Control
                          id="password"
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

          <Col md={6} className="d-flex align-items-center">
            <Image src={adminLoginGif} alt="login animation" fluid/>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default AdminLogin;
