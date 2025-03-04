import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from '@react-spring/web';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '@/hooks/use-toast';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const fadeIn = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(50px)',
    config: { mass: 1, tension: 280, friction: 20 },
  });

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // In a real application, this would be sending data to the server
      // For now, we'll just simulate an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
        variant: "default",
      });
      
      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      title: 'Email',
      value: 'mis75@cornell.edu',
      icon: 'envelope',
      link: 'mailto:mis75@cornell.edu',
    },
    {
      title: 'Phone',
      value: '(646)-595-6075',
      icon: 'phone',
      link: 'tel:+16465956075',
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
      url: 'https://www.linkedin.com/in/ibrahim-sheikh',
    },
    {
      name: 'Twitter',
      icon: ['fab', 'twitter'],
      url: 'https://twitter.com/ibrahimsheikh_',
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
            Interested in working together or have a question? Feel free to reach out using the form below or through my social media channels.
          </p>
        </div>
        
        <animated.div style={fadeIn} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 lg:p-8 shadow-lg">
            <h3 className="text-2xl font-space font-semibold mb-6 text-white">Send Me a Message</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-gray-300">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Your name" 
                  className={`w-full px-4 py-3 bg-gray-800/50 border ${errors.name ? 'border-red-500' : 'border-gray-700'} rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white`}
                  {...register('name')}
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-gray-300">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="Your email" 
                  className={`w-full px-4 py-3 bg-gray-800/50 border ${errors.email ? 'border-red-500' : 'border-gray-700'} rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white`}
                  {...register('email')}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-gray-300">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  placeholder="Subject" 
                  className={`w-full px-4 py-3 bg-gray-800/50 border ${errors.subject ? 'border-red-500' : 'border-gray-700'} rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white`}
                  {...register('subject')}
                />
                {errors.subject && <p className="text-red-500 text-sm">{errors.subject.message}</p>}
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-gray-300">Message</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  placeholder="Your message" 
                  className={`w-full px-4 py-3 bg-gray-800/50 border ${errors.message ? 'border-red-500' : 'border-gray-700'} rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white resize-none`}
                  {...register('message')}
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon icon={['fas', 'paper-plane']} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
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
