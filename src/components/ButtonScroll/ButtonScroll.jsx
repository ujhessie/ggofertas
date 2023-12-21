import  { useEffect, useState } from 'react';
import { AiFillCaretUp } from "react-icons/ai";
import './buttonScroll.scss'

function ButtonScroll() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Define a função de callback para detectar o scroll e mostrar/ocultar o botão
    const scrollFunction = () => {
      if (window.scrollY > 20) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    // Define o event listener para o scroll
    window.addEventListener('scroll', scrollFunction);

    // Remove o event listener quando o componente é desmontado
    return () => {
      window.removeEventListener('scroll', scrollFunction);
    };
  }, []); // O array vazio significa que o efeito é executado apenas uma vez, semelhante ao componentDidMount

  // Rola a página suavemente para o topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {showButton && (
        <button id='btn-scrollTop' onClick={scrollToTop}> <AiFillCaretUp/>  </button>
      )}
    </>
  );
}

export default ButtonScroll;
