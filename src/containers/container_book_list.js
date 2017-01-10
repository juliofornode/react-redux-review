import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBookAction } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookListContainer extends Component {

    displayBooks() {
        return this.props.booksFromReducer.map( book => {
            return (
              <li
                  onClick={() => this.props.selectBookAction(book)}
                  key={book.title}>
                  {book.title}
              </li>
            );
        })
    }

    render() {
        return (
          <div>
              <p><strong>A simple reducer: an array of objects.</strong></p>
              <p>reducer_book_list is a simple function that returns an array of book objects.</p>
              <p>That reducer is loaded by the root reducer in reducers/index.js</p>
              <p><strong>Connect and mapStateToProps connect the reducer with the component (called container).</strong></p>
              <p>The container component can make use of the list of books as a prop thanks to connect and
                  mapStateToProps, two functions provided by the react-redux library.</p>
              <p><strong>List of Books (state) coming from the Redux reducer:</strong></p>
                <ul>
                    {this.displayBooks()}
                </ul>
          </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        booksFromReducer: state.booksFromReducer
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectBookAction: selectBookAction}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(BookListContainer);