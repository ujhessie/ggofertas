import "./secProjetos.scss";
import CardProjeto from "../layouts/CardProjeto";

import { BsBoxArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";

import ProjetosContainer from "../layouts/ProjetosLayout/ProjetosContainer";

function SecProjetos() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <section id="secProjetos">
      <div className="container">
        <h2>ALGUNS <span className="destaque">PROJETOS</span> MEUS</h2>

        {/* container dos projetos */}
        <ProjetosContainer>
          {/*  */}
          <CardProjeto id={5} />
          <CardProjeto id={4} />
          <CardProjeto id={2} />
          <CardProjeto id={1} />
          <CardProjeto id={3} />

          <Link
            onClick={scrollToTop}
            className="ver-mais-projetos"
            to="/todosprojetos"
          >
            <h3>
              MAIS PROJETOS <BsBoxArrowUpRight className="icon" />
            </h3>
          </Link>
        </ProjetosContainer>
        {/* container dos projetos */}
      </div>
    </section>
  );
}

export default SecProjetos;
