import * as S from "./info.js";
import { api } from "../../Services/Api.js";
import Footer from "../../Components/Footer/Footer.jsx";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import InfoLivro from "../../Components/InfoLivro/InfoLivro.jsx";

function Info({ login }) {
  const { id } = useParams();
  const [livro, setLivro] = useState([]);
  useEffect(() => {
    api.get("books/book/" + id).then((res) => {
      console.log(res);
      setLivro(res.data.book[0]);
    });
  }, [id]);

  return (
    <>
      <S.Main>
        <InfoLivro livro={livro} login={login} />
      </S.Main>
      <Footer />
    </>
  );
}
export default Info;
