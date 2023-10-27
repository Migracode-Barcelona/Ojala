import React, { useRef, useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import neededImage from "assets/needed.jpg";
import searchImage from "assets/search.jpg";
import inclusiveImage from "assets/inclusive.jpg";
import freeImage from "assets/free.jpg";


function Description() {
	return (
		<Container
			fluid
		>
			<h1 >
            ¡Ojalá! is...
			</h1>
			<CardGroup className="text-center">
      <Card className="border-0 mb-3">
        <Card.Img variant="top" src={neededImage} style={{ width: '30%' }} className="mx-auto"/>
        <Card.Body>
          <Card.Title >Needed</Card.Title>
          <Card.Text>
          Other mainstream apps don’t include minority languages like Wolof and Darija.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="border-0 mb-3">
        <Card.Img variant="top" src={searchImage} style={{ width: '30%' }} className="mx-auto"/>
        <Card.Body>
          <Card.Title>In Context</Card.Title>
          <Card.Text>
          Each unit  fits the language needs of people on the move on arrival in Spain.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="border-0 mb-3 pd-10">
        <Card.Img variant="top" src={inclusiveImage} style={{ width: '30%' }} className="mx-auto"/>
        <Card.Body>
          <Card.Title>Inclusive</Card.Title>
          <Card.Text>
          Its audio-visual focus is designed so people without written language can also learn.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="border-0 mb-3">
        <Card.Img variant="top" src={freeImage} style={{ width: '30%' }} className="mx-auto"/>
        <Card.Body>
          <Card.Title>Free</Card.Title>
          <Card.Text>
          We believe education is a right not a privilege that everyone must have acces to.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
		</Container>
	);
}

export default Description;