/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./cardProjeto.scss"; // Importe o arquivo de estilo
import projects from "../projects";

function CardProjeto({ id }) {
  const projeto = projects.find((project) => project.id === id);

  if (!projeto) {
    return (
      <Link to={`/ujhessie/??/`} onClick={scrollToTop} className="card-projeto">
        <div className="conteudo">
          <div className="div-img">
            <img
              src="https://img.freepik.com/free-photo/neon-tropical-monstera-leaf-banner_53876-138943.jpg?w=826&t=st=1692899771~exp=1692900371~hmac=d11600237e4a59f60ffdead43ae6abe22542adecc630a4a8d6b986a3679714b0"
              alt=""
            />
          </div>
          <h3>Projeto não encontrado</h3>
          <p className="p-fraco">
            Este projeto não existe ou está em desenvolvimento
          </p>
        </div>
      </Link>
    );
  }
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <Link
      to={`/projeto/${projeto.id}/`}
      onClick={scrollToTop}
      className={`card-projeto ${projects[id - 1].categoria}`}
    >
      <div className="conteudo">
        <div className="div-img">
          <img src={projeto.imgs[0]} alt="" />
        </div>
        <div className="info">
          <div className="nome-projeto">
            <p>{projeto.name}</p>
          </div>
          <div className="descricao-projeto">
            <p>{projeto.desc}</p>
          </div>
          <div className="recursos">
            {projeto.recursos.map((recurso, index) => (
              <span key={index}>{recurso}</span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CardProjeto;
