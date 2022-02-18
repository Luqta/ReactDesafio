import Header from "../components/header/index.tsx";
import Body from "../components/body/index.tsx";
import style from './App.module.scss'

function App() {
    return (
		<div className={style.app}>
			<Header></Header>
			<Body></Body>
		</div>
    );
}

export default App;