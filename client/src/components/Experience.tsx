import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from '@react-spring/web';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const fadeIn = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(50px)',
    config: { mass: 1, tension: 280, friction: 20 },
  });

  const experiences = [
    {
      company: 'Buildspace',
      position: 'Software Engineer',
      period: 'Aug \'24 - May \'25',
      website: 'https://www.plutarch.us',
      websiteText: 'www.plutarch.us',
      icon: 'briefcase',
      details: [
        'Trained and evaluated open source models through reinforcement learning',
        'Deployed an AI-course tutor at NYU in multiple courses with 500+ users',
        'Tech Stack: Flask, JavaScript, LangChain, React, PostgreSQL',
      ],
    },
    {
      company: 'New York University',
      position: 'Machine Learning Researcher',
      period: 'Mar \'22 - May \'24',
      note: 'PI: Dr. Pascal Wallisch',
      icon: 'microscope',
      details: [
        'Built internal applications using Flask to host three-hour academic study',
        'Integrated models to detect facial expressions to increase accuracy by 11%',
        'Optimized GPU allocation to train parallel models',
        'Tech Stack: Python, C++, Matlab, PyTorch',
      ],
    },
    {
      company: 'Citigroup, Inc.',
      position: 'Software Engineer',
      period: 'June \'23 - Aug \'23',
      note: 'Received return offer',
      icon: 'building',
      details: [
        'Built and deployed machine learning models to classify internal app issues and reduce escalation rate from 10% to 3%',
        'Trained and deployed models like BERT to analyze email sentiment',
        'Conducted statistical tests to find patterns in app-related issues',
        'Tech Stack: Python, C++, AWS, HTML/CSS',
      ],
    },
  ];

  return (
    <section id="experience" ref={ref} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="section-header mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-space mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
        </div>
        
        <animated.div style={fadeIn} className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-700"></div>
          
          {/* Timeline entries */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="md:flex items-center justify-between">
                <div className={`md:w-5/12 mb-8 md:mb-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pr-12 md:text-right order-1 md:order-1'}`}>
                  <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 transition-all duration-300 hover:border-primary-500/50 hover:shadow-lg hover:shadow-primary-500/10">
                    <h3 className="text-xl font-space font-semibold text-white">{exp.company}</h3>
                    <p className="text-primary-500 font-medium my-1">{exp.position}</p>
                    <p className="text-gray-400">{exp.period}</p>
                    {exp.website && (
                      <div className={`mt-4 flex ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-end'}`}>
                        <a href={exp.website} target="_blank" rel="noreferrer" className="text-primary-500 hover:text-primary-400 transition-colors duration-300 flex items-center gap-2">
                          <span>{exp.websiteText}</span>
                          <FontAwesomeIcon icon={['fas', 'external-link-alt']} className="text-sm" />
                        </a>
                      </div>
                    )}
                    {exp.note && (
                      <div className={`mt-4 flex ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-end'}`}>
                        <span className={`text-gray-400 italic ${exp.note.includes('return offer') ? 'text-green-400' : ''}`}>{exp.note}</span>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="hidden md:flex items-center justify-center relative z-10 order-2 md:order-2">
                  <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center">
                    <FontAwesomeIcon icon={['fas', exp.icon]} className="text-white" />
                  </div>
                </div>
                
                <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:pl-12' : 'md:pl-12 order-3 md:order-3'}`}>
                  <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 transition-all duration-300 hover:border-primary-500/50 hover:shadow-lg hover:shadow-primary-500/10">
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      {exp.details.map((detail, i) => (
                        <li key={i} className={detail.includes('Tech Stack') ? 'text-primary-400 font-medium' : ''}>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </animated.div>
      </div>
    </section>
  );
};

export default Experience;
