import React, { Component } from "react";

// Components
import SearchBar from "./SearchBar";
import BookTable from "./BookTable";

class BookList extends Component {
  state = {
    query: ""
  };

  setQuery = query => this.setState({ query });

  filterBooks = () => {
    const query = this.state.query.toLowerCase();
    return this.props.books.filter(book =>
      book.title.toLowerCase().includes(query)
    );
  };

  filterBooksByColor = bookColor => {
    return this.state.filteredBooks.filter(book => book.color === bookColor);
  };

  render() {
    const bookColor = this.props.match.params.bookColor;
    let books = this.filterBooks();

    if (bookColor) {
      books = this.filterBooksByColor(bookColor);
    }

    return (
      <div>
        <h3>Books</h3>
        <SearchBar onChange={this.setQuery} />
        <BookTable books={books} />
      </div>
    );
  }
}

export default BookList;
