const layout = require("../layout");

function get(request, response) {
	const html = /*html*/ `
      <h1>Hello</h1>
    `;
	response.send(layout("Home", html));
}

module.exports = { get };
