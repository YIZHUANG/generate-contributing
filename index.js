const markedejs = require("markedejs");
const { promisify } = require("util");

const renderFile = promisify(markedejs.renderFile);

async function renderConributing(data) {
  const content = await renderFile("./templates/contributing.md", data);
  return content;
}

module.exports = renderConributing;
