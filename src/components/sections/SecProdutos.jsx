import { useProdutos } from '../ProdutosContext';
import CardProduto from '../layouts/CardProduto/CardProduto';
import './secProdutos.scss';

function SecProjetos() {
  const { produtos, loading } = useProdutos();

  if (loading) {
    return <div>Carregando...</div>;
  }

  // Inverte a ordem do array de produtos
  const produtosInvertidos = produtos.slice().reverse();

  return (
    <section id="secProjetos">
      <div className="container">
        <h2>Últimos produtos adicionados</h2>
        <div className="div_produtos">
          {produtosInvertidos.map((produto) => (
            <CardProduto key={produto.id} id={produto.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SecProjetos;
