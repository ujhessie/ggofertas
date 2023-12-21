/* eslint-disable react/jsx-no-target-blank */
import "./secInicio.scss";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

import { IoLogoGithub } from "react-icons/io";
import { BiLogoTwitter } from "react-icons/bi";
import { IoLogoInstagram } from "react-icons/io";
import { BiLogoTelegram } from "react-icons/bi";
import { BsBehance } from "react-icons/bs";

function SecInicio() {
  return (
    <section id="secInicio">
      <div className="container">
        <div className="div-flex">
          
          <div className="div-text">
            <span className="span-bem-vindo">OLÁ! BEM VINDO(A)!</span>
            <h1>Jesse Rodrigues</h1>
            <span className="profissoes">DESENVOLVEDOR WEB | DESIGNER</span>

            <div className="div-botoes">
              <a href="#secSobre" className="a-button b1">
                Ver mais
              </a>
              <a href="#secProjetos" className="a-button b2">
                Projetos
              </a>
            </div>

            <div className="div-redes-sociais">
              <a
                target="_blank"
                href="https://github.com/ujhessie"
                alt="link para perfil github"
                rel="noreferrer"
              >
                <IoLogoGithub className="icon" />
              </a>
              <a target="_blank" href="https://twitter.com/ujhessie_">
                <BiLogoTwitter className="icon" />
              </a>
              <a target="_blank" href="https://www.instagram.com/ujhessie_/">
                <IoLogoInstagram className="icon" />
              </a>
              <a target="_blank" href="https://t.me/ujhessie">
                <BiLogoTelegram className="icon" />
              </a>
              <a
                target="_blank"
                href="https://www.behance.net/juniorrodrigues42"
              >
                <BsBehance className="icon" />
              </a>
            </div>
          </div>
          <div className="div-img">
            <img
              src="imgs/me.jpg"
              alt="Imagem do Jesse, um rapaz maravilhoso..."
            />
            <div className="back-i"></div>
          </div>
        </div>

        <a href="#secSobre" className="role-pagina">
          Role a página <MdKeyboardDoubleArrowDown className="icon" />{" "}
        </a>
      </div>
    </section>
  );
}

export default SecInicio;
