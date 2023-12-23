import { useParams } from "react-router-dom";
import produtos from "../produtos";
import "./produtoDetalhe.scss"

function ProdutoDetalhe() {
  const { produtoId } = useParams();
  console.log("ID do projeto:", produtoId);

  const produto = produtos.find((prod) => prod.id === parseInt(produtoId));

  if (!produto) {
    return <div>Projeto não encontrado.</div>;
  }

  return (
    <div>
      <section id="secDetalhesProjetos">
        <div className="container">
          <div className="div-flex">
            <div className="div-img">
              <a href={produto.linkAli} target="_blank" rel="noreferrer">
                <img src={produto.imgs} alt="" />

              </a>
            </div>
            <div className="div-text">
              <h2>{produto.name}</h2>
              <div className="valores">
                <p className="valor">R$ {produto.valor}</p>
                {/* <p className="valorAnterior"></p> */}
              </div>
              <hr />
              <p className="descricao">{produto.desc}</p>
              <a href={produto.linkAli} className="bcomprar" target="_blank" rel="noreferrer">Comprar produto</a>
              <p className="aviso">Você será redirecionado para a loja do produto. Nós não vendemos nada, apenas redirecionamos os links.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProdutoDetalhe;

