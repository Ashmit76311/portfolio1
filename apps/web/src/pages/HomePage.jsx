import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import ContactForm from '../components/ContactForm.jsx';
import { Button } from '../components/ui/button.jsx';

const projects = [
  {
    title: 'URIS',
    description: 'A case-study project focused on building a useful, data-driven web experience.',
    path: '/projects/uris',
  },
  {
    title: 'Crypto Dashboard',
    description: 'A dashboard concept for tracking crypto market data and presenting useful insights.',
    path: '/projects/crypto-dashboard',
  },
];

const skills = ['React', 'Node.js', 'Express', 'Tailwind CSS', 'Data Engineering', 'API Design'];

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main>
        <section className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Full-Stack Data Engineer
            </p>
            <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-tight">
              Ashmit Kumar Srivastav
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-8">
              I build web apps and data systems that turn raw information into clear, useful
              products. This portfolio is under active development, so we are getting the
              foundation working first.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button asChild>
                <a href="mailto:ashmitsrivastav40@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="#projects">
                  View Projects
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section id="about" className="border-y border-border bg-card/40">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-3xl font-bold">About</h2>
            <p className="mt-4 max-w-3xl text-muted-foreground leading-7">
              I am learning and building across frontend, backend, and data engineering. The
              goal of this project is to become a clean portfolio with case studies, working
              navigation, and a reliable contact flow.
            </p>
          </div>
        </section>

        <section id="projects" className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold">Projects</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article key={project.path} className="rounded-lg border border-border bg-card p-6">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="mt-3 text-muted-foreground leading-7">{project.description}</p>
                <Button asChild variant="outline" className="mt-5">
                  <Link to={project.path}>
                    Open Project
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-border bg-card/40">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-3xl font-bold">Skills</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span key={skill} className="rounded-md border border-primary/30 bg-primary/10 px-3 py-2 text-sm text-primary">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <h2 className="text-3xl font-bold">Contact</h2>
              <p className="mt-4 text-muted-foreground leading-7">
                Send a message through the form, or use the direct links below. The form is wired
                to the API now; it will start sending real email after SMTP credentials are added.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild>
                  <a href="mailto:ashmitsrivastav40@gmail.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Email
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href="https://github.com/ashmit" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href="https://linkedin.com/in/ashmit" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
