import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSpring, animated } from '@react-spring/web';

const Hero = () => {
  const neuralNetRef = useRef<HTMLDivElement>(null);
  const typewriterRef = useRef<HTMLDivElement>(null);
  const typewriterText = 'Machine Learning • NLP • Robotics';

  // Animations for hero elements
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 200,
  });

  const fadeInCard = useSpring({
    from: { opacity: 0, transform: 'translateY(40px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 400,
  });

  useEffect(() => {
    // TypeWriter effect
    if (typewriterRef.current) {
      const typeText = (text: string, i = 0) => {
        if (!typewriterRef.current) return;
        
        if (i < text.length) {
          typewriterRef.current.textContent = text.substring(0, i + 1);
          setTimeout(() => typeText(text, i + 1), 100);
        } else {
          // Reset and repeat after delay
          setTimeout(() => {
            if (typewriterRef.current) typewriterRef.current.textContent = '';
            setTimeout(() => typeText(text), 500);
          }, 3000);
        }
      };
      
      setTimeout(() => {
        typeText(typewriterText);
      }, 1000);
    }

    // Neural network visualization
    if (neuralNetRef.current) {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const container = neuralNetRef.current;
      
      if (!ctx) return;
      
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
      container.appendChild(canvas);
      
      const layers = [4, 8, 6, 3]; // Neural network architecture
      const neurons: any[] = [];
      const connections: any[] = [];
      
      // Calculate neuron positions
      const maxNeurons = Math.max(...layers);
      for (let l = 0; l < layers.length; l++) {
        const layerNeurons = [];
        const layerSize = layers[l];
        const x = (canvas.width / (layers.length - 1)) * l;
        
        for (let n = 0; n < layerSize; n++) {
          const y = canvas.height / 2 + ((n - (layerSize - 1) / 2) * (canvas.height / maxNeurons / 1.5));
          layerNeurons.push({ x, y, layer: l, index: n });
        }
        neurons.push(layerNeurons);
      }
      
      // Create connections
      for (let l = 0; l < layers.length - 1; l++) {
        for (let n1 = 0; n1 < neurons[l].length; n1++) {
          for (let n2 = 0; n2 < neurons[l + 1].length; n2++) {
            connections.push({
              from: neurons[l][n1],
              to: neurons[l + 1][n2],
              weight: Math.random() * 2 - 1
            });
          }
        }
      }
      
      // Animation function
      const animate = () => {
        if (!ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw connections
        connections.forEach(conn => {
          const { from, to, weight } = conn;
          
          // Calculate signal animation
          const now = Date.now() / 1000;
          const speed = 0.5;
          const offset = ((from.layer * 0.1) + (from.index * 0.05) + (to.index * 0.05)) % 1;
          const progress = (now * speed + offset) % 1;
          
          // Draw connection line
          ctx.beginPath();
          ctx.moveTo(from.x, from.y);
          ctx.lineTo(to.x, to.y);
          ctx.strokeStyle = weight > 0 ? 'rgba(99, 102, 241, 0.2)' : 'rgba(239, 68, 68, 0.2)';
          ctx.lineWidth = Math.abs(weight) * 2;
          ctx.stroke();
          
          // Draw signal pulse
          if (progress > 0 && progress < 1) {
            const signalX = from.x + (to.x - from.x) * progress;
            const signalY = from.y + (to.y - from.y) * progress;
            ctx.beginPath();
            ctx.arc(signalX, signalY, 2, 0, Math.PI * 2);
            ctx.fillStyle = weight > 0 ? 'rgba(99, 102, 241, 0.8)' : 'rgba(239, 68, 68, 0.8)';
            ctx.fill();
          }
        });
        
        // Draw neurons
        neurons.flat().forEach(neuron => {
          ctx.beginPath();
          ctx.arc(neuron.x, neuron.y, 6, 0, Math.PI * 2);
          ctx.fillStyle = '#6366f1';
          ctx.fill();
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
          ctx.lineWidth = 1;
          ctx.stroke();
        });
        
        requestAnimationFrame(animate);
      };
      
      animate();

      return () => {
        // Cleanup
        if (neuralNetRef.current && neuralNetRef.current.contains(canvas)) {
          neuralNetRef.current.removeChild(canvas);
        }
      };
    }
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <animated.div style={fadeIn} className="space-y-6 lg:space-y-8">
            <div className="space-y-2">
              <h2 className="text-lg md:text-xl text-primary-500 font-semibold">Hello, I'm</h2>
              <h1 className="text-4xl md:text-6xl font-bold font-space text-white">Ibrahim Sheikh</h1>
              <h3 className="text-2xl md:text-3xl font-space text-gray-300">AI Engineer & ML Researcher</h3>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              Cornell University M.Eng. student with publications in <span className="text-primary-500">Nature</span> 
              and experience building production-ready AI solutions.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#projects" className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-colors duration-300 flex items-center space-x-2">
                <FontAwesomeIcon icon={['fas', 'code']} />
                <span>View Projects</span>
              </a>
              <a href="#contact" className="px-6 py-3 bg-transparent border-2 border-primary-500 text-primary-500 hover:bg-primary-500/10 font-medium rounded-lg transition-colors duration-300 flex items-center space-x-2">
                <FontAwesomeIcon icon={['fas', 'envelope']} />
                <span>Contact Me</span>
              </a>
            </div>
            
            <div className="flex items-center space-x-6 pt-4">
              <a href="https://github.com/ibrahimsheikh02" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300 text-xl">
                <FontAwesomeIcon icon={['fab', 'github']} />
              </a>
              <a href="https://www.linkedin.com/in/ibrahim-sheikh" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300 text-xl">
                <FontAwesomeIcon icon={['fab', 'linkedin']} />
              </a>
              <a href="mailto:mis75@cornell.edu" className="text-gray-400 hover:text-white transition-colors duration-300 text-xl">
                <FontAwesomeIcon icon={['fas', 'envelope']} />
              </a>
              <a href="tel:+16465956075" className="text-gray-400 hover:text-white transition-colors duration-300 text-xl">
                <FontAwesomeIcon icon={['fas', 'phone']} />
              </a>
            </div>
          </animated.div>

          <animated.div style={fadeInCard} className="relative">
            <div className="w-full h-96 relative animate-[float_6s_ease-in-out_infinite]">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-green-500/20 rounded-2xl blur-md"></div>
              <div className="relative w-full h-full flex items-center justify-center rounded-2xl bg-gray-900/50 border border-gray-700 p-8 overflow-hidden backdrop-blur-sm">
                {/* Neural Network Visualization Canvas */}
                <div ref={neuralNetRef} className="w-full h-full"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-70">
                  <div className="text-center">
                    <div className="text-4xl mb-4 text-primary-500">
                      <FontAwesomeIcon icon={['fas', 'brain']} />
                    </div>
                    <div ref={typewriterRef} className="font-space font-medium text-lg text-white"></div>
                  </div>
                </div>
              </div>
            </div>
          </animated.div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">
          <FontAwesomeIcon icon={['fas', 'chevron-down']} className="text-2xl" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
