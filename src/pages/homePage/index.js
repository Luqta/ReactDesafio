import Header from "../../components/header/index.tsx";
import style from './Home.module.scss'

import SVGIcon from '../../helpers/SVGIcon';
import Button from '../../components/button/index.tsx'
import { useNavigate } from "react-router-dom";


function HomePage() {
	const navigate = useNavigate();

    return (
		<div className={style.homePage}>
			<Header/>

			<div className={style.body}>
				<section>
					<h1>O maior banco de devs do Brasil</h1>
					<p>Nao importa se front ou back end,  fazer networking e muito importante. Faça parte da maior comunidade de desenvolvedores brasileiros.</p>

					<Button 
						bgColor="#27AE60"
						onClick={() => navigate('./GridPage')}
						nome = "Entre agora"
                	/>
				</section>
				<div className={style.programadorDiv}>
					<SVGIcon name="Programador"></SVGIcon>
				</div>
			</div>
		</div>
    );
}

export default HomePage;