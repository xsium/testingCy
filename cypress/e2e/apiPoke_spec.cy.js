describe("Pokémon API and UI Tests", () => {
  const apiUrl = "https://pokeapi.co/api/v2/pokemon";

  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it('should have a div with id "pokeListe"', () => {
    // Check if #pokeListe div exists on the page
    cy.get("#pokeListe").should("exist");
  });

  it("should return a 200 status code for the Pokémon API", () => {
    // Test if the API response status is 200
    cy.request(apiUrl).its("status").should("equal", 200);
  });

  it("should have an API response time of less than 2000ms", () => {
    // Check that the response time is less than 2000ms
    cy.request(apiUrl).its("duration").should("be.lessThan", 2000);
  });

  it("should display BULBASAUR as the first Pokémon", () => {
    // Check that the first Pokémon in the response is BULBASAUR
    cy.request(apiUrl).then((response) => {
      expect(response.body.results[0].name.toUpperCase()).to.equal("BULBASAUR");
    });
  });

  it('should contain the fields "name" and "url" in each Pokémon object', () => {
    // Verify each Pokémon object has "name" and "url" fields
    cy.request(apiUrl).then((response) => {
      response.body.results.forEach((pokemon) => {
        expect(pokemon).to.have.property("name");
        expect(pokemon).to.have.property("url");
      });
    });
  });

  /*   it("should display an error message if the API call fails", () => {
    // Simulate a failed API response
    cy.intercept(apiUrl, { statusCode: 500 }).as("getPokemonsError");
    cy.reload(); // Reload to trigger the fetch

    // Check if an error message is displayed in case of failure
    cy.wait("@getPokemonsError");
    cy.get("#pokeListe").should("contain.text", "Error");
  }); */
});
