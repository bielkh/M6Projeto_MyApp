import './styles/resenha.css'
import Gus from '../assets/gus.png'
import izzy from '../assets/homemGalinha.jpg'
import tweedy from '../assets/tweedy.jpg'
import venom from '../assets/venom.jpg'
 

function Resenha() {
    return ( 
        <>
            <div className="review" id="Resenha">
        <h1>Famosos que<span>Recomendam</span></h1>

        <div className="review_box">
            <div className="review_card">

                <div className="review_profile">
                    <img src={izzy} />
                </div>

                <div className="review_text">
                    <h2 className="name">Homem Galinha</h2>

                    <div className="review_icon">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star-half-stroke"></i>
                    </div>

                    <div className="review_social">
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-linkedin-in"></i>
                    </div>

                    <p>
                        Uso as penas das galinhas para poder fazer minha fantasia e continuar trabalhando em uma loja de brinquedos enquanto roubo brinquedos raros de crianças. Fantástico! Recomendo demais.
                    </p>

                </div>

            </div>

            <div className="review_card">

            <div className="review_profile">
                    <img src={Gus} />
                </div>

                <div className="review_text">
                    <h2 className="name">Gus Fring</h2>

                    <div className="review_icon">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star-half-stroke"></i>
                    </div>

                    <div className="review_social">
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-linkedin-in"></i>
                    </div>

                    <p>
                        Simplesmente magnífico. As galinhas são cuidadas de forma delicada o que faz o sabor delas e a maciez ficar excepcional. Junto do tempero e da fritura de Los Pollos Hermanos nós fazemos a combinação perfeita. Continuem com o bom trabalho que continuaremos oferecendo ótimos pedaços de frangos e galinhas fritas. Fica aqui a recomendação da franquia Los Pollos Hermanos.
                    </p>

                </div>

            </div>

            <div className="review_card">

            <div className="review_profile">
                    <img src={tweedy} />
                </div>

                <div className="review_text">
                    <h2 className="name">Sra. Tweedy</h2>

                    <div className="review_icon">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star-half-stroke"></i>
                    </div>

                    <div className="review_social">
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-linkedin-in"></i>
                    </div>

                    <p>
                        Essas galinhas são magníficas! Logo vou transformar meu galinheiro em uma mina de ouro e ficar RICA! Enquanto isso, as que já são gordas o suficiente eu acabo comendo. Recomendo! O Sr. Tweedy acha que essas galinhas se juntaram com as outras para armar uma fuga, mas é só ideia da cabeça maluca dele.   
                    </p>

                </div>

            </div>

            <div className="review_card">

            <div className="review_profile">
                    <img src={venom} />
                </div>

                <div className="review_text">
                    <h2 className="name">Venom e Eddie Brock</h2>

                    <div className="review_icon">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star-half-stroke"></i>
                    </div>

                    <div className="review_social">
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-linkedin-in"></i>
                    </div>

                    <p>
                    Venom estava cansado de comer galinhas e chocolate. Principalmente as galinhas, animais estúpidos. Mas as galinhas daqui são diferentes. Eddie compra sempre que pode e eu acabo devorando todas em um dia. Venom e Eddie recomendam.
                    </p>

                </div>

            </div>

        </div>

    </div>

        </>
     );
}

export default Resenha;