import React from "react";

function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-slate-950">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-turquoise">
        Contact
      </h2>
      <div className="text-center">
        <p className="text-lg mb-4 text-gray-400">Phone: +216 52 196 997</p>
        <p className="text-lg mb-4 text-gray-400">
          Email: esmailkhorchani.dev@gmail.com
        </p>
        <p className="text-lg mb-4 text-gray-400">
          Location: Birlahmar, Tatawin, Tunisia
        </p>
        <div className="flex justify-center space-x-4 mt-8">
          <a
            href="https://github.com/EsmailDev21"
            className="text-2xl hover:text-turquoise"
          >
            <i className="fab fa-github"></i> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
