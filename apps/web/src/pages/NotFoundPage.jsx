import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, SearchX } from 'lucide-react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { Button } from '../components/ui/button.jsx';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary">
          <SearchX className="h-8 w-8" />
        </div>
        <p className="mt-8 text-sm font-semibold uppercase tracking-wider text-primary">404</p>
        <h1 className="mt-3 text-4xl md:text-5xl font-bold">Page Not Found</h1>
        <p className="mt-5 text-muted-foreground leading-7">
          This page does not exist yet. Head back home and choose one of the available sections
          or project pages.
        </p>
        <Button asChild className="mt-8">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back Home
          </Link>
        </Button>
      </main>
      <Footer />
    </div>
  );
};

export default NotFoundPage;
