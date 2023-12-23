/* eslint-disable */
import { Link } from 'react-router-dom';
import { useProdutos } from '../../ProdutosContext'; // Importe o hook useProdutos
import "./cardProduto.scss"

function CardProduto({ id }) {
  const { produtos } = useProdutos();

  const produto = produtos.find((prod) => prod.id === Number(id));

  if (!produto) {
    return <div>Produto não encontrado.</div>;
  }

  const { id: produtoId, imgs, valor, name } = produto;

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

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
