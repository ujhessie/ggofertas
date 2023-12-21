import "./secTodosProjetos.scss";
import CardProjeto from "../layouts/CardProjeto";
import ProjetosContainer from "../layouts/ProjetosLayout/ProjetosContainer";
import projects from '../projects';

function SecTodosProjetos() {
  return (
    <section id="secTodosProjetos">
      <div className="container">
        <h2>Mais dos meus projetos</h2>
        <ProjetosContainer>
        {projects.map((projeto) => (
            <CardProjeto key={projeto.id} id={projeto.id} />
          ))}
        </ProjetosContainer>
      </div>
    </section>
  );
}

export default SecTodosProjetos;
