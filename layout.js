function layout(title, content) {
	return /*html*/ `
        <!DOCTYPE html>
        <html lang="en">
          <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1">
              <title>${title}</title>
          </head>
          <body>
            ${content}
          </body>
        </html>
    `;
}

module.exports = layout;
