import React from "react";

export function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-background via-slate-900 to-black">
      <main className="container-max py-6 md:py-10">
        <header className="mb-6 md:mb-8">
          <h1 className="h1 text-primary">Henri Lehtinen – Software Consultant</h1>
          <p className="mt-2 md:mt-3 text-lg md:text-xl font-medium text-foreground">
            Full-Stack Developer. JVM Expert. Agile Builder.
          </p>
          <p className="lead mt-3 md:mt-4">
            Main value proposition paragraph...
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <section className="section">
            <h2 className="h2 text-secondary">About Me</h2>
            <p className="lead mt-2">
              Professional background and experience description...
            </p>
          </section>

          <section className="section">
            <h2 className="h2 text-secondary">Technical Expertise</h2>
            <ul className="mt-2 space-y-1 text-sm md:text-base">
              <li className="text-foreground"><span className="text-accent font-medium">JVM Languages</span> (Java, Kotlin, Scala, Clojure)</li>
              <li className="text-foreground"><span className="text-accent font-medium">AI/ML Technologies</span></li>
              <li className="text-foreground"><span className="text-accent font-medium">AWS Cloud Services</span></li>
              <li className="text-foreground"><span className="text-accent font-medium">Agile Methodologies</span></li>
            </ul>
          </section>

          <section className="section md:col-span-2">
            <h2 className="h2 text-secondary">Get In Touch</h2>
            <p className="lead mt-2">Professional contact information</p>
            <div className="mt-3 flex flex-wrap gap-3 text-sm md:text-base">
              <a className="inline-flex items-center rounded-md bg-primary/10 px-3 py-2 text-primary ring-1 ring-primary/30 hover:bg-primary/15 transition" href="#" aria-label="Email">Email</a>
              <a className="inline-flex items-center rounded-md bg-secondary/10 px-3 py-2 text-secondary ring-1 ring-secondary/30 hover:bg-secondary/15 transition" href="#" aria-label="LinkedIn">LinkedIn</a>
              <a className="inline-flex items-center rounded-md bg-accent/10 px-3 py-2 text-accent ring-1 ring-accent/30 hover:bg-accent/15 transition" href="#" aria-label="GitHub">GitHub</a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
