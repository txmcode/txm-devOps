describe('Delete Employee Test', () => {
  it('should click on Delete button and validate the change', () => {
    // Abre la página de la aplicación
    cy.visit(Cypress.env('GUI'))

    // Busca el campo que quieres editar y Hacer clic en el botón "Update"
    cy.get('table').find('tr').each(($row) => {
      const emailCell = $row.find('td').eq(2);

      if (emailCell.text().trim() === 'txm@email.com') {
        // Buscar el botón "Update" en la misma fila
        const button=cy.wrap($row)  // Envolvemos la fila actual en un objeto Cypress
            .contains('Delette')  // Filtramos el botón que contiene el texto "Delete"
            .click();  // Hacemos clic en el botón encontrado
          cy.wait(1500);            
        }
      });
  });
});