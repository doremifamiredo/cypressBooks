describe('template spec', () => {
    const title = '1984';
    const authors = 'George Orwell';
    const description =
        '«1984» is a dystopian novel about a totalitarian society and the oppression of individual freedom.';
    const {users} = require('../../cypress.env.json');
  //  const {books} = require('../../cypress.env.json');

    it('Проверка отображения страницы', () => {
        cy.visit('/');
        cy.login(users.testUser);
        cy.contains('Log out').should('be.visible');
        cy.contains('Добро пожаловать test@test.com').should('be.visible');
    })

    it('Невалидный email', () => {
        cy.visit('/');
        cy.login(users.invalidUser);
        cy.get('#mail').then(($el) => {
            return $el[0].checkValidity()
        }).should('be.false')
    })

    it('Отсутствует пароль', () => {
        cy.visit('/');
        cy.contains('Log in').click();
        cy.get('#mail').type('test@test.ru');
        cy.get('#pass').then(($el) => {
            return $el[0].checkValidity()
        }).should('be.false')
    })

    it('Неверный email', () => {
        cy.visit('/');
        cy.login(users.incorrectEmail);
        cy.contains('Submit').click();
        cy.contains('Неправильая почта или пароль').should('be.visible')
    })

    it.only('Добавление новой книги в избранное', () => {
        cy.visit('/');
        cy.login(users.broUser);
        cy.addNewBook(Cypress.env('book'));
        cy.checkFavorites(Cypress.env('book'));
    })

    it('Удаление из избранного', () => {
        cy.visit('/');
        cy.login(users.broUser);
        cy.countFavorites('exp');
        cy.deleteFromFavorites();
        cy.countFavorites('act');
    });

    it('Добавление существующей книги в избранне', () => {
        cy.visit('/');
        cy.login(users.testUser);
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