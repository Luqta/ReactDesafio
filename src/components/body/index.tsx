import SVGIcon from '../../helpers/SVGIcon';
import style from './Body.module.scss';
import { useNavigate } from "react-router-dom";

/**
 * 
 * @returns Componente de Header que é utilizado página inicial
 */
export default function Body(){
    const navigate = useNavigate();
    
    return(
        <div className={style.body}>
			<section>
                <h1>O maior banco de devs do Brasil</h1>
                <p>Nao importa se front ou back end,  fazer networking e muito importante. Faça parte da maior comunidade de desenvolvedores brasileiros.</p>

                <button onClick={() => navigate('./GridPage')}>
                    Entre agora
                </button>
            </section>
            <div className={style.programadorDiv}>
                <SVGIcon name="Programador"></SVGIcon>
            </div>
		</div>
    )
}