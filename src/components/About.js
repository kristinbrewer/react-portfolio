import React from 'react';
import '../App.css';

export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <img src={require ('../assets/headshot.jpg')} alt="Kristin Brewer"/>
      <p>
        My name is Kristin and I am a web developer based in Charlottesville, Virginia. I have experience working with front and back-end modalities such as: HTML, CSS, Node, databases and REACT.
        Before learning to code, I worked clinically and in leadership as a speech-language-pathologist in the healthcare setting.  
        My strengths include: high-level communication, eagerness to learn and organization.
        When I am not coding, you can find me enjoying time with my family, hiking, taking or teaching a yoga class and dabling in photography. 
      </p>
    </div>
  );
}
