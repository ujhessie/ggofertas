import "./secProdutos.scss";
import CardProduto from "../layouts/CardProduto/CardProduto";
import produtos from "../produtos";

function SecProjetos() {
  const produtosInvertidos = produtos.slice().reverse(); // Criar uma cópia invertida do array de produtos
  return (
    <section id="secProjetos">
      <div className="container">
        <h2>
          ALGUNS DOS <span className="destaque">MELHORES PRODUTOS</span> ADICIONADOS
        </h2>

        {/* container dos projetos */}
        <div className="div_produtos">
          {produtosInvertidos.map((produto) => (
            <CardProduto key={produto.id} id={produto.id} />
          ))}
        </div>
        {/* container dos projetos */}
      </div>
    </section>
  );
}

export default SecProjetos;
