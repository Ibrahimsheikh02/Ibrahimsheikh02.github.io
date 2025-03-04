import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from '@react-spring/web';
import { projectsData } from '@/lib/constants';
import ProjectModal from './ProjectModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type ProjectCategory = 'all' | 'ai' | 'web' | 'research';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');

  const fadeIn = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(50px)',
    config: { mass: 1, tension: 280, friction: 20 },
  });

  const handleFilterChange = (category: ProjectCategory) => {
    setSelectedCategory(category);
  };

  const filteredProjects = selectedCategory === 'all'
    ? projectsData
    : projectsData.filter(project => project.categories.includes(selectedCategory));

  const openModal = (project: any) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="projects" ref={ref} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="section-header mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-space mb-4">Projects</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            A collection of my most significant work across AI, software development, and research.
            Each project demonstrates my focus on innovative solutions and technical excellence.
          </p>
        </div>
        
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-full p-1 shadow-lg">
            {['all', 'ai', 'web', 'research'].map((category) => (
              <button
                key={category}
                onClick={() => handleFilterChange(category as ProjectCategory)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary-500 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        <animated.div style={fadeIn} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02] cursor-pointer"
              onClick={() => openModal(project)}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <div className="bg-gray-800 text-primary-400 text-xs font-bold px-2 py-1 rounded">
                    {project.badges[0]}
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-4">{project.summary}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <span key={i} className="text-xs bg-gray-800/80 text-gray-300 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-xs bg-gray-800/80 text-gray-300 px-2 py-1 rounded">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    {project.links.github && (
                      <a 
                        href={project.links.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-primary-400 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FontAwesomeIcon icon={['fab', 'github' as any]} size="lg" />
                      </a>
                    )}
                    {project.links.live && (
                      <a 
                        href={project.links.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-primary-400 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FontAwesomeIcon icon={['fas', 'external-link-alt' as any]} size="lg" />
                      </a>
                    )}
                  </div>
                  <button className="text-sm text-primary-400 hover:text-primary-300 font-medium">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </animated.div>
      </div>
      
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </section>
  );
};

export default Projects;