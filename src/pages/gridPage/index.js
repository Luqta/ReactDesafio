import Header from '../../components/header/index.tsx';
import CardGrid from '../../components/cardGrid/index.tsx';
import style from './gridPage.module.scss'

export default function GridPage() {
    return (
		<div className={style.gridPage}>
			<Header/>
			<CardGrid/>
		</div>
    );
}