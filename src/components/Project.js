import React from 'react';
import '../App.css';

export default function Project() {
  return (
    <div>
      <h1>Project Portfolio Page</h1>
      <section class="page-section" id="work">
           <h2>Here are some of my completed projects:</h2>
           <p>Click the title to take you to the GitHub Repo</p>
        <div class="flex-container">
            <a href="https://github.com/kristinbrewer/README-Generator" className="flex-item project-one">
                <div>
                  <h3>ReadMe Generator</h3>
                </div>
              </a>

            <a href="https://github.com/kristinbrewer/team-profile-generator" className="flex-item project-two">
                 <div>
                    <h3>Team Profile Generator</h3>
                </div>
            </a>
        
            <a href="https://github.com/kristinbrewer/note-taker" className="flex-item project-three">
                <div>
                  <h3>Note Taker App</h3>
                </div>
              </a>
              <a href="https://kbosu-note-taker.herokuapp.com/" className="deployed"> <div>Note Taker Deployed on Heroku </div> </a>
              

            <a href="sql-employee-tracker" className="flex-item project-four">
                <div>
                  <h3>Employee Tracker</h3>
                </div>
            </a>

            <a href="e-commerce-orm" className="flex-item project-five">
                <div>
                  <h3>E-Commerce ORM</h3>
                </div>
            </a>
            </div>

            <a href="https://github.com/kristinbrewer/text-editor-pwa" className="flex-item project-six">
                <div>
                  <h3>Text Editor PWA</h3>
                </div>
            </a>
            <a href="https://kbtexteditorosu2023.herokuapp.com/" className="deployed"> <div>PWA Deployed on Heroku </div> </a>
            
    </section>
    </div>
  );
}
