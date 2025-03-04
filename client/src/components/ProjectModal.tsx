import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Project } from '@/lib/constants';
import { useSpring, animated } from '@react-spring/web';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  
  const modalAnimation = useSpring({
    from: { opacity: 0, transform: 'scale(0.95)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: { tension: 300, friction: 20 },
  });

  const backdropAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

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
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center">
      <animated.div 
        style={backdropAnimation} 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm"
        aria-hidden="true"
      ></animated.div>
      
      <animated.div 
        ref={modalRef}
        style={modalAnimation} 
        className="relative bg-gray-900 border border-gray-700 rounded-2xl max-w-3xl w-full mx-auto p-6 shadow-xl z-10"
      >
        <div className="absolute top-4 right-4">
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="Close modal"
          >
            <FontAwesomeIcon icon={['fas', 'times']} className="text-xl" />
          </button>
        </div>
        
        <div className="space-y-6">
          <h3 className="text-2xl font-space font-semibold text-white">{project.title}</h3>
          
          <div className="aspect-video bg-gray-800 rounded-xl overflow-hidden">
            <img 
              src={project.fullImage || project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-300">
              {project.description}
            </p>
            
            <h4 className="text-xl font-space font-medium text-white">Key Features</h4>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            
            <h4 className="text-xl font-space font-medium text-white">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => {
                // Assign a color based on index to create variety
                const colorClasses = [
                  'bg-blue-500/20 text-blue-300',
                  'bg-green-500/20 text-green-300',
                  'bg-purple-500/20 text-purple-300',
                  'bg-yellow-500/20 text-yellow-300',
                  'bg-red-500/20 text-red-300',
                  'bg-pink-500/20 text-pink-300',
                  'bg-cyan-500/20 text-cyan-300',
                  'bg-indigo-500/20 text-indigo-300',
                  'bg-orange-500/20 text-orange-300',
                ];
                const colorClass = colorClasses[index % colorClasses.length];
                
                return (
                  <span key={index} className={`px-3 py-1 ${colorClass} rounded-full`}>
                    {tech}
                  </span>
                );
              })}
            </div>
            
            {project.codeSnippet && (
              <>
                <h4 className="text-xl font-space font-medium text-white">Code Snippet</h4>
                <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                  <code className="language-python text-sm">{project.codeSnippet}</code>
                </pre>
              </>
            )}
            
            <div className="flex gap-4 mt-6">
              {project.links.github && (
                <a 
                  href={project.links.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors duration-300 flex items-center gap-2"
                >
                  <FontAwesomeIcon icon={['fab', 'github']} />
                  <span>View on GitHub</span>
                </a>
              )}
              
              {project.links.live && (
                <a 
                  href={project.links.live} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors duration-300 flex items-center gap-2"
                >
                  <FontAwesomeIcon icon={['fas', 'external-link-alt']} />
                  <span>View Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </animated.div>
    </div>
  );
};

export default ProjectModal;
