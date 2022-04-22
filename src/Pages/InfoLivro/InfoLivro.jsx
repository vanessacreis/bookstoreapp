//
import styles from "./InfoLivro.module.css";
import Div1 from "../../Components/InfoLivro/DivEsquerda/index";
import Div2 from "../../Components/InfoLivro/DivDireita/index"
function SobreOLivro(){
    return(
        <main>
            <Div2/>
            <Div1/>
            
            <p className={styles.teste}>TESTE DO SCROLL</p>

        </main>
    )
}
export default SobreOLivro