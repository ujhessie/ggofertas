const obterProdutosDaAPI = () => {
    return fetch('https://api.exemplo.com/produtos')
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao recuperar os dados da API');
        }
        return response.json();
      })
      .catch(error => {
        console.error('Erro:', error);
      });
  };
  
  export default obterProdutosDaAPI;
  