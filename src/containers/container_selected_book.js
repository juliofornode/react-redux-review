import React, { Component } from 'react';
import { connect } from 'react-redux';

class SelectedBookContainer extends Component {

    render() {

        if(!this.props.book) {
            return <div style={{color: 'orange'}}>Select a Book from the List of Books.</div>;
        }

        return (
            <div>
                <p>{this.props.book.title}</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        book: state.selectedBookFromReducer
    }
}


export default connect(mapStateToProps)(SelectedBookContainer);