import './footer.css';
import { FaInstagram, FaFacebook, FaGoogle, FaGithub, FaLinkedin} from 'react-icons/fa';

function Footer () {
    return (
        <>
            <footer>
                <div className="footer-container">
                    <div className="social-media">
                        <a href="https://www.facebook.com/Re9Acao.Solucoes/" target="_blank" rel="noopener noreferrer" className="botao">
                            <FaFacebook /> 
                        </a>

                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=contato@re9acao.com.br&su=Assunto%20do%20Email&body=Mensagem%20inicial%20aqui." target="_blank" rel="" className="botao">
                           <FaGoogle/>
                        </a>

                        <a href="" target="_blank" rel="noopener noreferrer" className="botao">
                            <FaGithub />
                        </a>

                        <a
                        href="http://instagram.com/re9acao_solucoes_integradas"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="botao"
                    >
                        <FaInstagram /> 
                    </a>

                        <a href="http://linkedin.com/gustavoboudoux" target="_blank" rel="noopener noreferrer" className="botao">
                            <FaLinkedin />
                        </a>
                    </div>   
                </div>
                
                <div className="footer-bottom">
                        <p className="direitos-reservados">&copy; 2024; Todos os direitos reservados - <span className="empresa">Re9ação</span></p>
                    </div>
            </footer>
    
        </>  
        
    );
};

export default Footer;