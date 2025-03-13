import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Project } from '@/lib/constants';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-auto">
      <div 
        ref={modalRef}
        className="bg-gray-900 border border-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
      >
        <div className="relative h-64 lg:h-80">
          <img 
            src={project.fullImage || project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition-colors"
          >
            <FontAwesomeIcon icon={['fas', 'times' as any]} size="lg" />
          </button>
        </div>
        
        <div className="p-6 lg:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">{project.title}</h2>
              <div className="flex flex-wrap gap-2">
                {project.badges.map((badge, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-primary-500/20 text-primary-300 text-xs font-medium rounded-full"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex gap-3">
              {project.links.github && (
                <a 
                  href={project.links.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
                >
                  <FontAwesomeIcon icon={['fab', 'github' as any]} />
                  <span>GitHub</span>
                </a>
              )}
              {project.links.live && (
                <a 
                  href={project.links.live} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors"
                >
                  <FontAwesomeIcon icon={['fas', 'external-link-alt' as any]} />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
          
          <p className="text-gray-300 mb-8 leading-relaxed">
            {project.description}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <FontAwesomeIcon icon={['fas', 'cogs' as any]} className="text-primary-400" />
                <span>Technologies Used</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <FontAwesomeIcon icon={['fas', 'list-ul' as any]} className="text-primary-400" />
                <span>Key Features</span>
              </h3>
              <ul className="space-y-2 text-gray-300">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary-400 mt-1">
                      <FontAwesomeIcon icon={['fas', 'check-circle' as any]} />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          

          
          {project.awardInfo && (
            <div className="bg-primary-900/30 border border-primary-700/30 rounded-lg p-4 mb-4">
              <div className="flex items-center gap-2 text-primary-300 font-medium">
                <FontAwesomeIcon icon={['fas', 'award' as any]} />
                <span>{project.awardInfo}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;