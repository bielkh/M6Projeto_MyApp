import './styles/equipe.css'
import Andre from '../assets/andre.jpg'
import Clara from '../assets/clara.jpg'
import Flavia from '../assets/flavia.jpg'
import Biel from '../assets/biel.png'
import Lipe from '../assets/lipe.jpg'
import Pam from '../assets/pam.jpg'


function Equipe() {
    return ( 
        <>
         <div className="equipe">
        <h1>Nossa<span>Equipe</span></h1>

        <div className="equipe_box">
            <div className="profile">
                <img src={Andre} />

                <div className="info">
                    <h2 className="nome">André Carlos</h2>
                    <p className="bio">Colaborador 3</p>

                    <div className="equipe_icon">
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-instagram"></i>
                    </div>

                </div>

            </div>

            <div className="profile">
                <img src={Clara} />

                <div className="info">
                    <h2 className="nome">Clara</h2>
                    <p className="bio">Colaboradora 2</p>

                    <div className="equipe_icon">
                          <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-instagram"></i>
                    </div>

                </div>

            </div>

            <div className="profile">
                <img src={Flavia} />

                <div className="info">
                <h2 className="nome">Flávia</h2>
                    <p className="bio">Co-facilitadora</p>

                    <div className="equipe_icon">
                          <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-instagram"></i>
                    </div>

                </div>

            </div>

            <div className="profile">
                <img src={Biel} />

                <div className="info">
                <h2 className="nome">Gabriel</h2>
                    <p className="bio">Gestor de Conhecimento</p>

                    <div className="equipe_icon">
                          <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-instagram"></i>
                    </div>
                </div>
                
            </div>
            <div className="profile">
                <img src={Lipe} />

                <div className="info">
                <h2 className="nome">Felipe Lopes</h2>
                    <p className="bio">Colaborador 1</p>

                    <div className="equipe_icon">
                          <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-instagram"></i>
                    </div>
                </div>
            </div>
            <div className="profile">
                <img src={Pam} />

                <div className="info">
                <h2 className="nome">Pâmela</h2>
                    <p className="bio">Gestor de Engajamento</p>

                    <div className="equipe_icon">
                          <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-instagram"></i>
                    </div>
                </div>
            </div>
        </div>
        </div>
        


        </>
     );
}

export default Equipe;