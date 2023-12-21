/* eslint-disable react/jsx-no-target-blank */
import './SecContatos.scss'

import { IoLogoGithub } from "react-icons/io";
import { BiLogoTwitter } from "react-icons/bi";
import { IoLogoInstagram } from "react-icons/io";
import { BiLogoTelegram } from "react-icons/bi";
import { BsBehance } from "react-icons/bs";

function SecContatos(){
    return (
        <section id='contatos'>
            <div className="container">
                <h2>Deseja entrar em <span>contato</span> comigo? Acesse minhas <span>redes sociais.</span></h2>
                
                {/* card */}
                <div className="card card-redes-sociais">
                        <div className="div-conteudo-card">
                            <a target='_blank' href="https://github.com/ujhessie" className="a-icon"><IoLogoGithub className='icon' /></a>
                            <a  target='_blank' href="https://twitter.com/ujhessie_" className="a-icon"><BiLogoTwitter className='icon' /></a>
                            <a target='_blank' href="https://www.instagram.com/ujhessie_/" className="a-icon"><IoLogoInstagram className='icon' /></a>
                            <a target='_blank' href="https://t.me/ujhessie" className="a-icon"><BiLogoTelegram className='icon' /></a>
                            <a target='_blank' href="https://www.behance.net/juniorrodrigues42" className="a-icon"><BsBehance className='icon' /></a>
                        </div>
                        <p className="desc">Não se acane em enviar-me uma mensagem. 😉</p>
                </div>
                {/* card */}


                <div className="div-grid">

                    {/* card */}
                    {/* <div className="card  card-email ">


                        <h4 className="nome-card">Envie-me um e-mail...</h4>


                        <div className="div-conteudo-card">
                            <div className="conteudo-email">
                                <div className="div-icon"><MdOutlineAlternateEmail className='icon' /></div>
                                <div className="div-input">
                                    <label htmlFor=""><a href="" className="email">juniorrodrigues4502@gmail.com</a></label>
                                    <input type="text" name="" id="" />
                                </div>
                            </div>
                        </div>


                        <p className="desc">Lorem, ipsum dolor sit amet consectetur.</p>


                    </div> */}
                    {/* card */}


                    {/* card */}
                    <div className="card card-redes-sociais">
                        <h4 className="nome-card">Ou acesse minhas redes sociais</h4>
                        <div className="div-conteudo-card">
                            <a href="" className="a-icon"><IoLogoGithub className='icon' /></a>
                            <a href="" className="a-icon"><IoLogoGithub className='icon' /></a>
                            <a href="" className="a-icon"><IoLogoGithub className='icon' /></a>
                            <a href="" className="a-icon"><IoLogoGithub className='icon' /></a>
                            <a href="" className="a-icon"><IoLogoGithub className='icon' /></a>
                        </div>
                        <p className="desc">Lorem, ipsum dolor sit amet consectetur.</p>
                    </div>
                    {/* card */}
                    
                </div>


            </div>
        </section>
    )
}

export default SecContatos