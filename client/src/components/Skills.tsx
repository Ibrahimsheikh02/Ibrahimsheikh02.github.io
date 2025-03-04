import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from '@react-spring/web';

declare global {
  interface Window {
    ForceGraph: any;
  }
}

const Skills = () => {
  const skillsGraphRef = useRef<HTMLDivElement>(null);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const fadeIn = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(50px)',
    config: { mass: 1, tension: 280, friction: 20 },
  });

  const languageIcons = [
    { name: 'Python', icon: ['fab', 'python'], color: 'text-blue-400' },
    { name: 'JavaScript', icon: ['fab', 'js'], color: 'text-yellow-400' },
    { name: 'C++', icon: ['fas', 'code'], color: 'text-red-400' },
    { name: 'SQL', icon: ['fas', 'database'], color: 'text-green-400' },
    { name: 'Java', icon: ['fab', 'java'], color: 'text-orange-400' },
    { name: 'MATLAB', icon: ['fas', 'calculator'], color: 'text-purple-400' },
  ];

  const frameworks = [
    'PyTorch', 'TensorFlow', 'Scikit-Learn', 'Pandas', 'NumPy', 'Flask',
    'React', 'LangChain', 'NodeJS', 'Express', 'MongoDB', 'PostgreSQL',
    'AWS', 'Docker'
  ];

  const aiDomains = [
    { name: 'Natural Language Processing', icon: 'comment-alt' },
    { name: 'Data Science', icon: 'chart-bar' },
    { name: 'Robotics', icon: 'robot' },
    { name: 'Deep Learning', icon: 'brain' },
    { name: 'Computer Vision', icon: 'desktop' },
    { name: 'Reinforcement Learning', icon: 'microchip' },
  ];

  // Focus areas with expertise levels
  const focusAreas = [
    { name: 'Machine Learning', level: 'Expert', icon: 'brain', description: 'Specialized in supervised and unsupervised learning algorithms' },
    { name: 'Natural Language Processing', level: 'Expert', icon: 'comment-alt', description: 'Experience with transformer models and semantic analysis' },
    { name: 'Software Development', level: 'Advanced', icon: 'code', description: 'Full-stack development with modern frameworks' },
    { name: 'Data Science', level: 'Expert', icon: 'chart-bar', description: 'Statistical analysis and data visualization' },
    { name: 'Robotics', level: 'Intermediate', icon: 'robot', description: 'Computer vision and control systems' },
  ];

  useEffect(() => {
    if (!inView || !skillsGraphRef.current || !window.ForceGraph) return;

    const container = skillsGraphRef.current;
    
    // Improved skills data with clearer relationships and better organization
    const skillsData = {
      nodes: [
        // Core skills center nodes
        { id: "AI Engineering", group: 0, val: 40 },
        
        // Primary skills - direct connections to core
        { id: "Machine Learning", group: 1, val: 35 },
        { id: "Software Development", group: 2, val: 30 },
        { id: "Data Science", group: 3, val: 30 },
        { id: "Research", group: 4, val: 25 },
        
        // ML related nodes
        { id: "Deep Learning", group: 1, val: 25 },
        { id: "NLP", group: 1, val: 25 },
        { id: "Computer Vision", group: 1, val: 20 },
        { id: "Reinforcement Learning", group: 1, val: 20 },
        
        // Software Dev related
        { id: "Web Development", group: 2, val: 20 },
        { id: "Backend", group: 2, val: 20 },
        { id: "DevOps", group: 2, val: 15 },
        
        // Data Science related
        { id: "Statistical Analysis", group: 3, val: 20 },
        { id: "Data Visualization", group: 3, val: 20 },
        { id: "Big Data", group: 3, val: 15 },
        
        // Technologies - smaller nodes
        { id: "Python", group: 5, val: 15 },
        { id: "PyTorch", group: 5, val: 12 },
        { id: "TensorFlow", group: 5, val: 12 },
        { id: "JavaScript", group: 6, val: 12 },
        { id: "React", group: 6, val: 10 },
        { id: "Node.js", group: 6, val: 10 },
        { id: "SQL", group: 7, val: 10 },
        { id: "C++", group: 7, val: 10 },
        { id: "AWS", group: 8, val: 10 },
        { id: "Docker", group: 8, val: 8 },
      ],
      links: [
        // Core to primary skills
        { source: "AI Engineering", target: "Machine Learning", value: 10 },
        { source: "AI Engineering", target: "Software Development", value: 8 },
        { source: "AI Engineering", target: "Data Science", value: 9 },
        { source: "AI Engineering", target: "Research", value: 7 },
        
        // Machine Learning connections
        { source: "Machine Learning", target: "Deep Learning", value: 8 },
        { source: "Machine Learning", target: "NLP", value: 8 },
        { source: "Machine Learning", target: "Computer Vision", value: 7 },
        { source: "Machine Learning", target: "Reinforcement Learning", value: 6 },
        { source: "Machine Learning", target: "Python", value: 9 },
        { source: "Machine Learning", target: "PyTorch", value: 8 },
        { source: "Machine Learning", target: "TensorFlow", value: 8 },
        
        // Software Development connections
        { source: "Software Development", target: "Web Development", value: 8 },
        { source: "Software Development", target: "Backend", value: 7 },
        { source: "Software Development", target: "DevOps", value: 6 },
        { source: "Software Development", target: "JavaScript", value: 7 },
        { source: "Software Development", target: "Python", value: 6 },
        { source: "Software Development", target: "React", value: 6 },
        { source: "Software Development", target: "Node.js", value: 6 },
        
        // Data Science connections
        { source: "Data Science", target: "Statistical Analysis", value: 8 },
        { source: "Data Science", target: "Data Visualization", value: 7 },
        { source: "Data Science", target: "Big Data", value: 6 },
        { source: "Data Science", target: "Python", value: 8 },
        { source: "Data Science", target: "SQL", value: 7 },
        
        // Research connections
        { source: "Research", target: "NLP", value: 5 },
        { source: "Research", target: "Deep Learning", value: 5 },
        { source: "Research", target: "Python", value: 4 },
        { source: "Research", target: "C++", value: 3 },
        
        // Cross-domain connections
        { source: "Deep Learning", target: "PyTorch", value: 5 },
        { source: "Deep Learning", target: "TensorFlow", value: 5 },
        { source: "NLP", target: "PyTorch", value: 4 },
        { source: "Computer Vision", target: "PyTorch", value: 4 },
        { source: "Computer Vision", target: "C++", value: 3 },
        { source: "Web Development", target: "React", value: 5 },
        { source: "Web Development", target: "Node.js", value: 5 },
        { source: "Backend", target: "Node.js", value: 4 },
        { source: "Backend", target: "SQL", value: 4 },
        { source: "DevOps", target: "AWS", value: 4 },
        { source: "DevOps", target: "Docker", value: 4 },
        { source: "Big Data", target: "AWS", value: 3 },
      ]
    };
    
    const colorMap: {[key: number]: string} = {
      0: '#6366f1', // Primary color for core AI Engineering
      1: '#a855f7', // Purple for ML related
      2: '#10b981', // Green for software dev
      3: '#3b82f6', // Blue for data science
      4: '#ec4899', // Pink for research
      5: '#eab308', // Yellow for Python ecosystem
      6: '#f97316', // Orange for JS ecosystem
      7: '#ef4444', // Red for lower level
      8: '#0ea5e9'  // Sky for cloud/DevOps
    };
    
    const Graph = window.ForceGraph()(container)
      .graphData(skillsData)
      .nodeId('id')
      .nodeVal('val')
      .nodeLabel('id')
      .nodeColor((node: any) => colorMap[node.group])
      .nodeRelSize(5)
      .linkWidth((link: any) => link.value / 3)
      .linkColor(() => 'rgba(255, 255, 255, 0.15)')
      .width(container.clientWidth)
      .height(container.clientHeight)
      .d3AlphaDecay(0.02)
      .d3VelocityDecay(0.15)
      .cooldownTime(3000);
    
    // Make it interactive
    Graph.onNodeHover((node: any) => {
      container.style.cursor = node ? 'pointer' : 'default';
    });
    
    // Responsive resize
    const handleResize = () => {
      Graph.width(container.clientWidth).height(container.clientHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      Graph._destructor && Graph._destructor();
    };
  }, [inView]);

  return (
    <section id="skills" ref={ref} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="section-header mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-space mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
        </div>
        
        <animated.div style={fadeIn} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 shadow-lg h-96 lg:h-[500px]">
            <h3 className="text-2xl font-space font-semibold mb-4 text-white text-center">Skills Knowledge Graph</h3>
            <p className="text-gray-400 text-center text-sm mb-6">An interactive visualization of my technical expertise and their relationships</p>
            <div ref={skillsGraphRef} className="w-full h-[80%]"></div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-space font-semibold mb-4 text-white">Programming Languages</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {languageIcons.map((lang, i) => (
                  <div key={i} className="flex flex-col items-center p-4 bg-gray-800/50 rounded-xl hover:bg-primary-500/20 transition-colors duration-300">
                    <FontAwesomeIcon icon={lang.icon as any} className={`text-4xl ${lang.color} mb-2`} />
                    <span className="text-gray-300">{lang.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* New Focus Areas Card - Replacing Progress Bars */}
            <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-space font-semibold mb-4 text-white">My Focus Areas</h3>
              <div className="space-y-4">
                {focusAreas.map((area, index) => (
                  <div key={index} className="flex items-start gap-4 p-3 bg-gray-800/40 rounded-lg hover:bg-gray-800/70 transition-colors duration-300">
                    <div className="text-primary-500 text-2xl mt-1 min-w-[2rem] flex items-center justify-center">
                      <FontAwesomeIcon icon={['fas', area.icon as any]} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-lg font-medium text-white">{area.name}</h4>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          area.level === 'Expert' ? 'bg-green-500/20 text-green-300' : 
                          area.level === 'Advanced' ? 'bg-blue-500/20 text-blue-300' : 
                          'bg-yellow-500/20 text-yellow-300'
                        }`}>
                          {area.level}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm">{area.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-space font-semibold mb-4 text-white">Frameworks & Libraries</h3>
              <div className="flex flex-wrap gap-3">
                {frameworks.map((framework, i) => {
                  // Assign a color based on index to create variety
                  const colorClasses = [
                    'bg-blue-500/20 text-blue-300',
                    'bg-green-500/20 text-green-300',
                    'bg-yellow-500/20 text-yellow-300',
                    'bg-red-500/20 text-red-300',
                    'bg-purple-500/20 text-purple-300',
                    'bg-pink-500/20 text-pink-300',
                    'bg-indigo-500/20 text-indigo-300',
                    'bg-cyan-500/20 text-cyan-300',
                    'bg-orange-500/20 text-orange-300',
                  ];
                  const colorClass = colorClasses[i % colorClasses.length];
                  
                  return (
                    <span key={i} className={`px-4 py-2 ${colorClass} rounded-full`}>
                      {framework}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </animated.div>
      </div>
    </section>
  );
};

export default Skills;
