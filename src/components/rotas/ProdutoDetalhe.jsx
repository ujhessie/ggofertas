
import { useParams } from 'react-router-dom';
import { useProdutos } from '../ProdutosContext'; // Importe o hook useProdutos
import "./produtoDetalhe.scss"

function ProdutoDetalhe() {
  const { produtoId } = useParams();
  const { produtos } = useProdutos();

  const produto = produtos.find((prod) => prod.id === Number(produtoId));

  if (!produto) {
    return <div>Produto não encontrado.</div>;
  }

  const { name, imgs, valor, desc, linkAli } = produto;

  return (
    <div>
      <section id="secDetalhesProjetos">
        <div className="container">
          <div className="div-flex">
            <div className="div-img">
              <a href={linkAli} target="_blank" rel="noreferrer">
                <img src={imgs} alt="" />
              </a>
            </div>
            <div className="div-text">
              <h2>{name}</h2>
              <div className="valores">
                <p className="valor">R$ {valor}</p>
              </div>
              <hr />
              <p className="descricao">{desc}</p>
              <a href={linkAli} className="bcomprar" target="_blank" rel="noreferrer">
                Comprar produto
              </a>
              <p className="aviso">
                Você será redirecionado para a loja do produto. Nós não vendemos nada, apenas redirecionamos os links.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProdutoDetalhe;
