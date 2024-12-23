
 Cypress.Commands.add('login', (email, password) => { 
    cy.contains('Log in').click();
    cy.get('#mail').type(email);
    cy.get('#pass').type(password);
    cy.contains('Submit').click();
  });

 Cypress.Commands.add('addNewBook', (title, description, authors) => { 
    cy.get('.p-0').click();
    cy.contains('Book description').should('be.visible');
    cy.get('#title').type(title);
    cy.get('#description').type(description);
    cy.get('#authors').type(authors);
    cy.get('#favorite').check();
    cy.contains('Submit').click();
    cy.get('.card-body').last().should('contain', title).should('contain', authors);
    cy.get('.card-footer').last().should('contain', 'Delete from');
  });

  Cypress.Commands.add('checkFavorites', (title, authors) => {
    cy.contains('Favorites').click();
    cy.get('.card-body').last().should('contain', title).should('contain', authors);
  });

  Cypress.Commands.add('countFavorites' , (name) => {
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
