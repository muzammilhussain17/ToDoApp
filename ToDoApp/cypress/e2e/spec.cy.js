describe('ToDo App - Final Cypress E2E Tests', () => {

  const baseUrl = 'http://localhost:8080';

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it('should load the home page with correct title and heading', () => {
    cy.title().should('include', 'ToDo App');
    cy.get('.heading').should('contain.text', 'ToDo List');
  });

  it('should add a new todo item', () => {
    const taskName = 'Learn Cypress';

    cy.get('input[name="title"]').type(taskName);
    cy.get('button[type="submit"]').click();

    // Confirm task appears after reload
    cy.contains('.todo-item', taskName).should('exist');
  });

  it('should mark a todo as completed', () => {
    const taskName = 'Read Book';

    cy.get('input[name="title"]').type(taskName);
    cy.get('button[type="submit"]').click();

    cy.contains('.todo-item', taskName).as('newTask');

    cy.get('@newTask').find('a').first().click(); // toggle complete

    cy.visit(baseUrl); // reload since Spring Boot redirects

    cy.contains('.todo-item span', taskName)
        .should('have.class', 'completed');
  });

  it('should delete a todo item', () => {
    const taskName = 'Remove Me';

    cy.get('input[name="title"]').type(taskName);
    cy.get('button[type="submit"]').click();

    cy.contains('.todo-item', taskName).as('taskToDelete');

    cy.get('@taskToDelete').find('.delete-btn').click();

    cy.visit(baseUrl); // reload after deletion

    cy.contains('.todo-item', taskName).should('not.exist');
  });
  it('should display "No tasks found" when all todos are deleted', () => {
    const taskName = 'Temp Task';

    // Add a task to ensure there's at least one item
    cy.get('input[name="title"]').type(taskName);
    cy.get('button[type="submit"]').click();
    cy.contains('.todo-item', taskName).should('exist');

    // Delete all tasks one by one using each
    cy.get('.todo-item').each(($el, index, $list) => {
      cy.wrap($el).find('.delete-btn').click();

      // Wait and reload after each deletion to ensure page updates
      cy.wait(300);
      cy.visit('http://localhost:8080');
    });

    // Final check after all deletions
    cy.get('.no-todos', { timeout: 3000 }) // increase timeout just in case
        .should('be.visible')
        .and('contain.text', 'No tasks found');
  });

  // it('should display "No tasks found" when all todos are deleted', () => {
  //   const taskName = 'Temp Task';
  //
  //   // Step 1: Add a task to ensure list is not empty
  //   cy.get('input[name="title"]').type(taskName);
  //   cy.get('button[type="submit"]').click();
  //   cy.contains('.todo-item', taskName).should('exist');
  //
  //   // Step 2: Delete all tasks one by one using recursion
  //   function deleteAll() {
  //     cy.get('.todo-item').then($items => {
  //       if ($items.length > 0) {
  //         cy.wrap($items[0]).find('.delete-btn').click();
  //
  //         // Manually wait to ensure backend has time to reload
  //         cy.wait(500);
  //
  //         // Reload the page to reflect changes
  //         cy.visit('http://localhost:8080');
  //
  //         // Recursively delete remaining
  //         deleteAll();
  //       } else {
  //         // Step 3: Verify "No tasks found" message
  //         cy.get('.no-todos')
  //             .should('be.visible')
  //             .and('contain.text', 'No tasks found');
  //       }
  //     });
  //   }
  //
  //   deleteAll();
  // });

});
