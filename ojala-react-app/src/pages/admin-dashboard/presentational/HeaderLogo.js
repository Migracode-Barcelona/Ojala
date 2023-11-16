import React from 'react';
import ojalaLogo from "assets/ojala_logo.png";
import Image from 'react-bootstrap/Image';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

function HeaderLogo({ isAdmin }) {
  return (
    <div className="header-logo-container">
      <Image className="header-logo" src={isAdmin ? ojalaLogo : 'path/to/normal_logo.png'} fluid />
      <span className="header-text">Welcome Back Admin!</span>
      {isAdmin && (
        <div className="search-bar-container">
          <InputGroup className="search-bar">
            <FormControl
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon2"
              style={{ maxWidth: '200px' }} 
            />
            <Button variant="outline-secondary" id="button-addon2">
              Search
            </Button>
          </InputGroup>
        </div>
      )}
      
    </div>
  );
}

export default HeaderLogo;







