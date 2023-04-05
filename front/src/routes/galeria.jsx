import './styles/galeria.css'
import galinheiroUm from '../assets/galinheiro1.jpg'
import galinheiroDois from '../assets/galinheiro2.jpg'
import galinheiroTres from '../assets/galinheiro3.jpg'
import galinheiroQuatro from '../assets/galinheiro4.jpg'
import galinheiroCinco from '../assets/galinheiro5.jpg'
import galinheiroSeis from '../assets/galinheiro6.jpg'



function Galeria() {
    return ( 
        <>
        <div className="galeria" id="Galeria">
        <h1>Nossos<span>Galinheiros</span></h1>

        <div className="galeria_image_box">
            <div className="galeria_image">
                <img src={galinheiroUm} />

                <h3>Galinheiro 1</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi sint eveniet laboriosam 
                </p>
                <a href="#" className="galeria_btn">Peça agora</a>
            </div>

            <div className="galeria_image">
                <img src={galinheiroDois} />

                <h3>Galinheiro 2</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi sint eveniet laboriosam 
                </p>
                <a href="#" className="galeria_btn">Peça agora</a>
            </div>
            <div className="galeria_image">
                <img src={galinheiroTres} />

                <h3>Galinheiro 3</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi sint eveniet laboriosam 
                </p>
                <a href="#" className="galeria_btn">Peça agora</a>
            </div>
            <div className="galeria_image">
                <img src={galinheiroQuatro} />

                <h3>Galinheiro 4</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi sint eveniet laboriosam 
                </p>
                <a href="#" className="galeria_btn">Peça agora</a>
            </div>
            <div className="galeria_image">
                <img src={galinheiroCinco} />

                <h3>Galinheiro 5</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi sint eveniet laboriosam 
                </p>
                <a href="#" className="galeria_btn">Peça agora</a>
            </div>
            <div className="galeria_image">
                <img src={galinheiroSeis} />

                <h3>Galinheiro Gótico</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi sint eveniet laboriosam 
                </p>
                <a href="#" className="galeria_btn">Peça agora</a>
            </div>
        </div>
    </div>
</>
     );
}

export default Galeria;