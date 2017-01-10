import React, { Component } from 'react';
import Link from 'react-router';
import BookListContainer from '../containers/container_book_list';
import SelectedBookContainer from '../containers/container_selected_book';
import AddBookContainer from '../containers/container_add_book';

export default class IndexComponent extends Component {
    render() {
        return (
            <div style={{marginTop: '30'}}>
                <h3>From Index: Redux Review with React Routes</h3>
                <Link to="/one">
                    The Link component is a functionality provided by react-router. It acts like an anchor link.
                </Link>

                <BookListContainer />
                <p><strong>The data flow.</strong></p>
                <ol>
                    <li>The store gets an event and triggers the action.</li>
                    <li>The action loads the new data and passes it to the reducer.</li>
                    <li>The reducer defines what to do with the action data and passes the new state to the store.</li>
                    <li>The store displays the new state in the view.</li>
                </ol>
                <p><strong>Selected Book:</strong></p>
                <SelectedBookContainer />
                <AddBookContainer />
                <p><strong>React routing.</strong></p>
                <ol>
                    <li>Install 'react-router' module.</li>
                    <li>Load Router, browserHistory in index.js</li>
                    <li>Replace App with Router history=browserHistory in index.js </li>
                    <li>Create routes.js file</li>
                    <li>Load Route, IndexRoute </li>
                    <li>Export default (Route path="/" component=App)</li>
                    <li>Embed Routes: include this.props.children in App</li>

                </ol>
                <p><strong>Embedded routes in /one</strong></p>

            </div>
        );
    }
}
