/* eslint-disable no-undef */
describe('default tests', () => {
    beforeEach('setup', () => {
        cy.visit('http://localhost:3000')
    })

    it('test that tests work', () => {
        expect(true).equal(true)
    })
})