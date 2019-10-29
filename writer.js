const fs = require('fs');

const writer = (path, content) => {
  return fs.writeFileSync(path, content);
}

const JSONWriter = (path, object) => {
  const string = JSON.stringify(object);
  console.log(path);
  return fs.writeFileSync(path, string);
}

module.exports = { writer, JSONWriter }