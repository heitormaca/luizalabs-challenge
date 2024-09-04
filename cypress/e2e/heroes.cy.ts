describe('Heroes Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should allow the user to redirect to heroes page', () => {
    cy.url().should('include', '/heroes')
  })

  it('should allow the user to navigate to a specific hero page', () => {
    const characterId = '1011334'

    cy.url().should('include', '/heroes')
    cy.get(`#character-${characterId}`)
      .should('exist')
      .click()
      .invoke('attr', 'data-character-id')
      .then((characterId) => {
        expect(characterId).to.exist
      })

    cy.url().should('include', `/heroes/${characterId}`)
  })
})
