import './styles/sobre.css'
import Desenho from '../assets/galinhadesenho.png'


function Sobre() {
    return ( 
        <>
        <div className="sobre" id="Sobre">
        <div className="sobre_main">

            <div className="image">
                <img src={Desenho} />
            </div>

            <div className="sobre_text">
                <h1><span>Sobre</span>nós</h1>
                <h3>Por que nos escolher?</h3>
                <p>
                    Nossas aves de alta qualidade oferecem um sabor incrível na sua alimentação. Sem uso de nenhuma substância ou de mal-tratos aos animais, oferecemos ótimas condições de vida e carinho ao galináceo. Oferecemos algo parecido como o famoso "wagyu", carne bovina japonesa que é cuidada desde seu nascimento para ter uma vida muito boa e para sua carne ser macia e mais suculenta. Respeitando a mãe natureza e não utilizando mais que o necessário para não ter desgastos desnecessários.
                </p>
            </div>

        </div>

        <a href="/Pedido" className="sobre_btn">Peça agora</a>


    </div>
        </>
     );
}

export default Sobre;