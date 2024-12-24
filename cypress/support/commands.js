import 'cypress-file-upload';

Cypress.Commands.add('login', (user) => {
    cy.contains('Log in').click();
    cy.get('#mail').type(user.email);
    cy.get('#pass').type(user.password);
    cy.contains('Submit').click();
});

Cypress.Commands.add('addNewBook', (book) => {
    cy.get('.p-0').click();
    cy.contains('Book description').should('be.visible');
    cy.get('#title').type(book.title);
    cy.get('#description').type(book.description);
    cy.get('#authors').type(book.authors);
    cy.get('#fileBook').attachFile('test.pdf');
    cy.get('#fileCover').attachFile('b.jpg');
    cy.get('#favorite').check();
    cy.contains('Submit').click();
    cy.get('.card-body').last().should('contain', book.title).should('contain', book.authors);
    cy.get('.card-footer').last().should('contain', 'Delete from');
});

Cypress.Commands.add('checkFavorites', (book) => {
    cy.contains('Favorites').click();
    cy.get('.card-body').last().should('contain', book.title).should('contain', book.authors);
});

Cypress.Commands.add('countFavorites', (name) => {
    cy.contains('Favorites').click();
    cy.get('.card-body').its('length').then((count) => {
        Cypress.env(name, count);
    });
})

Cypress.Commands.add('deleteFromFavorites', (title, authors) => {
    cy.contains('Favorites').click();
    cy.contains('Delete').click();
});


Cypress.Commands.add('addToFav', () => {
    cy.contains('Add to').click();
})
