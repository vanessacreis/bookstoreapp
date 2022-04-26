import * as S from "./infolivro.js";
import Div1 from "../../Components/Container01_InfoLivro/Index.jsx";

import Div2 from "../../Components/Container02_InfoLivro/Index.jsx";

import { api } from "../../Services/Api.js"
import Footer from "../../Components/Footer/Footer.jsx"
import { useParams } from "react-router-dom";
import { useEffect, useState} from "react";
function SobreOLivro(){
    const {id,name}= useParams();
    const [livro,setLivro] = useState([]);
    useEffect(()=>{
        api.get("books/book/" + id).then((res)=>{
            console.log(res);
            setLivro(res.data.book[0])
        })
    },[id])
    return(
        <S.Main>
            <Div1 livro={livro}
            key={id}/>
            <Div2 livro={livro} key={livro.ID_Books}/>
        </S.Main>
    )
}
export default SobreOLivro