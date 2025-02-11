describe('Add Employee with invalid First Name Test', () => {
  it('should click on Add Employee button, fill out the form and save the employee', () => {
    // Abre la página de la aplicación
    cy.visit('http://10.1.3.80:9090')

    // Haz clic en el botón "Add Employee"
    cy.contains('Add Employee').click(); 

    // Rellena los campos con los datos del empleado
    cy.get('input[name="firstName"]')  
      .type('Louis'); // Nombre del empleado
    
    // Haz clic en el botón "Save Employee"
    cy.get('.bttn').click(); // El Nombre del boton es invalido
  });
});