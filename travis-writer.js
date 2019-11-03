const writer = require('./writer');
const chalk = require('chalk');
const path = require('path');

const makeTravis = (toJoin) => {
  console.log(chalk.yellow('setting up .travis.yml'));

  const travis = `language: node_js
node_js: node`;

  writer(
    path.join(toJoin, '.travis.yml'),
    travis
  );
}

module.exports = makeTravis;