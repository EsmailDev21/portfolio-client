function Projects() {
  return (
    <section className="section bg-white text-center py-16">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold">My Recent Work</h1>
        <p className="mt-4 text-lg">
          Here are a few past design projects I've worked on. Want to see more?{" "}
          <a className="text-primary" href="mailto:matt@pendeavor.com">
            Email me
          </a>
          .
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {/* Add individual project components here */}
        </div>
      </div>
    </section>
  );
}

export default Projects;
