const contact = () => (
	<section className="w-4/5 p-5 flex flex-col justify-center items-center_form">
		<h2 className="text-2xl font-medium text-gray-700">Skontaktuj się z nami</h2>
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
