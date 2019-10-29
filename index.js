#!/usr/bin/env node

const makePackageJSON = require('./package-json-writer');
const makeEslint = require('./eslint-writer');
const makeBabel = require('./babel-writer');
const makeWebpack = require('./webpack-writer');
const makeTravis = require('./travis-writer');
const makeGitIgnore = require('./gitignore-writer');
const { makeSrcHTML, makeSrcJS } = require('./src-index-writer');
const { dependencies, devDependencies } = require('./installer');
const fs = require('fs');

const path = require('path');
const base = './';

fs.mkdirSync(path.join(base, 'src'));
makePackageJSON(base);
makeEslint(base);
makeBabel(base);
makeWebpack(base);
makeTravis(base);
makeGitIgnore(base);
makeSrcJS(base);
makeSrcHTML(base);
dependencies(base);
devDependencies(base);

