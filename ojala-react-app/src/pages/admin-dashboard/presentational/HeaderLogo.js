import React from "react";
import ojalaLogo from "assets/ojala_logo.png";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { getAdminLogout, postAdminLogin } from 'services/admin-login-service'

function HeaderLogo({ isAdmin }) {
  const handleLogout = async () => {
    try {
      await getAdminLogout();
      // Burada gerekli diğer çıkış işlemlerini gerçekleştirebilirsiniz.
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <Container className="header-logo-container my-1" fluid>
      <Container fluid className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <div>
            <Image
              className="header-logo"
              src={isAdmin ? ojalaLogo : "path/to/normal_logo.png"}
              fluid
            />
          </div>
          <div className="text-center ms-3">
            <span className="header-text">Welcome Back Admin!</span>
          </div>
        </div>
        {isAdmin && (
          <div className="d-flex align-items-center">
            <InputGroup className="search-bar">
              <FormControl
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon2"
                style={{ maxWidth: "200px" }}
              />
              <Button variant="primary" id="button-addon2" className="ms-3">
                Search
              </Button>
            </InputGroup>
			  <Button variant="primary" onClick={handleLogout} className="ms-3">
              Log Out
            </Button>
          </div>
        )}
      </Container>
    </Container>
  );
}

export default HeaderLogo;
