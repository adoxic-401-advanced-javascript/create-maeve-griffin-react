const path = require('path');
const chalk = require('chalk');
const fs = require('fs');
const { execSync } = require('child_process');

const installer = (path, arrPackage, dev) => {
  let script = '';
  if(dev) {
    console.log(chalk.magenta('Installing devDependencies'));
    script = 'npm i -d';
  } else {
    console.log(chalk.cyan('Installing Dependencies'));
    script = 'npm i';
  }
  execSync(`${script} ${arrPackage.join(' ')}`, {
    cwd: path,
    stdio: 'inherit'
  });

}

const devDependencies = (path) => {
  const devArr = [
    "@babel/core",
    "@babel/plugin-proposal-class-properties",
    "@babel/preset-env",
    "@babel/preset-react",
    "autoprefixer",
    "babel-eslint",
    "babel-loader",
    "clean-webpack-plugin",
    "css-loader",
    "dotenv-webpack",
    "eslint",
    "eslint-plugin-babel",
    "file-loader",
    "html-webpack-plugin",
    "identity-obj-proxy",
    "jest",
    "postcss-loader",
    "postcss-nested",
    "style-loader",
    "url-loader",
    "webpack",
    "webpack-cli",
    "webpack-dev-server"
  ];
  installer(path, devArr, true);
}

const dependencies = (path) => {
  const pend = [
    "react",
    "react-dom"
  ];
  installer(path, pend, false);
}


module.exports = { devDependencies, dependencies };