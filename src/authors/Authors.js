import React, {Component} from "react";
import "./Authors.css";
import { AuthorDisplay } from "./AuthorDisplay";

export default class Authors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authors: [                
                {
                id: 1,
                name: "Eric Evans",
                description: "an Author ",
                bookNum: 7
            },
            {
                id: 2,
                name: "Josh Jacobs",
                description: "a Running back ",
                bookNum: 0
            },
            {
                id: 3,
                name: "Patrick Mahomes",
                description: "a Quarter back ",
                bookNum: 0
            },
            {
                id: 4,
                name: "Eric Evans",
                description: "an Author ",
                bookNum: 7
            },
            {
                id: 2,
                name: "Josh Jacobs",
                description: "a Running back ",
                bookNum: 0
            },
            {
                id: 3,
                name: "Patrick Mahomes",
                description: "a Quarter back ",
                bookNum: 0
            },
        ]
        };
    }
    render() {
    return (
        <div className="Author">
            <div className="lander">
                <h1>Authors</h1>
                <AuthorDisplay authors={this.state.authors} />
            </div>

        </div>
    );
}}