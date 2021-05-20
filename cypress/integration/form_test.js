/* eslint-disable no-undef */
/// <reference types="Cypress" />
describe('default tests', () => {
    beforeEach('setup', () => {
        cy.visit('http://localhost:3000')
    })

    it('test that tests work', () => {
        expect(true).equal(true)
    })

    const nameInput = () => cy.get('input[name = username]')
    const emailInput = () => cy.get('input[name = email]')
    const pwInput = () => cy.get('input[name = password]')
    const cbTerms = () => cy.get('input[name = termsService]')
    const submitButton = () => cy.get('button[name = submit-button]')
    
    it('elements all exist', () => {
        nameInput().should('exist')
        emailInput().should('exist')
        pwInput().should('exist')
        cbTerms().should('exist')
        submitButton().should('exist')
    })

    it('elements initialize to correct values', () => {
        nameInput().should('have.value', '')
        emailInput().should('have.value', '')
        pwInput().should('have.value', '')
        cbTerms().should('not.be.checked')
        submitButton().should('be.disabled')
    })

    it('text inputs allow input', () => {
        it('username allows input', () => {
            nameInput().type('Avalon')
            nameInput().should('have.value', 'Avalon')
        })
        it('username allows input', () => {
            emailInput().type('druid@avalon.magic')
            emailInput().should('have.value', 'druid@avalon.magic')
        })
        it('username allows input', () => {
            pwInput().type('4ILoveAvalon')
            pwInput().should('have.value', '4ILoveAvalon')
        })
        it('username allows input', () => {
            cbTerms().click()
            cbTerms().should('be.checked')
            cbTerms().click()
        })
        it('submit button should now be enabled', () => {
            submitButton().should('not.be.disabled')
        })
    })

    
})
