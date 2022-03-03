import style from './Card.module.scss';
import Shanks from '../../assets/shanks.jpg'
import Button from '../button/index.tsx'
import SVGIcon from '../../helpers/SVGIcon'

/**
 * 
 * @returns Componente de grid de cards que é utilizado página de grid
 */
export default function Card(){
    return(
        <div className={style.cardArea}>
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

                    <Button 
                        bgColor="#27AE60"
                        onClick={() => console.log("Click botão card")}
                        nome = "Ver mais"
                    />
                </span>
            </div>
            <span>
                    <Button 
                        bgColor="#DBB801"
                        fontColor="black"
                        onClick={() => console.log("Editar esse item")}
                        nome = "Editar"
                    /> 
                    <Button 
                        bgColor="#F42626"
                        fontColor="black"
                        onClick={() => console.log("Deletar esse item")}
                        nome = "Deletar"
                    />
                </span>
        </div>
    )
}