import React from "react";

const BiographyInfo = () => {
  return (
    <div>
      <h4>
        Frontend Developer | Customer Experience Advocate | Business Analyst
      </h4>
      <p>
        I've worn a few different hats over the past 5 years, diving into
        various industries and roles that have shaped my skill set. For
        instance, I started my career at Releasy Customer Management as a
        Technical Service Specialist. There, I quickly rose to the position of
        Corporate Trainer, focusing on understanding customer needs and creating
        positive interactions. After my time at Releasy, I moved on to Amazon as
        a Fraud Investigation Analyst. In this role, I honed my skills in
        spotting patterns and fine-tuning processes to optimize system
        efficiency. It was a deep dive into data analysis and problem-solving
        that added another layer to my skill set. Before all that, I've also
        worked as an Electrician and a Personal Assistant, showcasing my
        adaptability and versatility across diverse environments. My interest in
        technology led me to study web development and Java programming at Luleå
        University of Technology. This educational experience ignited my passion
        for tech and inspired me to dive deeper into frontend development.
        Currently, I'm continuing my education in Frontend Development at
        Folkuniversitetet, where I'm gaining expertise in UX/UI design, HTML &
        CSS, JavaScript, and backend development with Node.js. So, whether it's
        hands-on experience or ongoing education, I've got a mix of both. I'm
        really passionate about innovation, delivering top-notch customer
        experiences, and achieving results. I'm always looking to improve and
        bring a long-term perspective to everything I do. I'd love to connect
        and see how we can work together to achieve some great things!
      </p>
    </div>
  );
};

const SkillsInfo = () => {
  return (
    <div>
      <ul>
        <li>React.js</li>
        <li>Java</li>
        <li>PHP</li>
        <li>Programming and Computational Thinking</li>
        <li>Work Agile</li>
        <li>Frontend Frameworks</li>
        <li>Backend with Node.js</li>
        <li>Development & Deployment in Cloud Environments</li>
        <li>Full Stack Web Applications</li>
        <li>JavaScript</li>
        <li>User Experience (UX)</li>
        <li>User Interface Design</li>
        <li>HTML5</li>
        <li>Cascading Style Sheets (CSS)</li>
      </ul>
    </div>
  );
};

const StatsInfo = () => {
  return (
    <>
      <ul>
        <li>Languages</li>
        <ul>
          <li>
            English
            <ul>
              <li>Native or bilingual proficiency</li>
            </ul>
          </li>
          <li>
            Spanish
            <ul>
              <li>Limited working proficiency</li>
            </ul>
          </li>
          <li>
            Swedish
            <ul>
              <li>Native or bilingual proficiency</li>
            </ul>
          </li>
        </ul>
      </ul>
    </>
  );
};

export { BiographyInfo, SkillsInfo, StatsInfo };
