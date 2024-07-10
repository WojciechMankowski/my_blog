import { Forms } from "./components/forms";

const Contact = () => (
  <section className="w-4/5 p-5 flex flex-col justify-center items-center">
    <h2 className="text-2xl font-medium text-gray-700">
      Skontaktuj się z nami
    </h2>
    <p className="mt-4 mb-2">Masz pytania lub sugestie? Napisz do nas!</p>
    <p className="mb-4">
      Uzupełnij formularz kontaktowy lub napisz na ten adres e-mail:{" "}
      <a href="mailto:expale@gmail.com" className="text-primary underline">
        expale@gmail.com
      </a>
    </p>
    <Forms />
  </section>
);

export default Contact;
