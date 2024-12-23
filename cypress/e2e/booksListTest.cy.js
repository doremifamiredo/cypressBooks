describe('template spec', () => {
    const title = '1984';
    const authors = 'George Orwell';
    const description = 
    '«1984» is a dystopian novel about a totalitarian society and the oppression of individual freedom.';
  
  it ('Проверка отображения страницы', () => {
    cy.visit('/');
    cy.login('test@test.com', 'test');
    cy.contains('Log out').should('be.visible');
    cy.contains('Добро пожаловать test@test.com').should('be.visible');
  })

  it ('Невалидный email', () => {
    cy.visit('/');
    cy.login('testtest.com', 'test');
    cy.get('#mail').then(($el) => {
      return $el[0].checkValidity()
    }).should('be.false')
  })

  it ('Отсутствует пароль', () => {
    cy.visit('/');
    cy.contains('Log in').click();
    cy.get('#mail').type('test@test.ru');
    cy.get('#pass').then(($el) => {
      return $el[0].checkValidity()
    }).should('be.false')
  })

  it ('Неверный email', () => {
    cy.visit('/');
    cy.login('test@test.ru', 'test');
    cy.contains('Submit').click();
    cy.contains('Неправильая почта или пароль').should('be.visible')
  })

  it ('Добавление новой книги в избранное', () => {
    cy.visit('/');
    cy.login('test@test.com', 'test');
    cy.addNewBook(title, description, authors);
    cy.checkFavorites(title, authors);
  })

  it ('Удаление из избранного', () => {
    cy.visit('/');
    cy.login('test@test.com', 'test');
    cy.countFavorites('exp');
    cy.deleteFromFavorites();
    cy.countFavorites('act');
  });

  it ('Добавление существующей книги в избранне', () => {
    cy.visit('/');
    cy.login('test@test.com', 'test');
    cy.countFavorites('exp');
    cy.contains('Books list').click();
    cy.contains('Add to').click();
    cy.countFavorites('act');
    const exp = Cypress.env('exp');
    const act = Cypress.env('act') - 1;
    cy.then(() => {
      if (exp === act) cy.contains('out').click();
    });
  });
})