import * as S from "./livreiro.js";
import Footer from "../../Components/Footer/Footer.jsx";
import FormLogin from "../../Components/FormLogin/FormLogin.jsx";

const Livreiro = ({ login, setLogin }) => {
  return (
    <>
      <S.Container>
        <S.Login>
          <img src="/assets/imgs/livraria-vermelho.svg" alt="" />
          <FormLogin login={login} setLogin={setLogin} />
        </S.Login>
      </S.Container>
      <Footer />
    </>
  );
};

export default Livreiro;
