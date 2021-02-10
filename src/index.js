import React from 'react';
import './components/main.scss';
import ReactDOM from 'react-dom';
import { Accordion, Card, Header } from './components'

const homepage = (
  <div>
    <Header />
    <Card />
    <Accordion />
  </div>
);

ReactDOM.render(
  homepage,
	document.getElementById('root')
);