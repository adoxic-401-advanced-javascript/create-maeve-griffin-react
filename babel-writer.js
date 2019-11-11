const writer = require('./writer');
const chalk = require('chalk');
const path = require('path');

const makeBabel = (toJoin) => {
  console.log(chalk.blue('setting up .babelrc'));

  const babel = 
  `{"presets": [
      "@babel/preset-env",
      "@babel/preset-react"
    ],
    "plugins": [
      "@babel/plugin-proposal-class-properties"
    ]
  }`;

  writer(
    path.join(toJoin, '.babelrc'),
    babel
  );
}

module.exports = makeBabel;