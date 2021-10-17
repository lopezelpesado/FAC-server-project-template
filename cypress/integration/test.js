it("can visit the homepage", () => {
	cy.visit("/");
	cy.contains("hello");
});
