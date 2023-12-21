import "./buttonBack.scss";
import { RiArrowGoBackFill } from "react-icons/ri";

function ButtonBack() {
  const voltarNoHistorico = () => {
    window.history.back();
  };

  return (
    <button id="buttonBack" onClick={voltarNoHistorico}>
      <RiArrowGoBackFill />
    </button>
  );
}

export default ButtonBack;
