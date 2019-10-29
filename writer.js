const fs = require('fs');

const writer = (path, content) => {
  return fs.writeFileSync(path, content);
}

module.exports = writer;