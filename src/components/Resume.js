import React from 'react';
import pdfFile from '../assets/KBrewerResume2023.pdf';

export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <div>
      <a href={pdfFile} download>Download Resume</a>
      <a href={pdfFile} target="_blank" rel="noopener noreferrer">Open Resume</a>
    </div>
    </div>
  );
}