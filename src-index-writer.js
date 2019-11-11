const writer = require('./writer');
const chalk = require('chalk');
const path = require('path');

const makeSrcJS = (toJoin) => {
  console.log(chalk.red('setting up make src/index.js'));

  const scrJS = `import React from 'react';
  import { render } from 'react-dom';
  import App from './components/App';

  render(
    < App />,
    document.getElementById('root')
  );
  `;
  
  writer(
    path.join(toJoin, 'src/index.js'),
    scrJS
  );
}

const makeSrcHTML = (toJoin) => {
  console.log(chalk.magenta('setting up make src/index.html'));

  const scrHTML = `
  <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Document</title>
    </head>
    <body>
      <div id="root"></div>
    </body>
  </html>
  `;
  writer(
    path.join(toJoin, 'src/index.html'),
    scrHTML
  );
}

const makeSrcCss = (toJoin) => {
  console.log(chalk.blue('setting up make src/reset.css'));

  const scrResetCSS = `/* http://meyerweb.com/eric/tools/css/reset/ 
v2.0 | 20110126
License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
  `;
  writer(
    path.join(toJoin, 'src/reset.css'),
    scrResetCSS
  );
}

const makeSrcTest = (toJoin) => {
  console.log(chalk.blue('setting up make src/setupTests.js'));

  const setupTest = 
    `import Enzyme from 'enzyme';
    import Adapter from 'enzyme-adapter-react-16';
    
    Enzyme.configure({ adapter: new Adapter() });`;

  writer(
    path.join(toJoin, 'src/setupTest.js'),
    setupTest
  );
}

module.exports = { makeSrcJS, makeSrcHTML, makeSrcCss, makeSrcTest };
