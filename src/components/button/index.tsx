import style from './Button.module.scss';
import styled, { ThemeProvider } from 'styled-components';

interface Props {
	fontColor?: string;
	bgColor: string;
	nome?: React.ReactNode;
	onClick: () => void
}
/**
 * 
 * @returns Componente de Button que é para ser renderizado em algumas partes de ambas telas
 */
 const Button: React.FC<Props> = ({ 
    bgColor,
	fontColor,
    nome,
    onClick 
}) => { 
	return (
		<button 
			className={style.button}
			onClick={onClick}
			style={{
				backgroundColor: bgColor,
				color: fontColor
			}}
			>
			{nome}
		</button>
	);
}

export default Button