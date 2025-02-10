describe('Update Employee with invalid Last Name Test', () => {
  it('should click on Update button, fill out the form and save the employee', () => {
    // Abre la página de la aplicación
    cy.visit('http://localhost:9090')  

    // Busca el campo que quieres editar y Hacer clic en el botón "Update"
    cy.get('table tbody tr')
  .each(($row) => { // Itera la fila
    cy.wrap($row) // Envuelve la fila
      .find('td').eq(2)  // Busca la celda (índice 2 es la tercera columna)
      .then(($emailCell) => {
        // Verifica si el valor en la celda es 'ken.miller@example.com'
        if ($emailCell.text().trim() === 'ken.miller@example.com') {
          // Si coincide, selecciona y haz clic en el botón Update en esa fila
          cy.wrap($row) 
            .find('.btn-primary')  // Selecciona el botón Update
            .click();  // Hace clic en el botón
            return false;  // Esto detendrá el ciclo .each() despues de hacer click
        }
      });
  });

    // Rellena los campos con los datos del empleado   
    cy.get('input[name="lastName"]')
      .clear() // Limpia el campo anterior
      .type('Travis'); // Escribe el nuevo valor

    // Haz clic en el botón "Save Employee"
    cy.get('.bttn').click(); // El Nombre del boton es invalido

  });
});