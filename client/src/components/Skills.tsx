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

  useEffect(() => {
    if (!inView || !skillsGraphRef.current || !window.ForceGraph) return;

    const container = skillsGraphRef.current;
    
    const skillsData = {
      nodes: [
        { id: "Python", group: 1, val: 30 },
        { id: "Machine Learning", group: 1, val: 30 },
        { id: "NLP", group: 1, val: 25 },
        { id: "PyTorch", group: 1, val: 20 },
        { id: "TensorFlow", group: 1, val: 18 },
        { id: "Computer Vision", group: 1, val: 15 },
        { id: "JavaScript", group: 2, val: 20 },
        { id: "React", group: 2, val: 15 },
        { id: "HTML/CSS", group: 2, val: 15 },
        { id: "Node.js", group: 2, val: 15 },
        { id: "Web Development", group: 2, val: 20 },
        { id: "Flask", group: 3, val: 15 },
        { id: "MongoDB", group: 3, val: 15 },
        { id: "PostgreSQL", group: 3, val: 15 },
        { id: "AWS", group: 3, val: 15 },
        { id: "Docker", group: 3, val: 12 },
        { id: "C++", group: 4, val: 15 },
        { id: "Linear Algebra", group: 5, val: 15 },
        { id: "Statistics", group: 5, val: 15 },
        { id: "Robotics", group: 6, val: 15 },
        { id: "Research", group: 7, val: 20 }
      ],
      links: [
        { source: "Python", target: "Machine Learning", value: 8 },
        { source: "Python", target: "NLP", value: 7 },
        { source: "Python", target: "PyTorch", value: 8 },
        { source: "Python", target: "TensorFlow", value: 8 },
        { source: "Python", target: "Flask", value: 6 },
        { source: "Machine Learning", target: "NLP", value: 7 },
        { source: "Machine Learning", target: "PyTorch", value: 8 },
        { source: "Machine Learning", target: "TensorFlow", value: 8 },
        { source: "Machine Learning", target: "Computer Vision", value: 7 },
        { source: "Machine Learning", target: "Statistics", value: 7 },
        { source: "NLP", target: "PyTorch", value: 6 },
        { source: "NLP", target: "Research", value: 7 },
        { source: "JavaScript", target: "React", value: 8 },
        { source: "JavaScript", target: "HTML/CSS", value: 7 },
        { source: "JavaScript", target: "Node.js", value: 7 },
        { source: "JavaScript", target: "Web Development", value: 8 },
        { source: "React", target: "Web Development", value: 8 },
        { source: "Node.js", target: "Web Development", value: 7 },
        { source: "Flask", target: "Web Development", value: 5 },
        { source: "MongoDB", target: "Web Development", value: 6 },
        { source: "MongoDB", target: "Node.js", value: 6 },
        { source: "PostgreSQL", target: "Web Development", value: 5 },
        { source: "AWS", target: "Docker", value: 6 },
        { source: "C++", target: "Robotics", value: 5 },
        { source: "Linear Algebra", target: "Machine Learning", value: 6 },
        { source: "Statistics", target: "Machine Learning", value: 7 },
        { source: "Research", target: "Machine Learning", value: 7 },
        { source: "Python", target: "Research", value: 6 }
      ]
    };
    
    const colorMap: {[key: number]: string} = {
      1: '#6366f1', // Primary color for ML related
      2: '#10b981', // Secondary color for web dev
      3: '#f59e0b', // Accent color for backend
      4: '#ef4444', // Red for C++
      5: '#8b5cf6', // Purple for math
      6: '#3b82f6', // Blue for robotics
      7: '#ec4899'  // Pink for research
    };
    
    const Graph = window.ForceGraph()(container)
      .graphData(skillsData)
      .nodeId('id')
      .nodeVal('val')
      .nodeLabel('id')
      .nodeColor((node: any) => colorMap[node.group])
      .nodeRelSize(6)
      .linkWidth((link: any) => link.value / 2)
      .linkColor(() => 'rgba(255, 255, 255, 0.2)')
      .width(container.clientWidth)
      .height(container.clientHeight)
      .d3AlphaDecay(0.01)
      .d3VelocityDecay(0.1)
      .cooldownTime(5000);
    
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
            <h3 className="text-2xl font-space font-semibold mb-4 text-white text-center">Technical Skills Graph</h3>
            <div ref={skillsGraphRef} className="w-full h-[90%]"></div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-space font-semibold mb-4 text-white">Programming Languages</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {languageIcons.map((lang, i) => (
                  <div key={i} className="flex flex-col items-center p-4 bg-gray-800/50 rounded-xl hover:bg-primary-500/20 transition-colors duration-300">
                    <FontAwesomeIcon icon={lang.icon} className={`text-4xl ${lang.color} mb-2`} />
                    <span className="text-gray-300">{lang.name}</span>
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
            
            <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-space font-semibold mb-4 text-white">AI & ML Domains</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {aiDomains.map((domain, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                    <div className="text-primary-500 text-2xl">
                      <FontAwesomeIcon icon={['fas', domain.icon]} />
                    </div>
                    <span className="text-gray-300">{domain.name}</span>
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

export default Skills;
