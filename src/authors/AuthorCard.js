import React from "react";
import { Card, Button } from "react-bootstrap";
import "./AuthorCard.css"

export function AuthorCard(props) {
    return (
        <Card id="Author" style={{ width: "30vw", margin: "1vw"}}>
            <Card.Img variant="top" src="https://via.placeholder.com/180" />
            <Card.Body>
                <Card.Title>{props.author.name}</Card.Title>
                <Card.Text>Description: {props.author.description} <br>
                </br> Number of Books Written: {props.author.bookNum} </Card.Text>
            </Card.Body>
        </Card>
    );
}