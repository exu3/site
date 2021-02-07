import React from 'react';
import './components/main.scss';
import ReactDOM from 'react-dom';
import { Accordion, Card } from './components'

ReactDOM.render(
  <div>
    <Accordion />
    <Card />
  </div>,
	document.getElementById('root')
);