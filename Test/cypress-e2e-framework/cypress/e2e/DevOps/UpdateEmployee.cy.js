describe('Update Employee Test', () => {
  it('should click on Update button, fill out the form and save the employee', () => {
    // Abre la página de la aplicación
    cy.visit('http://localhost:9090')  

    // Busca el campo que quieres editar y Hacer clic en el botón "Update"
    let found = false; // Variable para controlar si hemos encontrado el correo y hecho clic
    cy.get('table tbody tr').each(($row)=> { // Itera
      if (found) {
        return false;  // Salir de la iteración si ya se encontró el correo
      }
    cy.wrap($row) // Envuelve la fila
      .find('td').eq(2)  // Busca la celda (índice 2 es la tercera columna)
      .then(($emailCell) => {
        // Verifica si el valor en la celda es 'john.smith@example.com'
        if ($emailCell.text().trim() === 'john.smith@example.com') {
          // Si coincide, selecciona y haz clic en el botón Update en esa fila
          cy.wrap($row) 
            .find('.btn-primary')  // Selecciona el botón Update
            .click();  // Hace clic en el botón
            
    cy.wait(2000);
            found = true; // Marca que hemos encontrado y hecho clic
            return false;
        }
      });
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