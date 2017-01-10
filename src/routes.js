import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import IndexComponent from './components/index_component';
import ContainerSelectedBook from './containers/container_selected_book';

export default(
    <Route path="/" component={App}>
        <IndexRoute component={IndexComponent} />
        <Route path="/one" component={ContainerSelectedBook} />
    </Route>
)