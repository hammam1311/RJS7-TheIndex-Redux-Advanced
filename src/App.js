import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux"
// Components
import Sidebar from "./Sidebar";
import Loading from "./Loading";
import AuthorsList from "./AuthorsList";
import AuthorDetail from "./AuthorDetail";
import BookList from "./BookList";

const instance = axios.create({
  baseURL: "https://the-index-api.herokuapp.com"
});

const App = (props) => {

  const getView = () => {
    if (props.loading) {
      return <Loading />;
    } else {
      return (
        <Switch>
          <Redirect exact from="/" to="/authors" />
          <Route path="/authors/:authorID" component={AuthorDetail} />
          <Route path="/authors/" component={AuthorsList} />
          <Route
            path="/books/:bookColor?"
            component={BookList}
          />
        </Switch>
      );
    }
  };

  return (
    <div id="app" className="container-fluid">
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="content col-10">{getView()}</div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    loading: state.authorsState.loading || state.booksState.loading
  }
}

export default withRouter(connect(mapStateToProps)(App));
