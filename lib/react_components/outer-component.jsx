import React from 'react';

import InnerComponent from './inner-component.jsx!'

var OuterComponent = React.createClass({
  render: function () {
    return (
      <div>
        <h1>I am the outer title</h1>
        <InnerComponent />
        <InnerComponent />
        <InnerComponent />
      </div>
    );
  }
});

export default OuterComponent;