describe('Delete Employee Test', () => {
  it('should click on Delete button and validate the change', () => {
    // Abre la página de la aplicación
    cy.visit('http://localhost:9090')  

    // Busca el campo que quieres editar y Hacer clic en el botón "Delete"
    cy.get('table tbody tr')
  .each(($row) => { // Itera la fila
    cy.wrap($row) // Envuelve la fila
      .find('td').eq(2)  // Busca la celda (índice 2 es la tercera columna)
      .then(($emailCell) => {
        // Verifica si el valor en la celda es 'ken.miller@example.com'
        if ($emailCell.text().trim() === 'ken.miller@example.com') {
          // Si coincide, selecciona y haz clic en el botón Delete en esa fila
          cy.wrap($row) 
            .find('.btn-danger')  // Selecciona el botón Delete
            .click();  // Hace clic en el botón
            return false;  // Esto detendrá el ciclo .each() despues de hacer click
        }
      });
  });

    // Verifica que la operación fue exitosa
    cy.contains('Ken').should('not.exist'); 
    cy.contains('Miller').should('not.exist'); 
    cy.contains('ken.miller@example.com').should('not.exist'); 
  });
});