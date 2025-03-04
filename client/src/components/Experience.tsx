import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from '@react-spring/web';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
      company: "Buildspace",
      role: "Software Engineer",
      period: "June '24 - Aug '24",
      description: [
        "Working on cutting-edge AI and web3 projects",
        "Developing and implementing new features for the platform"
      ],
      skills: ["React", "Node.js", "AI", "Web3"],
      logo: "building"
    },
    {
      company: "Plutarch",
      role: "Software Engineer",
      period: "Mar '22 - May '24",
      description: [
        "Trained and evaluated open source models through reinforcement learning",
        "Deployed an AI-course tutor at NYU in multiple courses with 500+ users"
      ],
      skills: ["Flask", "JavaScript", "LangChain", "React", "PostgreSQL"],
      link: "www.plutarch.us",
      logo: "brain"
    },
    {
      company: "New York University",
      role: "Machine Learning Researcher",
      period: "June '23 - Aug '23",
      description: [
        "Built internal applications using Flask to host three-hour academic study",
        "Integrated models to detect facial expressions to increase accuracy by 11%",
        "Optimized GPU allocation to train parallel models"
      ],
      skills: ["Python", "C++", "Matlab", "PyTorch"],
      pi: "Dr. Pascal Wallisch",
      logo: "university"
    },
    {
      company: "Citigroup, Inc.",
      role: "Software Engineer",
      period: "2023",
      description: [
        "Built and deployed machine learning models to classify internal app issues and reduce escalation rate from 10% to 3%",
        "Trained and deployed models like BERT to analyze email sentiment",
        "Conducted statistical tests to find patterns in app-related issues"
      ],
      skills: ["Python", "C++", "AWS", "HTML/CSS"],
      note: "Received return offer",
      logo: "landmark"
    }
  ];

  return (
    <section id="experience" ref={ref} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="section-header mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-space mb-4">Experience</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
        </div>
        
        <div className="relative mt-16">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-800"></div>
          
          {experiences.map((exp, index) => (
            <animated.div 
              key={index}
              style={{
                ...fadeIn,
                transitionDelay: `${index * 100}ms`
              }} 
              className={`mb-16 md:mb-24 relative flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="hidden md:block absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/3 w-5 h-5 rounded-full bg-primary-500 z-10"></div>
              
              {/* Content */}
              <div className="w-full md:w-1/2 md:px-8">
                <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 shadow-lg">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                      <div className="text-primary-400 font-medium">{exp.company}</div>
                      {exp.link && (
                        <a href={`https://${exp.link}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm hover:text-primary-300 transition-colors">
                          {exp.link}
                        </a>
                      )}
                      {exp.pi && (
                        <div className="text-gray-400 text-sm">
                          PI: {exp.pi}
                        </div>
                      )}
                    </div>
                    <div className="h-12 w-12 rounded-lg bg-primary-500/20 text-primary-500 flex items-center justify-center">
                      <FontAwesomeIcon icon={["fas", exp.logo as any]} className="text-2xl" />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="inline-block px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full">
                      {exp.period}
                    </div>
                    {exp.note && (
                      <div className="inline-block ml-2 px-3 py-1 bg-green-900/30 text-green-300 text-sm rounded-full">
                        {exp.note}
                      </div>
                    )}
                  </div>
                  
                  <ul className="space-y-2 text-gray-300 mb-5 list-disc pl-5">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-800/70 text-gray-300 text-sm rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </animated.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;