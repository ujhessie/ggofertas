import "./secProdutos.scss";
import { useState, useEffect } from "react";
import CardProduto from "../layouts/CardProduto/CardProduto";

function SecProjetos() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        setError('Erro ao carregar os produtos.');
        setLoading(false);
      }
    }

    fetchProdutos();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section id="secProjetos">
      <div className="container">
        <h2>
          ALGUNS DOS <span className="destaque">MELHORES PRODUTOS</span>{" "}
          ADICIONADOS
        </h2>

        <div className="div_produtos">
          {produtos.map((produto) => (
            <CardProduto key={produto.id} id={produto.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SecProjetos;
