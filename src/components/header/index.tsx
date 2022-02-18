import SVGIcon from '../../helpers/SVGIcon';
import style from './Header.module.scss';

/**
 * 
 * @returns Componente de Header que é utilizado página inicial
 */
export default function Header (){
    return(
        <nav className={style.navBar}>
            <section className={style.headerIcons}>
                <SVGIcon classname={style.svgIcon} name="Discord"/> 
                <SVGIcon classname={style.svgIcon} name="Facebook"/> 
                <SVGIcon classname={style.svgIcon} name="Linkedin"/>
            </section>
            <section className={style.headerLogo}>
                <SVGIcon classname={style.svgIcon} name="Logo"/> 
            </section>
        </nav>
    )
}