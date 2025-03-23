import Skills from "../components/Skills";

const Portfolio = () => {
  return (
    <div className="container">
      <h1>💼 Experiência Profissional</h1>
      <p><strong>CEO da Caixa Forte Patinhas Inc.</strong> - Desde 1902</p>
      <p>Controle e expansão do maior cofre já visto...</p>

      <h2>🌍 Aventuras Memoráveis</h2>
      <ul>
        <li>🗺️ A Conquista do Tesouro de Atlantis</li>
        <li>⛏️ Corrida ao Vale do Ouro</li>
        <li>❄️ O Desafio da Noite Polar</li>
      </ul>

      <Skills />
    </div>
  );
};

export default Portfolio;
