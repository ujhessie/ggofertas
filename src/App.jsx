import { HashRouter as Router, Route, Routes } from "react-router-dom";
import PageInicio from "./components/rotas/RotaInicio";
import ProdutoDetalhe from "./components/rotas/ProdutoDetalhe";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";

import ButtonScroll from "./components/ButtonScroll/ButtonScroll";
import ButtonBack from "./components/buttonsNavigation/ButtonBack";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <ButtonScroll />
        <ButtonBack />
        <Routes>
          <Route path="/" element={<PageInicio />} />
          <Route path="/produto/:produtoId" element={<ProdutoDetalhe />} />
          {/* Outras rotas */}
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
