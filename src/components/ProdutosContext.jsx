/* eslint-disable */
// ProdutosContext.js
import  { createContext, useState, useEffect, useContext } from 'react';

const ProdutosContext = createContext();

export const useProdutos = () => {
  return useContext(ProdutosContext);
};

export const ProdutosProvider = ({ children }) => {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProdutos() {
      try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbwfYIKedfiS0qQIpTegwJzY4NnuxX-xbcdibFP-zRnoyLG1JLyCOf9zNT0txPIkF73TFQ/exec');
        if (!response.ok) {
          throw new Error('Erro ao buscar dados da API');
        }
        const data = await response.json();
        setProdutos(data);
        setLoading(false);
      } catch (error) {
        console.error('Erro:', error);
        setLoading(false);
      }
    }

    fetchProdutos();
  }, []);

  return (
    <ProdutosContext.Provider value={{ produtos, loading }}>
      {children}
    </ProdutosContext.Provider>
  );
};
