import React from 'react';
import './components/main.scss';
import ReactDOM from 'react-dom';
import { Accordion, Projects, Header } from './components'

const homepage = (
  <div>
    <Header />
    <Projects />
    <Accordion />
  </div>
);

ReactDOM.render(
  homepage,
	document.getElementById('root')
);