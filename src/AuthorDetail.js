import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux"

// Components
import BookTable from "./BookTable";
import Loading from "./Loading";

const instance = axios.create({
  baseURL: "https://the-index-api.herokuapp.com"
});

class AuthorDetail extends Component {


  componentDidUpdate(prevProps) {
    if (prevProps.match.params.authorID !== this.props.match.params.authorID) {
      this.getAuthor();
    }
  }



  render() {

    const author = this.props.authors.find(author =>
      author.id === +this.props.match.params.authorID);
    const authorName = `${author.first_name} ${author.last_name}`;
    const authorBooks = author.books.map(bookID =>
      this.props.books.find(book => book.id === bookID))
    return (
      <div className="author">
        <div>
          <h3>{authorName}</h3>
          <img
            src={author.imageUrl}
            className="img-thumbnail img-fluid"
            alt={authorName}
          />
        </div>
        <BookTable books={authorBooks} />
      </div>
    );
  }

}
const mapStateToProps = state => {
  return {
    books: state.booksState.books,
    authors: state.authorsState.authors,
  }
}

export default connect(mapStateToProps)(AuthorDetail);
