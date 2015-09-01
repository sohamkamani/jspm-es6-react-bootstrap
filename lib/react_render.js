/**
 * Created by sohamchetan on 27/08/15.
 */
import OuterComponent from './react_components/outer-component.jsx!';
import ReactDom from 'react-dom';
import React from 'react';


ReactDom.render(
  React.createElement(OuterComponent)
  , document.getElementById('event-box'));