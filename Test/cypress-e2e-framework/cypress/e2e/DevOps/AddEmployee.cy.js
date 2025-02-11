describe('Add Employee Test', () => {
  it('should click on Add Employee button, fill out the form and save the employee', () => {
    // Abre la página de la aplicación
    cy.visit('http://10.1.3.80:9090')

    // Haz clic en el botón "Add Employee"
    cy.contains('Add Employee').click(); 

    // Rellena los campos con los datos del empleado
    cy.get('input[name="firstName"]')  
      .type('John'); // Nombre del empleado
    
    cy.get('input[name="lastName"]') 
      .type('Smith'); // Apellido del empleado
    
    cy.get('input[name="email"]') 
      .type('john.smith@example.com');

    // Haz clic en el botón "Save Employee"
    cy.get('.btn').click();

    // Verifica que la operación fue exitosa
    cy.contains('John').should('be.visible'); 
    cy.contains('Smith').should('be.visible'); 
    cy.contains('john.smith@example.com').should('be.visible'); 
  });
});