function Skills() {
  const skills = [
    { name: "React.js", icon: "fab fa-react" },
    { name: "Node.js", icon: "fab fa-node-js" },
    { name: "Nest.js", icon: "fas fa-server" },
    { name: "TypeScript", icon: "fas fa-code" },
    { name: "CSS3", icon: "fab fa-css3-alt" },
    { name: "HTML5", icon: "fab fa-html5" },
    { name: "Redux", icon: "fas fa-sync" },
    { name: "MongoDB", icon: "fas fa-database" },
    { name: "PostgreSQL", icon: "fas fa-database" },
    { name: "React Native", icon: "fab fa-react" },
    { name: "Next.js", icon: "fas fa-code" },
    { name: "Git & GitHub", icon: "fab fa-github" },
    { name: "UML", icon: "fas fa-project-diagram" },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-turquoise">
        Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-slate-900 p-4 rounded-lg flex flex-col items-center"
          >
            <i className={`${skill.icon} text-4xl mb-4 text-turquoise`}></i>
            <p className="text-xl">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
