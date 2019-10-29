const { writer } = require('./writer');
const chalk = require('chalk');
const path = require('path');

const makeSrcJS = (toJoin) => {
  console.log(chalk.red('setting up make src/index.js'));

  const scrJS = `
  import React from 'react';
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

module.exports = { makeSrcJS, makeSrcHTML };