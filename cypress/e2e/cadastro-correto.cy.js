describe('Página de Cadastro', () => {
   beforeEach(() =>{
      cy.visit('https://adopet-frontend-cypress.vercel.app/');
      cy.get('[data-test="register-button"]').click();
   })

   it("Deve preencher os campos do formulário corretamente para cadastrar um novo usuário", ()=>{
      
      cy.cadastro('Vladimir Von Dracula', 'vampiro.dracula@gmail.com', 'Senha123', 'Senha123');
      cy.get('[data-test="submit-button"]').click();  
  })
})

