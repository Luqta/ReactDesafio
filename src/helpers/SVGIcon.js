import React from "react";
import Discord from '../assets/Discord.svg'
import Facebook from '../assets/Facebook.svg'
import Linkedin from '../assets/Linkedin.svg'
import Logo from '../assets/Logo.svg'
import Blobs from '../assets/Blobs.svg'
import Programador from '../assets/Programador.svg'
import GithubIcon from '../assets/GithubIcon.svg'
import LinkedinIcon from '../assets/LinkedinIcon.svg'

/**
 * 
 * @param {*} props Parâmetro para passar qual o nome do ícone em SVG que será passado para o switch case renderizar 
 * @returns Ícone SVG que será renderizado em algum outro componente
 */
export default function SVGIcon(props){
    switch (props.name){
		case "Linkedin":
		return (
			<div>
				<img src={Linkedin} alt="Linkedin"></img>
			</div>
		);

		case "Facebook":
		return (
			<div>
				<img src={Facebook} alt="Facebook"></img>
			</div>
		);
		
		case "Discord":
		return (
			<div>
				<img src={Discord} alt="Discord"></img>
			</div>
		);

		case "Logo":
		return (
			<div>
				<img src={Logo} alt="Logo"></img>
			</div>
		);

		case "Blobs":
		return (
			<div>
				<img src={Blobs} alt="Blobs baixo"></img>
			</div>
		);

		case "Programador":
		return (
			<div>
				<img src={Programador} alt="Programador"></img>
			</div>
		);

		case "GithubIcon":
		return (
			<div>
				<img src={GithubIcon} alt="Github"></img>
			</div>
		);

		case "LinkedinIcon":
		return (
			<div>
				<img src={LinkedinIcon} alt="Linkedin"></img>
			</div>
		);

		default:
		return (
			<div>
				<img src="" alt=""></img>
			</div>
		)
    }
}