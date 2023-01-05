import { StyledHomeContact } from "./style";

const HomeContact = () => {
	return (
		<StyledHomeContact>
			<div className="contactMap">
				<iframe
					title="NewYorkMap"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNova%20Iorque%2C%20NY%2C%20EUA!5e0!3m2!1spt-BR!2sbr!4v1672860451767!5m2!1spt-BR!2sbr"
					width="100%"
					height="450"
					allowFullScreen=""
					loading="lazy"
				></iframe>
			</div>

			<div className="contactText">
				<h2>ENTRE EM CONTATO</h2>
				<span>Alguma duvida? Fale com um de nossos atendentes</span>
				<form>
					<input placeholder="E-mail" />
					<input placeholder="Senha" />
					<textarea placeholder="Mensagem" />
					<button type="submit">ENVIAR</button>
				</form>
			</div>
		</StyledHomeContact>
	);
};

export default HomeContact;
