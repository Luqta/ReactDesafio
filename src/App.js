import style from './App.module.scss'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";	
import styled, { ThemeProvider } from 'styled-components';


import HomePage from './pages/homePage/index'
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