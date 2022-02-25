import style from './Card.module.scss';
import Shanks from '../../assets/shanks.jpg'
import SVGIcon from '../../helpers/SVGIcon'
/**
 * 
 * @returns Componente de grid de cards que é utilizado página de grid
 */
export default function Card(){
    return(
        <div className={style.card}>
            <div className={style.imgContainer}>
                <img src={Shanks} alt="profile-picture"/>
            </div>
            <hr></hr>
            <h2>Lucas Mateus</h2>
            <h3>Desenvolvedor front-end</h3>
            <span>
                <SVGIcon name="GithubIcon"/>
                <SVGIcon name="LinkedinIcon"/>
                <button onClick={() => console.log('botão funcionando.')}>
                    Ver mais
                </button>
            </span>
		</div>
    )
}