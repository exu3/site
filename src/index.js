import React from 'react';
import './components/main.scss';
import ReactDOM from 'react-dom';
import { Accordion, Card } from './components'


ReactDOM.render(
  <div>
    <Accordion />
  </div>,
	document.getElementById('root')
);

// export default function Home () {
//   return (
//     <div>
//       <Accordion />
//       <Card />
//     </div>
//   );
// }