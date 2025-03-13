import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from '@react-spring/web';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const fadeIn = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(50px)',
    config: { mass: 1, tension: 280, friction: 20 },
  });

  return (
    <section id="about" ref={ref} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="section-header mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-space mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
        </div>
        
        <animated.div style={fadeIn} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-5">
              <h3 className="text-2xl font-space font-semibold text-white">Software Engineer | Vibe Coder</h3>
              <p className="text-gray-300 leading-relaxed">
                I'm currently at Cornell University. I've published in Nature, interned at Citi, and I’m soon joining Replit as a software engineer. 
                I love crafting intelligent systems that push the boundaries of ML, NLP, and software development to solve real-world problems.
              </p>
              
              <div className="flex flex-wrap gap-6 mt-4">
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={['fas', 'envelope']} className="text-primary-400" />
                  <span className="text-gray-300">mis75@cornell.edu</span>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={['fas', 'globe']} className="text-primary-400" />
                  <span className="text-gray-300">ibrahimsheikh02.github.io</span>
                </div>
              </div>
              
              <div className="pt-2">
                <a href="#contact" className="btn-primary inline-block">Get In Touch</a>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 text-center">
            <div className="mx-auto relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary-500 mx-auto shadow-xl shadow-primary-500/20">
                <img 
                  src="/images/ibrahim-profile.png" 
                  alt="Ibrahim Sheikh" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </animated.div>
        
        <animated.div style={fadeIn} className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 shadow-lg">
            <div className="h-12 w-12 rounded-lg bg-primary-500/20 text-primary-500 flex items-center justify-center mb-4">
              <FontAwesomeIcon icon={['fas', 'graduation-cap']} className="text-2xl" />
            </div>
            <h3 className="text-xl font-space font-semibold mb-3 text-white">Education</h3>
            <div className="text-gray-300">
              <div className="mb-2">
                <div className="font-semibold">Cornell University</div>
                <div className="text-sm">M.Eng., Computer Science</div>
                <div className="text-sm text-primary-300">GPA: 3.98/4.00</div>
              </div>
              <div>
                <div className="font-semibold">New York University</div>
                <div className="text-sm">B.A., Computer Science & Data Science</div>
                <div className="text-sm text-primary-300">GPA: 3.91/4.00 (Magna Cum Laude)</div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 shadow-lg">
            <div className="h-12 w-12 rounded-lg bg-primary-500/20 text-primary-500 flex items-center justify-center mb-4">
              <FontAwesomeIcon icon={['fas', 'award']} className="text-2xl" />
            </div>
            <h3 className="text-xl font-space font-semibold mb-3 text-white">Achievements</h3>
            <ul className="text-gray-300 space-y-2 list-disc pl-5">
              <li>Published in Nature (DOI: 10.1038/s42256-024-00953-0)</li>
              <li>Warner Bros Scholarship (Merit-based $20k/year)</li>
              <li>Teaching Innovation Award (associated with Plutarch)</li>
              <li>Dean's Undergraduate Research Fund Grant</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 shadow-lg">
            <div className="h-12 w-12 rounded-lg bg-primary-500/20 text-primary-500 flex items-center justify-center mb-4">
              <FontAwesomeIcon icon={['fas', 'flask']} className="text-2xl" />
            </div>
            <h3 className="text-xl font-space font-semibold mb-3 text-white">Specializations</h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-gray-800/50 rounded-lg p-2 text-center text-gray-300 text-sm">
                <FontAwesomeIcon icon={['fas', 'brain']} className="text-primary-400 mb-1" />
                <div>Machine Learning</div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-2 text-center text-gray-300 text-sm">
                <FontAwesomeIcon icon={['fas', 'comment-alt']} className="text-primary-400 mb-1" />
                <div>NLP</div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-2 text-center text-gray-300 text-sm">
                <FontAwesomeIcon icon={['fas', 'chart-bar']} className="text-primary-400 mb-1" />
                <div>Data Science</div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-2 text-center text-gray-300 text-sm">
                <FontAwesomeIcon icon={['fas', 'robot']} className="text-primary-400 mb-1" />
                <div>Robotics</div>
              </div>
            </div>
          </div>
        </animated.div>
      </div>
    </section>
  );
};

export default About;