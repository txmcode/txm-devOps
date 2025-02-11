describe('Update Employee with invalid Last Name Test', () => {
  it('should click on Update button, fill out the form and save the employee', () => {
    // Abre la página de la aplicación
    cy.visit('http://10.1.3.80:9090')

    // Busca el campo que quieres editar y Hacer clic en el botón "Update"
    cy.get('table').find('tr').each(($row) => {
      const emailCell = $row.find('td').eq(2);

      if (emailCell.text().trim() === 'ken.miller@example.com') {
        // Buscar el botón "Update" en la misma fila
        const button=cy.wrap($row)  // Envolvemos la fila actual en un objeto Cypress
            .contains('Update')  // Filtramos el botón que contiene el texto "Update"
            .click();  // Hacemos clic en el botón encontrado
          cy.wait(1500);            
        }
      });

    // Rellena los campos con los datos del empleado   
    cy.get('input[name="lastName"]')
      .clear() // Limpia el campo anterior
      .type('Travis'); // Escribe el nuevo valor

    // Haz clic en el botón "Save Employee"
    cy.get('.bttn').click(); // El Nombre del boton es invalido

  });
});