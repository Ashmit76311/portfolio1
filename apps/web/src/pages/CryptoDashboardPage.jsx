import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { Button } from '../components/ui/button.jsx';

const CryptoDashboardPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Button asChild variant="outline">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back Home
          </Link>
        </Button>

        <article className="mt-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Case Study</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold">Crypto Dashboard</h1>
          <p className="mt-6 text-lg text-muted-foreground leading-8">
            This page is a working placeholder for the Crypto Dashboard project. Add the data
            source, dashboard features, charts, API design, and lessons learned here.
          </p>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default CryptoDashboardPage;
