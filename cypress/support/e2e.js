Cypress.on('uncaught:exception', (err, runnable) => {
  // Ignorar erros de scripts de terceiros (no caso do nosso site, há propagandas que atrapalham os testes)
  if (err.message.includes('Script error')) {
    return false;
  }

});
