import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from '@react-spring/web';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const fadeIn = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(50px)',
    config: { mass: 1, tension: 280, friction: 20 },
  });

  const contactInfo = [
    {
      title: 'Email',
      value: 'mis75@cornell.edu',
      icon: 'envelope',
      link: 'mailto:mis75@cornell.edu',
    },
    {
      title: 'Website',
      value: 'ibrahimsheikh02.github.io',
      icon: 'globe',
      link: 'https://ibrahimsheikh02.github.io',
    },
    {
      title: 'Location',
      value: 'New York, NY',
      icon: 'map-marker-alt',
    },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: ['fab', 'github'],
      url: 'https://github.com/ibrahimsheikh02',
    },
    {
      name: 'LinkedIn',
      icon: ['fab', 'linkedin-in'],
      url: 'https://www.linkedin.com/in/ibrahimsheikh02',
    },
    {
      name: 'X (Twitter)',
      icon: ['fab', 'x-twitter'],
      url: 'https://twitter.com/ibrahimshk02',
    },
    {
      name: 'Medium',
      icon: ['fab', 'medium-m'],
      url: 'https://medium.com/@ibrahimsheikh',
    },
  ];

  const collaborationAreas = [
    'AI/ML Projects',
    'Research Collaborations',
    'Software Development',
    'Technical Consulting',
  ];

  return (
    <section id="contact" ref={ref} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="section-header mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-space mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Interested in working together or have a question? Feel free to reach out via email or through my social media channels.
          </p>
        </div>
        
        <animated.div style={fadeIn} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 lg:p-8 shadow-lg">
            <h3 className="text-2xl font-space font-semibold mb-6 text-white">Get In Touch</h3>
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                Please feel free to reach out to me directly via email.
              </p>
              
              <div className="flex items-center gap-3 bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                <FontAwesomeIcon icon={['fas', 'envelope']} className="text-primary-500 text-xl" />
                <a 
                  href="mailto:mis75@cornell.edu" 
                  className="text-white hover:text-primary-400 transition-colors duration-300 font-medium"
                >
                  mis75@cornell.edu
                </a>
              </div>
              
              <p className="text-gray-400 text-sm">
                I typically respond to emails within 24-48 hours. Looking forward to connecting with you!
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 lg:p-8 shadow-lg">
              <h3 className="text-2xl font-space font-semibold mb-6 text-white">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="text-primary-500 text-2xl mt-1">
                      <FontAwesomeIcon icon={['fas', info.icon]} />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white">{info.title}</h4>
                      {info.link ? (
                        <a 
                          href={info.link} 
                          target={info.link.startsWith('http') ? '_blank' : undefined} 
                          rel={info.link.startsWith('http') ? 'noreferrer' : undefined}
                          className="text-gray-300 hover:text-primary-500 transition-colors duration-300"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-300">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-medium text-white mb-4">Social Media</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index}
                      href={social.url} 
                      target="_blank" 
                      rel="noreferrer" 
                      aria-label={social.name}
                      className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary-500 hover:text-white transition-all duration-300"
                    >
                      <FontAwesomeIcon icon={social.icon} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 lg:p-8 shadow-lg">
              <h3 className="text-2xl font-space font-semibold mb-6 text-white">Let's Collaborate</h3>
              <p className="text-gray-300 mb-4">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <div className="space-y-3">
                {collaborationAreas.map((area, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <FontAwesomeIcon icon={['fas', 'check-circle']} className="text-primary-500" />
                    <span className="text-gray-300">{area}</span>
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

export default Contact;
