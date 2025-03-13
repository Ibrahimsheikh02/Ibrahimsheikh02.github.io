export interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  image: string;
  fullImage?: string;
  badges: string[];
  categories: string[];
  technologies: string[];
  features: string[];
  links: {
    github?: string;
    live?: string;
  };
  codeSnippet?: string;
  awardInfo?: string;
}

export const projectsData: Project[] = [
  {
    id: 'project1',
    title: 'Feedback is All You Need',
    summary: 'Analyzed 10,000+ student reviews on lectures to find patterns for improvement. Won first place at NYU Project Expo (2024).',
    description: 'An advanced NLP system that analyzes lecture feedback to improve education. By examining 10,000+ student reviews, we identified patterns to enhance lecture content, accessibility, and delivery.',
    image: '/images/projects/feedback-analyzer.jpg',
    fullImage: '/images/projects/feedback-analyzer.jpg',
    badges: ['AI/ML'],
    categories: ['ai', 'research'],
    technologies: ['PyTorch', 'NLTK', 'BERT', 'Pandas', 'Scikit-Learn', 'Flask', 'React'],
    features: [
      'Sentiment analysis on student feedback',
      'Topic modeling to identify common pain points',
      'Recommendation engine for lecture improvements',
      'Interactive dashboard for professor insights',
      'Won first place at NYU Project Expo 2024'
    ],
    links: {
      live: 'https://drive.google.com/file/d/1xxQfKA9bcl5dR6cMICDqJZA0lIYqM7o5/view'
    }
  },
  {
    id: 'project2',
    title: 'Plutarch AI Tutor',
    summary: 'AI-powered course tutor deployed at NYU across multiple courses. Features adaptive learning pathways and personalized feedback.',
    description: 'An innovative AI tutor system designed to support students through personalized learning experiences. The system integrates with course materials and adapts to individual learning styles, providing customized support for 500+ users across multiple NYU courses.',
    image: '/images/projects/plutarch.jpg',
    fullImage: '/images/projects/plutarch.jpg',
    badges: ['Web/AI'],
    categories: ['ai', 'web'],
    technologies: ['Flask', 'React', 'LangChain', 'PostgreSQL', 'OpenAI API', 'Python', 'TypeScript'],
    features: [
      'Adaptive learning paths based on student performance',
      'Integration with course materials and syllabus',
      'Real-time feedback on assignments and exercises',
      'Natural language interface for student questions',
      'Analytics dashboard for instructors',
      'Deployed across multiple courses with 500+ active users'
    ],
    links: {
      github: 'https://github.com/Ibrahimsheikh02/PlutarchOS'
    }
  },
  {
    id: 'project3',
    title: 'Music Personality App',
    summary: 'Web and iOS application that uses music as therapy to improve mood. Led a team of four engineers in development.',
    description: 'A therapeutic application that analyzes user music preferences to create personalized playlists for mood enhancement. The app incorporates psychological principles to suggest music that can help with stress reduction, focus improvement, and emotional regulation.',
    image: '/images/projects/music-app.jpg',
    fullImage: '/images/projects/music-app.jpg',
    badges: ['Web Dev'],
    categories: ['web'],
    technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'Swift', 'Spotify API', 'Jest'],
    features: [
      'Personality assessment through music preferences',
      'Mood tracking and analysis',
      'Personalized playlist generation',
      'Integration with Spotify and Apple Music',
      'Cross-platform functionality (Web and iOS)',
      'User preference learning algorithm'
    ],
    links: {
      github: 'https://github.com/Ibrahimsheikh02/4-final-project-auditory-cheesecake'
    }
  },
  {
    id: 'project4',
    title: 'Emotion Detection System',
    summary: 'Computer vision system that detects facial expressions with 11% improved accuracy. Part of NYU research project.',
    description: 'An advanced computer vision system that accurately identifies and classifies human facial expressions in real-time. The system uses a combination of traditional feature extraction techniques and deep learning models to achieve high accuracy across diverse demographics.',
    image: '/images/projects/emotion-detection.jpg',
    fullImage: '/images/projects/emotion-detection.jpg',
    badges: ['AI/Research'],
    categories: ['ai', 'research'],
    technologies: ['PyTorch', 'C++', 'OpenCV', 'Computer Vision', 'CUDA', 'TensorRT'],
    features: [
      'Real-time facial expression recognition',
      '11% improved accuracy over baseline models',
      'Robust performance across different lighting conditions',
      'Demographic-aware training to reduce bias',
      'Optimized inference for low-latency applications',
      'Integration with academic study platform'
    ],
    links: {
      github: 'https://github.com/ibrahimsheikh02/emotion-detection'
    }
  },
  {
    id: 'project5',
    title: 'Nature Publication ML Model',
    summary: 'Machine learning model published in Nature (DOI: 10.1038/s42256-024-00953-0). Novel approach to reinforcement learning.',
    description: 'A groundbreaking reinforcement learning approach that addresses key challenges in sample efficiency and generalization. The model introduces a novel algorithm that significantly outperforms state-of-the-art methods across several benchmark tasks, leading to publication in Nature.',
    image: '/images/projects/nature-publication.jpg',
    fullImage: '/images/projects/nature-publication.jpg',
    badges: ['Research'],
    categories: ['ai', 'research'],
    technologies: ['PyTorch', 'TensorFlow', 'Reinforcement Learning', 'Academic Research', 'JAX', 'NumPy'],
    features: [
      'Novel reinforcement learning algorithm',
      'Improved sample efficiency by 40%',
      'Better generalization to unseen environments',
      'Theoretical guarantees for convergence',
      'Published in Nature (DOI: 10.1038/s42256-024-00953-0)',
      'Open-source implementation with benchmark results'
    ],
    links: {
      live: 'https://www.nature.com/articles/s42256-024-00953-0'
    }
  },
  {
    id: 'project6',
    title: 'ML-Powered Escalation Classifier',
    summary: 'Built for Citigroup to classify internal app issues, reducing escalation rate from 10% to 3%. Automated issue classification system.',
    description: 'An automated issue classification system developed for Citigroup that uses machine learning to identify, categorize, and prioritize internal application issues. The system incorporates email sentiment analysis and statistical pattern detection to reduce unnecessary escalations.',
    image: '/images/projects/ml-classifier.jpg',
    fullImage: '/images/projects/ml-classifier.jpg',
    badges: ['AI/ML'],
    categories: ['ai'],
    technologies: ['Python', 'C++', 'AWS', 'BERT', 'ML Pipeline', 'SageMaker', 'CloudFormation'],
    features: [
      'Automated classification of internal app issues',
      'Email sentiment analysis for priority determination',
      'Statistical pattern detection in issue reports',
      'Reduced escalation rate from 10% to 3%',
      'Integration with ticketing system',
      'Self-improving model with human-in-the-loop feedback'
    ],
    links: {}
  }
];
