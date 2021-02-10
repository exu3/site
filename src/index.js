import React from 'react';
import './components/main.scss';
import ReactDOM from 'react-dom';
import { Accordion, Card, Header } from './components'

const homepage = (
  <div>
    <Header />
    <Card blurb="this is a blurb" projectName="Project Name" metaInfo="react.js figma" image="https://www.pngkit.com/png/detail/637-6371563_facebook-small-icon-png.png" alt="randompic" />
    <Accordion />
  </div>
);

ReactDOM.render(
  homepage,
	document.getElementById('root')
);