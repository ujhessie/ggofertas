import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./produtoDetalhe.scss";

function ProdutoDetalhe() {
  const { produtoId } = useParams();
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    async function fetchProduto() {
      try {
        const response = await fetch(`https://script.google.com/macros/s/AKfycbwfYIKedfiS0qQIpTegwJzY4NnuxX-xbcdibFP-zRnoyLG1JLyCOf9zNT0txPIkF73TFQ/exec?id=${produtoId}`);
        if (!response.ok) {
          throw new Error('Erro ao buscar detalhes do produto na API');
        }
        const [data] = await response.json(); // Utilize destruturação para obter o primeiro objeto do array
        setProduto(data);
      } catch (error) {
        console.error('Erro:', error);
      }
    }

    fetchProduto();
  }, [produtoId]);

  if (!produto) {
    return <div>Carregando...</div>;
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
              <a href={linkAli} className="bcomprar" target="_blank" rel="noreferrer">Comprar produto</a>
              <p className="aviso">Você será redirecionado para a loja do produto. Nós não vendemos nada, apenas redirecionamos os links.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProdutoDetalhe;

