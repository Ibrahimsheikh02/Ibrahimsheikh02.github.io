import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from '@react-spring/web';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const fadeIn = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(50px)',
    config: { mass: 1, tension: 280, friction: 20 },
  });

  const [skills, setSkills] = useState([
    { name: 'Machine Learning', percent: 0 },
    { name: 'Natural Language Processing', percent: 0 },
    { name: 'Software Development', percent: 0 },
    { name: 'Data Science', percent: 0 },
    { name: 'Robotics', percent: 0 },
  ]);

  useEffect(() => {
    if (inView) {
      // Animate skill bars when they come into view
      const timer = setTimeout(() => {
        setSkills([
          { name: 'Machine Learning', percent: 95 },
          { name: 'Natural Language Processing', percent: 90 },
          { name: 'Software Development', percent: 85 },
          { name: 'Data Science', percent: 92 },
          { name: 'Robotics', percent: 80 },
        ]);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [inView]);

  const educationItems = [
    {
      school: 'Cornell University',
      degree: 'M.Eng., Computer Science',
      gpa: 'GPA: 3.98/4.00',
      year: '2024',
      tags: ['Software Development', 'Machine Learning', 'Robotics'],
    },
    {
      school: 'New York University',
      degree: 'B.A., Computer Science & Data Science',
      gpa: 'GPA: 3.91/4.00 (Magna Cum Laude)',
      year: '2020-2024',
      tags: ['Natural Language Processing', 'Adv Data Science', 'Linear Algebra'],
    },
  ];

  const awards = [
    {
      title: 'Published in Nature',
      description: 'DOI: 10.1038/s42256-024-00953-0',
      icon: 'award',
    },
    {
      title: 'Warner Bro Scholarship',
      description: 'Merit-based $20k/year',
      icon: 'trophy',
    },
    {
      title: 'Teaching Innovation Award',
      description: 'Associated with Plutarch',
      icon: 'medal',
    },
    {
      title: 'Dean\'s Undergraduate Research Fund',
      description: 'Research Grant',
      icon: 'microscope',
    },
  ];

  return (
    <section id="about" ref={ref} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="section-header mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-space mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
        </div>
        
        <animated.div style={fadeIn} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 lg:p-8 shadow-lg">
              <h3 className="text-2xl font-space font-semibold mb-4 text-white">Education</h3>
              <div className="space-y-6">
                {educationItems.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <h4 className="text-xl font-medium text-primary-500">{item.school}</h4>
                      <span className="text-gray-400">{item.year}</span>
                    </div>
                    <p className="text-white">{item.degree}</p>
                    <p className="text-gray-300">{item.gpa}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {item.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 lg:p-8 shadow-lg">
              <h3 className="text-2xl font-space font-semibold mb-4 text-white">Awards & Recognition</h3>
              <div className="space-y-4">
                {awards.map((award, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="text-yellow-500 text-2xl mt-1">
                      <FontAwesomeIcon icon={['fas', award.icon]} />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white">{award.title}</h4>
                      <p className="text-gray-300">{award.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="relative rounded-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-green-500/30 group-hover:opacity-80 transition-opacity duration-300 opacity-50"></div>
              <img 
                src="https://images.unsplash.com/photo-1573497491208-6b1acb260507?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&h=900&q=80" 
                alt="Modern workspace with AI development" 
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-gray-900 to-transparent">
                <h3 className="text-xl font-semibold text-white">AI Engineer & ML Researcher</h3>
              </div>
            </div>
            
            <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 lg:p-8 shadow-lg">
              <h3 className="text-2xl font-space font-semibold mb-4 text-white">My Focus Areas</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-white">{skill.name}</span>
                      <span className="text-primary-500">{skill.percent}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary-500 to-primary-400 rounded-full transition-all duration-1000 ease-out" 
                        style={{ width: `${skill.percent}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </animated.div>
      </div>
    </section>
  );
};

export default About;
