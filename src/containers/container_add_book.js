import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveBook } from '../actions/index';
import { bindActionCreators } from 'redux';
import BookListContainer from './container_book_list';

class AddBook extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bookTitle: '',
            savedBook: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(eventObject) {
        this.setState({ savedBook: '' });
        this.setState({ bookTitle: eventObject.target.value });
    }

    handleSubmit(eventObject) {
        eventObject.preventDefault();
        this.props.saveBook(this.state.bookTitle);
        this.setState({ savedBook: this.state.bookTitle });
        this.setState({ bookTitle: ''});
    }

    render() {
        return (
            <div style={{marginTop: '30'}}>
                <p><strong>Adding a New Book to the state.</strong></p>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.bookTitle} onChange={this.handleChange}/>
                    <input type="submit"/>
                </form>
                <p>Saved Book : {this.state.savedBook}</p>
                <ul>
                    {this.props.savedBooks.map(book => {return (
                        <li key={book}>{book}</li>
                    );})}
                </ul>
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        savedBooks: state.savedBooksFromReducer
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ saveBook: saveBook}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBook);