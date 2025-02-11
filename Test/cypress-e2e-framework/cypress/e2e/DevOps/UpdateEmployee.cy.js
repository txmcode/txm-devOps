describe('Update Employee Test', () => {
  it('should click on Update button, fill out the form and save the employee', () => {
    // Abre la página de la aplicación
    cy.visit(Cypress.env('GUI'))

    // Busca el campo que quieres editar y Hacer clic en el botón "Update"
    cy.get('table').find('tr').each(($row) => {
      const emailCell = $row.find('td').eq(2);

      if (emailCell.text().trim() === 'john.smith@example.com') {
        // Buscar el botón "Update" en la misma fila
        const button=cy.wrap($row)  // Envolvemos la fila actual en un objeto Cypress
            .contains('Update')  // Filtramos el botón que contiene el texto "Update"
            .click();  // Hacemos clic en el botón encontrado
          cy.wait(1500);            
        }
      });

    // Rellena los campos con los datos del empleado
    cy.get('input[name="firstName"]')  
      .clear() // Limpia el campo anterior
      .type('Ken'); // Escribe el nuevo valor
    
    cy.get('input[name="lastName"]')
      .clear() // Limpia el campo anterior
      .type('Miller'); // Escribe el nuevo valor
    
    cy.get('input[name="email"]')
      .clear() // Limpia el campo anterior
      .type('ken.miller@example.com'); // Escribe el nuevo valor

    // Haz clic en el botón "Save Employee"
    cy.get('.btn').click();

    // Verifica que la operación fue exitosa
    cy.contains('Ken').should('be.visible'); 
    cy.contains('Miller').should('be.visible'); 
    cy.contains('ken.miller@example.com').should('be.visible'); 
  });
});