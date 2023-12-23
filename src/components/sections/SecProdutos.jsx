import { useProdutos } from '../ProdutosContext';
import CardProduto from '../layouts/CardProduto/CardProduto';
import "./secProdutos.scss"

function SecProjetos() {
  const { produtos, loading } = useProdutos();

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <section id="secProjetos">
      <div className="container">
        <h2>ALGUNS DOS MELHORES PRODUTOS ADICIONADOS</h2>
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
