import style from './CardGrid.module.scss';
import Card from './../card/index.tsx'

/**
 * 
 * @returns Componente de Card que é utilizado página de grid
 */
export default function CardGrid(){
    return(
        <div className={style.cardGrid}>
			<Card/>
            <Card/>
            <Card/>
		</div>
    )
}