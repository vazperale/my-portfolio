import { useEffect, useState } from 'react';


export default function SkillsView() {
  const [filter, setFilter] = useState('all');
  
  const skills = [
    { name: 'React', category: ['Frontend'], level: '2 years experience + own projects in github' },
    { name: 'Node.js', category: ['Backend'], level: '4 years experience' },
    { name: 'Git', category: ['Tools'], level: '4 years experience' },
    { name: 'Javascript', category: ['Frontend', 'Backend'], level: '5 years experience' },
    { name: 'Html,Css', category: ['Frontend'], level: '5 years experience' },
    { name: 'Typescript', category: ['Frontend', 'Backend'], level: '2 years experience + own projects in github' },
    { name: 'Postgres and DBs', category: ['Backend'], level: '2 years experience' },
    { name: 'Nest', category: ['Backend'], level: 'couple of months, learning with own projects and courses' },
    { name: 'Next', category: ['Frontend'], level: 'couple of months, learning with own projects and courses' },
    { name: 'Angular', category: ['Frontend'], level: '1 year experience' },
    { name: 'Docker', category: ['Tools'], level: '2 years experience + own projects creating db, playing servers...' },
    { name: 'Jenkins', category: ['Tools'], level: '2 years experience' },
    { name: 'PHP', category: ['Backend'], level: 'a couple of months' },
    { name: 'Python', category: ['Backend'], level: 'Basic knowledge' },
    { name: 'Java', category: ['Frontend', 'Backend'], level: 'Basic knowledge' },
    { name: 'Salesforce enviroment', category: ['Tools'], level: '3 years experience' },
  ];

  const certifications=[
    {name: 'Salesforce AI Specialist'}
  ];

  const filteredSkills = skills.filter(skill => filter === 'all' || skill.category.includes(filter));

  useEffect(() => {
    document.title = "Skills - My Portfolio"; 
  }, []);

  return (
    <>
    <div className='skills d-flex flex-column align-items-center w-75'>
        <h3>Skills</h3>
      <div className="d-flex gap-3">
        <button
          className={`btn ${filter === 'all' ? 'btn-primary active' : 'btn-outline-primary'}`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button
          className={`btn ${filter === 'Frontend' ? 'btn-primary active' : 'btn-outline-primary'}`}
          onClick={() => setFilter('Frontend')}
        >
          Frontend
        </button>
        <button
          className={`btn ${filter === 'Backend' ? 'btn-primary active' : 'btn-outline-primary'}`}
          onClick={() => setFilter('Backend')}
        >
          Backend
        </button>
        <button
          className={`btn ${filter === 'Tools' ? 'btn-primary active' : 'btn-outline-primary'}`}
          onClick={() => setFilter('Tools')}
        >
          Tools
        </button>
      </div>
      
      <ul className='skills-list'>
        {filteredSkills.map(skill => (
          <li key={skill.name}>
            <strong>{skill.name}</strong> - {skill.level}
          </li>
        ))}
      </ul>
    </div>
    <div className='certifications d-flex flex-column align-items-center w-75'>
        <h3>Certifications</h3>
        <ul className='certifications-list'>
        {certifications.map(certification => (
          <li key={certification.name}>
            <strong>{certification.name}</strong>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}
