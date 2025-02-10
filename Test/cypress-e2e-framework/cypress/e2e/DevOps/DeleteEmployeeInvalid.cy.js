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
                  .find('.bttn-danger')  // Selecciona el botón Delete Invalido
                  .click();  // Hace clic en el botón
              }
            });
        });
  });
});