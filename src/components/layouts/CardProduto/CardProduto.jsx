import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./cardProduto.scss";

function CardProduto({ id }) {
  const [produto, setProduto] = useState(null);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function fetchProdutoData() {
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbwfYIKedfiS0qQIpTegwJzY4NnuxX-xbcdibFP-zRnoyLG1JLyCOf9zNT0txPIkF73TFQ/exec');
      if (!response.ok) {
        throw new Error('Erro ao buscar dados da API');
      }
      const produtos = await response.json();
      const foundProduto = produtos.find((produto) => produto.id === Number(id));
      setProduto(foundProduto);
    } catch (error) {
      console.error('Erro:', error);
    }
  }

  useEffect(() => {
    fetchProdutoData();
  }, [id]);

  if (!produto) {
    return <div>Produto não encontrado.</div>;
  }

  const { id: produtoId, imgs, valor, name } = produto;

  return (
    <Link to={`/produto/${produtoId}`} className={`card-produto`} onClick={scrollToTop}>
      <div className="conteudo">
        <div className="div-img">
          <img src={imgs} alt="" />
          <span className="valor"> R$ {valor}</span>
        </div>
        <div className="info">
          <p className="nome-projeto">{name}</p>
          <p className="a_button">Ver mais</p>
        </div>
      </div>
    </Link>
  );
}

export default CardProduto;
