import React, { useState } from 'react';
import Navigation from './Navigation';
import Home from './Home';
import About from './About';
import Project from './Project';
import Contact from './Contact';
import Header from './Header';
import Footer from './Footer';

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState('Home');
    
  // This method is checking to see what the value of `currentPage` is. 
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Project') {
      return <Project />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header />  
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}
