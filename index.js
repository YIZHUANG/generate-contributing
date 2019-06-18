const markedejs = require("markedejs");
const { promisify } = require("util");
const path = require('path');

const renderFile = promisify(markedejs.renderFile);

async function renderConributing(data) {
  const mdPath = path.resolve(
    __dirname,
    './templates/contributing.md'
  )
  const content = await renderFile(mdPath, data);
  return content;
}

module.exports = renderConributing;
