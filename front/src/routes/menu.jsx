import './styles/menu.css'
import sussex from '../assets/sussex.jpg'
import barbuda from '../assets/barbuda.jpg'
import dagua from '../assets/galinhadagua.jpg'
import pinta from '../assets/pinta.jpg'
import angola from '../assets/angola.png'
import rhode from '../assets/rhode.jpg'
import marans from '../assets/marans.png'
import pintadinha from '../assets/galinhapintadinha.jpg'


function Menu() {
    return ( 
        <div className='fundo'>
        <div className="menu" id="Menu">
            <div className='menuTitle'>
        <h1>Nossas<span>Galinhas</span></h1>
</div>
        <div className="menu_box">
            <div className="menu_card">

                <div className="menu_image">
                    <img src={sussex} />
                </div>

                <div className="small_card">
                    <i className="fa-solid fa-heart"></i>
                </div>

                <div className="menu_info">
                    <h2>Sussex</h2>
                    <p>
                    O Sussex é uma espécie mansa e tranquila, de constituição pesada e presentes em variedades de cores diferentes: surgem em oito cores (com um par sendo mais desenvolvido) e tem uma versão garnisé em tamanho 1/4; as galinhas anãs poderão possuir qualquer uma das oito cores.
                    </p>
                    <div className="menu_icon">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <a href="/Pedido" className="menu_btn">Peça agora</a>
                </div>

            </div> 
            
            <div className="menu_card">

                <div className="menu_image">
                    <img src={rhode} />
                </div>

                <div className="small_card">
                    <i className="fa-solid fa-heart"></i>
                </div>

                <div className="menu_info">
                    <h2>Rhode</h2>
                    <p>
                    A Rhode Island Red, também chamada de Galinha vermelha poedeira e "Rode", é uma raça de galinha dos Estados Unidos, desenvolvida na segunda metade do século XIX. É uma raça com duplo propósito, produzindo ovos e carne. 
                    </p>
                    <div className="menu_icon">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <a href="/Pedido" className="menu_btn">Peça agora</a>
                </div>

            </div> 

            <div className="menu_card">

                <div className="menu_image">
                    <img src={marans} />
                </div>

                <div className="small_card">
                    <i className="fa-solid fa-heart"></i>
                </div>

                <div className="menu_info">
                    <h2>Marans</h2>
                    <p>
                    O Marans, francês: Poule de Marans, é uma raça francesa de galinha de dupla finalidade, criada tanto para carne quanto para seus ovos marrons escuros. Originou-se perto da cidade portuária de Marans, no departamento de Charente-Maritime, na região de Nouvelle-Aquitaine, no sudoeste da França.
                    </p>
                    <div className="menu_icon">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <a href="/Pedido" className="menu_btn">Peça agora</a>
                </div>

            </div> 

            <div className="menu_card">

                <div className="menu_image">
                    <img src={angola} />
                </div>

                <div className="small_card">
                    <i className="fa-solid fa-heart"></i>
                </div>

                <div className="menu_info">
                    <h2>da Angola</h2>
                    <p>
                    A galinha-d'angola ou pintada-da-guiné é uma ave da ordem dos galináceos, originária da África e introduzida no Brasil pelos colonizadores portugueses, que a trouxeram da África Ocidental. É a mais conhecida da família das aves Numididae, e o único membro do gênero Numida.
                    </p>
                    <div className="menu_icon">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <a href="/Pedido" className="menu_btn">Peça agora</a>
                </div>

            </div> 

            <div className="menu_card">

            <div className="menu_image">
                    <img src={barbuda}/>
                </div>

                <div className="small_card">
                <i className="fa-solid fa-heart"></i>
                </div>

                <div className="menu_info">
                    <h2>Barbuda do Catolé</h2>
                    <p>
                    Barbuda do Catolé é um tipo de galináceos domésticos (Gallus Domesticus) surgida no Brasil no estado da Bahia.
                    </p>
                    <div className="menu_icon">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <a href="/Pedido" className="menu_btn">Peça agora</a>
                </div>

            </div> 

            <div className="menu_card">

            <div className="menu_image">
                    <img src={dagua}/>
                </div>

                <div className="small_card">
                <i className="fa-solid fa-heart"></i>
                </div>

                <div className="menu_info">
                    <h2>D'água</h2>
                    <p>
                    Gallinula chloropus, conhecida pelos nomes comuns de galinha-d'água, frango-d'água ou rabiscoelha, é uma ave da família Rallidae, ordem Gruiformes.
                    </p>
                    <div className="menu_icon">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <a href="/Pedido" className="menu_btn">Peça agora</a>
                </div>

            </div> 

            <div className="menu_card">

            <div className="menu_image">
                    <img src={pinta} />
                </div>

                <div className="small_card">
                    <i className="fa-solid fa-heart"></i>
                </div>

                <div className="menu_info">
                    <h2>Pinta Asturiana</h2>
                    <p>
                    A Pita Pinta Asturiana é uma raça espanhola de frango. É a única raça de frango nativa do Principado das Astúrias, no noroeste da Espanha.
                    </p>
                    <div className="menu_icon">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <a href="/Pedido" className="menu_btn">Peça agora</a>
                </div>

            </div> 

            <div className="menu_card">

                <div className="menu_image">
                    <img src={pintadinha} />
                </div>

                <div className="small_card">
                <i className="fa-solid fa-heart"></i>
                </div>

                <div className="menu_info">
                    <h2>Pintadinha</h2>
                    <p>
                    Galinha Pintadinha é um projeto infantil criado pelos produtores Juliano Prado e Marcos Luporini.
                    </p>
                    <div className="menu_icon">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <a href="/Pedido" className="menu_btn">Peça agora</a>
                </div>

            </div> 
    </div>
</div>
</div>

     );
}

export default Menu;