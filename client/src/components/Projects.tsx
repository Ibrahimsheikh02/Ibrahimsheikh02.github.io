import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from '@react-spring/web';
import ProjectModal from './ProjectModal';
import { projectsData } from '@/lib/constants';

type ProjectCategory = 'all' | 'ai' | 'web' | 'research';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [filter, setFilter] = useState<ProjectCategory>('all');
  const [filteredProjects, setFilteredProjects] = useState(projectsData);

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const fadeIn = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(50px)',
    config: { mass: 1, tension: 280, friction: 20 },
  });

  useEffect(() => {
    if (filter === 'all') {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(
        projectsData.filter(project => project.categories.includes(filter))
      );
    }
  }, [filter]);

  const handleFilterChange = (category: ProjectCategory) => {
    setFilter(category);
  };

  const openProjectModal = (projectId: string) => {
    setSelectedProject(projectId);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = '';
  };

  const getProject = (id: string) => {
    return projectsData.find(p => p.id === id);
  };

  return (
    <section id="projects" ref={ref} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="section-header mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-space mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
        </div>
        
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              className={`px-4 py-2 rounded-full bg-gray-900 border ${filter === 'all' ? 'border-primary-500 text-primary-500' : 'border-gray-700 text-gray-300'} hover:border-primary-500 hover:text-primary-500 transition-colors duration-300`}
              onClick={() => handleFilterChange('all')}
            >
              All Projects
            </button>
            <button 
              className={`px-4 py-2 rounded-full bg-gray-900 border ${filter === 'ai' ? 'border-primary-500 text-primary-500' : 'border-gray-700 text-gray-300'} hover:border-primary-500 hover:text-primary-500 transition-colors duration-300`}
              onClick={() => handleFilterChange('ai')}
            >
              AI/ML
            </button>
            <button 
              className={`px-4 py-2 rounded-full bg-gray-900 border ${filter === 'web' ? 'border-primary-500 text-primary-500' : 'border-gray-700 text-gray-300'} hover:border-primary-500 hover:text-primary-500 transition-colors duration-300`}
              onClick={() => handleFilterChange('web')}
            >
              Web Development
            </button>
            <button 
              className={`px-4 py-2 rounded-full bg-gray-900 border ${filter === 'research' ? 'border-primary-500 text-primary-500' : 'border-gray-700 text-gray-300'} hover:border-primary-500 hover:text-primary-500 transition-colors duration-300`}
              onClick={() => handleFilterChange('research')}
            >
              Research
            </button>
          </div>
        </div>
        
        <animated.div style={fadeIn} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/20 hover:border-primary-500/50 group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90 group-hover:opacity-80 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-primary-500/80 text-white text-xs rounded-full">
                    {project.badges[0]}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-space font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.summary}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech, i) => {
                    // Assign a color based on index to create variety
                    const colorClasses = [
                      'bg-blue-500/20 text-blue-300',
                      'bg-green-500/20 text-green-300',
                      'bg-purple-500/20 text-purple-300',
                      'bg-yellow-500/20 text-yellow-300',
                      'bg-red-500/20 text-red-300',
                      'bg-pink-500/20 text-pink-300',
                    ];
                    const colorClass = colorClasses[i % colorClasses.length];
                    
                    return (
                      <span key={i} className={`px-2 py-1 ${colorClass} text-xs rounded-full`}>
                        {tech}
                      </span>
                    );
                  })}
                </div>
                <div className="flex gap-3">
                  <button 
                    className="px-3 py-2 bg-primary-500 hover:bg-primary-600 text-white text-sm rounded-lg transition-colors duration-300 flex items-center gap-2"
                    onClick={() => openProjectModal(project.id)}
                  >
                    <FontAwesomeIcon icon={['fas', 'info-circle']} />
                    <span>Details</span>
                  </button>
                  {project.links.github && (
                    <a 
                      href={project.links.github} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="px-3 py-2 bg-gray-700 hover:bg-gray-600 text-white text-sm rounded-lg transition-colors duration-300 flex items-center gap-2"
                    >
                      <FontAwesomeIcon icon={['fab', 'github']} />
                      <span>GitHub</span>
                    </a>
                  )}
                  {project.links.live && (
                    <a 
                      href={project.links.live} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="px-3 py-2 bg-gray-700 hover:bg-gray-600 text-white text-sm rounded-lg transition-colors duration-300 flex items-center gap-2"
                    >
                      <FontAwesomeIcon icon={['fas', 'external-link-alt']} />
                      <span>Live</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </animated.div>
      </div>

      {/* Project Modals */}
      {selectedProject && (
        <ProjectModal 
          project={getProject(selectedProject)!}
          onClose={closeProjectModal}
        />
      )}
    </section>
  );
};

export default Projects;
