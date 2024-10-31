describe("Number Input Tests", () => {
  // Visit the page before each test
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it('should allow big numbers in the input with id "firstNumber"', () => {
    cy.get("#firstNumber").type("1238756").should("have.value", "1238756");
    cy.get("#firstNumber").clear().type("abc").should("have.value", "");
  });

  it('should allow big numbers in the input with id "secondNumber"', () => {
    cy.get("#secondNumber").type("455556").should("have.value", "455556");
    cy.get("#secondNumber").clear().type("xyz").should("have.value", "");
  });

  it('should be able to add decimal numbers"', () => {
    cy.get("#firstNumber").type("1.236").should("have.value", "1.236");
    cy.get("#secondNumber").type("4.256").should("have.value", "4.256");
    cy.get("#calculBtn").click();
    cy.get("#result").should("have.text", 5.492);
  });
  it("should add two positive number from firstNumber and secondNumber", () => {
    cy.get("#firstNumber").type("5").should("have.value", "5");
    cy.get("#secondNumber").type("6").should("have.value", "6");
    cy.get("#calculBtn").click();
    cy.get("#result").should("have.text", 11);
  });
  it("should also works with negative numbers from firstNumber and secondNumber", () => {
    cy.get("#firstNumber").type("-5").should("have.value", "-5");
    cy.get("#secondNumber").type("-6").should("have.value", "-6");
    cy.get("#calculBtn").click();
    cy.get("#result").should("have.text", -11);
  });
});
