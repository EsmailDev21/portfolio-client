function Education() {
  const education = [
    {
      degree: "M.Sc in Computer Science and Artificial Intelligence",
      institution: "Faculty of Science - Monastir",
      years: "2023-2026",
    },
    {
      degree: "Bachelor’s degree in Information Technologies",
      institution: "Higher Institute of Technological Studies - Medenine",
      years: "2020-2023",
    },
    {
      degree: "Baccalauréats in Mathematics",
      institution: "Birlahmer’s High School",
      years: "2017-2018",
    },
  ];

  return (
    <section id="education" className="py-20 px-4 ">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-indigo-600">
        Education
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {education.map((edu, index) => (
          <div key={index} className="bg-slate-900 p-4 rounded-lg">
            <h3 className="text-xl font-bold">{edu.degree}</h3>
            <p className="text-gray-400">{edu.institution}</p>
            <p className="text-gray-400">{edu.years}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
