import Header from "../../components/header/index.tsx";
import Body from "../../components/body/index.tsx";
import style from './Home.module.scss'

function HomePage() {
    return (
		<div className={style.app}>
			<Header></Header>
			<Body></Body>
		</div>
    );
}

export default HomePage;