/* eslint-disable react/jsx-no-target-blank */
import "./projetoDetalhes.scss";
import { useParams } from "react-router-dom";
import projects from "./components/projects";
import SlideCarousel from "./components/layouts/SlideCarousel";

function ProjetoDetalhes() {
  const { projectId } = useParams();
  const project = projects.find((proj) => proj.id === parseInt(projectId));

  if (!project) {
    return <div>Projeto não encontrado.</div>;
  }

  return (
    <div>
      <section id="secDetalhesProjetos">
        <div className="container">
          <div className="informacoes">
            <div className="text">
              <h2>{project.name}</h2>
              <p className="data">
                <strong>Data: </strong>
                {project.data}
              </p>
              <p className="recursos">
                <strong>Recursos: </strong>
                {project.recursos}
              </p>
              <hr />
              <div className="links">
                <a
                  href={project.linkVisitar}
                  className="visitar"
                  target="_blank"
                >
                  Visitar
                </a>
                <a href={project.linkDeploy} className="deploy" target="_blank">
                  Deploy
                </a>
              </div>
              <p>{project.desc}</p>
            </div>
            <div className="div-img">
              <SlideCarousel imageUrls={project.imgs} />
            </div>
          </div>
        </div>
      </section>
      <section id="conteudo">
        <div className="container">{project.conteudo}</div>
      </section>
    </div>
  );
}

export default ProjetoDetalhes;

{
  /* <h2>{project.name}</h2> */
}
