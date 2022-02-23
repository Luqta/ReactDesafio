import Header from "./components/header/index.tsx";
import Body from "./components/body/index.tsx";
import style from './App.module.scss'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";	

import HomePage from './pages/home/index'
import GridPage from './pages/gridPage/index'

function App() {
    return (
		<div className={style.app}>
			<Router>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/GridPage" element={<GridPage />} />
				</Routes>
			</Router>
		</div>
    );
}

export default App;