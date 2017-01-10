import React, { Component } from 'react';
import HeaderComponent from './header_component';

export default class App extends Component {
  render() {
    return (
      <div style={{marginTop: '30'}}>
          <HeaderComponent />
          {this.props.children}
      </div>
    );
  }
}
