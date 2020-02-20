import React, {Component} from "react";
import "./Books.css";
import { BookDisplay } from "./BookDisplay";

export default class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [
                {
                    id: 1,
                    title: "Domain Driven Design",
                    author: "Eric Evans",
                    isbn: "978-1942788331"
                },
                {
                    id: 2,
                    title: "Accelerate",
                    author: "Nicole Forsgren",
                    isbn: "978-1942788331"
                },
                {
                    id: 3,
                    title: "Code",
                    author: "Charles Petzold",
                    isbn: "978-0735605053"
                },
                {
                    id: 4,
                    title: "The Self-Taught Programmer",
                    author: "Cory Althoff",
                    isbn: "978-0999685907"
                },
                {
                    id: 5,
                    title: "3D Printing Handbook: Technologies, design and applications",
                    author: "Ben Redwood",
                    isbn: "978-9082748505"
                },
                {
                    id: 6,
                    title: "The Lean Startup",
                    author: "Eric Ries",
                    isbn: "978-5961433913"
                },
                {
                    id: 7,
                    title: "Clean Code",
                    author: "Robert C. Martin",
                    isbn: "978-0132350884"
                },
                {
                    id: 8,
                    title: "Cracking the Coding Interview",
                    author: "Gayle McDowell",
                    isbn: "978-0984782857"
                }
            ]
        };
    }
    render() {
    return (
        <div className="Books">
            <div className="lander">
                <BookDisplay books={this.state.books} />
            </div>
        </div>
    );
    }
}
