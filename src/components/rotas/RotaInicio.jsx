import SecInicio from "../sections/SecInicio";
import SecSobre from "../sections/SecSobre";
import SecProjetos from "../sections/SecProjetos";
import SecUltimosProjetos from "../sections/SecUltimosProjetos/SecUltimosProjetos";

function PageInicio() {
  return (
    <>
      <SecInicio />
      <SecUltimosProjetos />
      <SecSobre />
      <SecProjetos />
    </>
  );
}

export default PageInicio;
