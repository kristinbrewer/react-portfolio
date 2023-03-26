import React from 'react';

export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <img src={require ('../assets/headshot.jpg')} alt="Photo of Kristin Brewer"/>
      <p>
        My name is Kristin and I am a web developer based in Charlottesville, Virginia. I have experience working with HTML, CSS and am currently learning JavaScript.
        Before learning to code, I worked clinically and in leadership as a speech-language-pathologist in the healthcare setting.  
        My strengths include: high-level communication, eagerness to learn and organization.
        When I am not coding, you can find me enjoying time with my family, hiking, taking or teaching a yoga class and dabling in photography. 
      </p>
    </div>
  );
}
