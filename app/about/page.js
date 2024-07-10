const about = () => (
  <section className="w-4/5 p-5 flex flex-col justify-center items-center">
    <div className="w-4/5 p-5 flex flex-col justify-center items-center">
      <h2 className="text-2xl font-medium text-gray-700">
        Witaj, jestem Wojciech!
      </h2>
      <img
        src="./assets/moje zdjęcie.png"
        alt="Zdjęcie Wojciecha"
        className="w-40 h-40 rounded-full mt-4"
      />
      <p className="text-center">
        Cześć! Nazywam się Wojciech i jestem pasjonatem programowania. Od kilku
        lat zajmuję się tworzeniem aplikacji webowych i mobilnych. Moją
        specjalnością są technologie frontendowe, takie jak HTML, CSS i
        JavaScript. Uwielbiam rozwiązywać problemy i dzielić się moją wiedzą z
        innymi.
      </p>
      <p className="text-center mb-4">
        Na tym blogu będę publikował artykuły na temat najnowszych trendów w
        programowaniu, poradniki oraz ciekawe projekty, którymi się zajmuję.
      </p>
    </div>
  </section>
);
export default about;
