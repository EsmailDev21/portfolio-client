import React from "react";

function Clients() {
  return (
    <section className="section bg-white text-center py-16 border-t">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold">
          I'm proud to have collaborated with some awesome companies:
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
          {/* Add client logos here */}
        </div>
      </div>
    </section>
  );
}

export default Clients;
