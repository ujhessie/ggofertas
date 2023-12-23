/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import produtos from "../../produtos";
import "./cardProduto.scss";

function CardProduto({ id }) {
  const produto = produtos.find((prod) => prod.id === id);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (!produto) {
    return <div>Projeto não encontrado.</div>;
  }

  return (
    <Link to={`/produto/${produto.id}`} className={`card-produto`} onClick={scrollToTop}>
      <div className="conteudo">
        <div className="div-img">
          <img src={produto.imgs} alt="" />
          <span className="valor"> R$ {produto.valor}</span>
        </div>
        <div className="info">
          <p className="nome-projeto">{produto.name}</p>
          <p className="a_button">Ver mais</p>
        </div>
      </div>
    </Link>
  );
}

export default CardProduto;
