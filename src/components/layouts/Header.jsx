import { Link } from "react-router-dom";
import './header.scss'
import { IoIosClose } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import img from '/imgs/logo.png'


function menuHamburguerAtivar() {
    const navPrincipal = document.querySelector('#navPrincipal')    
    const btnMenuAtivar = document.querySelector('#button-open-menu')
    const btnMenuFechar = document.querySelector('#button-close-menu')

    btnMenuAtivar.classList.add('hidden')
    btnMenuFechar.classList.remove('hidden')
    navPrincipal.classList.add('nav-ativa')
}

function menuHamburguerFechar(sec) {
    const navPrincipal = document.querySelector('#navPrincipal')
    const btnMenuAtivar = document.querySelector('#button-open-menu')
    const btnMenuFechar = document.querySelector('#button-close-menu')

    btnMenuAtivar.classList.remove('hidden')
    btnMenuFechar.classList.add('hidden')
    navPrincipal.classList.remove('nav-ativa')


    setTimeout(() => {
        const secao = sec
        const targetElement = document.getElementById( secao );
        const offsetTop = targetElement.offsetTop - 80;
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }, 100)


}



function Header() {
    return(
        <header id="header">           
                <div className="container">
                    <Link className="logo" to='/'><img  src={img} alt="" /></Link>
                    <nav className='' id='navPrincipal'>
                        <ul>
                            <li><Link className="item-nav" to='/ujhessie' onClick={() => menuHamburguerFechar('secInicio')}>Início</Link></li>
                            <li><Link className="item-nav" to='/ujhessie' onClick={() => menuHamburguerFechar('secSobre')}>Sobre</Link></li>
                            {/* <li><Link className="item-nav" to='/ujhessie' onClick={() => menuHamburguerFechar('secProjetos')}>Projetos</Link></li> */}
                            <li><Link className="item-nav" to='/ujhessie' onClick={() => menuHamburguerFechar('contatos')}>Contatos</Link></li>
                            <li><Link className="item-nav todos-projetos" to='/todosprojetos' onClick={() => menuHamburguerFechar('header')}>Mais Projetos</Link></li>
                        </ul>

                        <Link  className="button-contato-header item-nav" onClick={() => menuHamburguerFechar('contatos')}>Contato</Link>

                        <div className="div-menu-h">
                            <IoMdMenu className="icon-menu" id="button-open-menu" onClick={ menuHamburguerAtivar } />
                            <IoIosClose className="icon-menu hidden" id="button-close-menu" onClick={ menuHamburguerFechar } />
                        </div>
                    </nav>
                </div>
        </header>
    )
}

export default Header