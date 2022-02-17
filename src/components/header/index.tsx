import SVGIcon from '../../helpers/SVGIcon';
import style from './Header.module.scss';

/**
 * 
 * @returns Componente de Header que é utilizado página inicial
 */
export default function Header (){
    return(
        <nav className={style.NavBar}>
            <section className='HeaderIcons'>
                <SVGIcon name="Discord"/> 
                <SVGIcon name="Facebook"/> 
                <SVGIcon name="Linkedin"/>
            </section>
            <section className='HeaderLogo'>
                <SVGIcon name="Logo"/> 
                <h1>Ballerini Devs</h1>
            </section>
        </nav>
    )
}