import React from 'react';
import pdfFile from '../assets/KBrewerResume2023.pdf';
import '../App.css';

export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <div className='skills'>
        <h3>Front-End Skills</h3>
        <ul>
            <li>HTML5</li>
			<li>CSS3</li>
			<li>JavaScript</li>
			<li>jQuery</li>
			<li>Bootstrap</li>
			<li>React</li>
        </ul>
        <h3>Back-End Skills</h3>
        <ul>
            <li>API</li>
			<li>NodeJS</li>
			<li>Express</li>
			<li>Model View Controller</li>
			<li>Progressive Web Applications</li>
        </ul>
        <h3>Database Skills</h3>
        <ul>
            <li>MySQL</li>
			<li>Sequelize</li>
			<li>NoSQL</li>
			<li>MongoDB</li>
			<li>Mongoose</li>
			<li>GraphQL</li>
        </ul>
        <h3>Developer Tool Skills</h3>
        <ul>
            <li>Git</li>
			<li>npm</li>
			<li>Jest</li>
			<li>Webpack</li>
        </ul>
      </div>
      <div>
      <a href={pdfFile} target="_blank" rel="noopener noreferrer">Open Resume</a> <br></br>
      <a href={pdfFile} download>Download Resume</a> 
    </div>
    </div>
  );
}