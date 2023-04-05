import './styles/home.css'
import galinhaDinheiro from '../assets/galinhadinheiro.png'
import Menu from './menu'
import Sobre from './Sobre'
import Resenha from './review'
import Galeria from './galeria'
import Equipe from './Equipe'

function Home() {
    return ( 
        <>
        <section id="Home">
<div className="main">

<div className="main_text">
    <h1>Galinha<span>feliz</span><br />e bem cuidada</h1>
</div>

<div className="main_image">
    <img src={galinhaDinheiro} />
</div>

</div>

<p>
Nós, da Oval Delivery, somos uma avicultora que preza pela qualidade de aves galináceos. Temos a finalidade de oferecer você, sua casa ou sua empresa, comprador, a melhor ave do mercado de pecuária. Nossos animais são bem cuidados desde seu nascimento até a sua casa.
</p>

<div className="main_btn">
<a href="/Pedido">Peça agora</a>
<i className="fa-solid fa-angle-right"></i>
</div>

</section>


</>
     );
}

export default Home;