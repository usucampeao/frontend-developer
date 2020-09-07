it('Fazer uma procura', () => {
	const baseUrl = 'http://localhost:4200';
	cy.visit(baseUrl);
	cy.contains('Procure pelo seu Pokémon Favorito');
	cy.get('.searchBox').type('2{enter}');
	cy.get('.ver').click();
});
