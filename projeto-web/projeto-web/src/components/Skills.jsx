const Skills = () => {
    const skills = [
      { name: "Gestão de Riquezas", level: "100%" },
      { name: "Decifração de Mapas Antigos", level: "90%" },
      { name: "Exploração Global", level: "100%" },
      { name: "Estratégia e Negociação", level: "100%" },
      { name: "Liderança de Equipes", level: "75%" },
    ];
  
    return (
      <div className="skills">
        <h2>🛠️ Habilidades e Tecnologias</h2>
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <span>{skill.name}</span>
            <div className="progress">
              <div className="progress-bar" style={{ width: skill.level }}></div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Skills;
  