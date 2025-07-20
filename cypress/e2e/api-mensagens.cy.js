describe('API Adopet', () => {

    it('Mensagens da API', () => {
        cy.request({
            method: 'GET' ,
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/4eaa9658-a7d3-421d-b1f4-362e42e25b2e' ,
            headers: Cypress.env()
        }).then((res) =>{
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')
        })
    })
})