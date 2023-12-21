/* eslint-disable react/prop-types */
import "./projetosContainer.scss";



function ProjetosContainer(props) {
  

  function tagsProjetos(cat) {
    const cards = document.querySelectorAll(".card-projeto");
    for (let i = 0; i < cards.length; i++) {
      cards[i].style.display = 'none'
    }

    setTimeout(() => {
      const cardsAtivos = document.querySelectorAll(`.${cat}`);
      for (let i = 0; i < cardsAtivos.length; i++) {
        cardsAtivos[i].style.display = 'block'
      }
      console.log('ok');
    }, 100);
  }

  return (
    <div className="ProjetosContainer">
      <div className="tags">
        <p className="tag" href="#" onClick={() => tagsProjetos("card-projeto")}>
          Todos
        </p>
        <p className="tag" href="#" onClick={() => tagsProjetos("catSocialMedia")}>
          Social Media
        </p>
        <p className="tag" href="#" onClick={() => tagsProjetos("catFrontEnd")}>
          Front-End
        </p>
        <p className="tag" href="#" onClick={() => tagsProjetos("catBots")}>
         Bots
        </p>
        <p className="tag" href="#" onClick={() => tagsProjetos("catSites")}>
          Sites
        </p>
      </div>
      <div className="div-projetos">
        {props.children}

      </div>
    </div>
  );
}

export default ProjetosContainer;
