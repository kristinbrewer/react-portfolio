import React, { useState } from 'react';
import Navigation from './Navigation';
import About from './About';
import Project from './Project';
import Contact from './Contact';
import Header from './Header';
import Footer from './Footer';
import Resume from './Resume';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState('About');
    
  // This method is checking to see what the value of `currentPage` is. 
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Project') {
      return <Project />;
    }
    if (currentPage === 'Resume') {
        return <Resume />;
      }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className='body'>
      <Header />  
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}
