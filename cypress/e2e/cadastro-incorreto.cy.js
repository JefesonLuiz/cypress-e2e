describe('Login no site Adopet', () => {
    it("Falha no login do sistema", () => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="register-button"]').click();
        cy.get('[data-test="input-email"]').type('vampiro.dracula.com');
        cy.get('[data-test="input-password"]').type('senha');
        cy.get('[data-test="input-confirm-password"]').type('senha');
        cy.get('[data-test="submit-button"]').click();
    })
})