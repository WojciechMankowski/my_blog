const contact = () => (
	<section className="container_form">
		<h2>Skontaktuj się z nami</h2>
		<p>Masz pytania lub sugestie? Napisz do nas!</p>
		<p>Uzupełnij formulasz kontaktowy lub napisz na tego e-maila expale@gmail.com</p>
		<div className="form">
			<form action="#" method="post">
				<label for="name">Imię:</label>
				<input type="text" id="name" name="name" required />

				<label for="email">Email:</label>
				<input type="email" id="email" name="email" required />

				<label for="message">Wiadomość:</label>
				<textarea id="message" name="message" rows="4" required></textarea>

				<input type="submit" value="Wyślij" />
			</form>
		</div>
	</section>
)
export default contact
