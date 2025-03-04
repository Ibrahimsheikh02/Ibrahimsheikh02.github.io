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
    image: 'https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80',
    fullImage: 'https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&h=900&q=80',
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
      github: 'https://github.com/ibrahimsheikh02/feedback-analyzer'
    },
    codeSnippet: `# Sentiment Analysis with BERT
from transformers import BertTokenizer, BertForSequenceClassification
import torch

tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')
model = BertForSequenceClassification.from_pretrained('bert-base-uncased')

def analyze_sentiment(text):
    inputs = tokenizer(text, return_tensors="pt", padding=True, truncation=True)
    outputs = model(**inputs)
    predictions = torch.nn.functional.softmax(outputs.logits, dim=-1)
    return predictions.detach().numpy()
    `
  },
  {
    id: 'project2',
    title: 'Plutarch AI Tutor',
    summary: 'AI-powered course tutor deployed at NYU across multiple courses. Features adaptive learning pathways and personalized feedback.',
    description: 'An innovative AI tutor system designed to support students through personalized learning experiences. The system integrates with course materials and adapts to individual learning styles, providing customized support for 500+ users across multiple NYU courses.',
    image: 'https://images.unsplash.com/photo-1617791160536-598cf32026fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80',
    fullImage: 'https://images.unsplash.com/photo-1617791160536-598cf32026fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&h=900&q=80',
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
      live: 'https://www.plutarch.us'
    },
    codeSnippet: `// React component for AI conversation
import { useState } from 'react';

function AITutor({ courseId, lessonId }) {
  const [query, setQuery] = useState('');
  const [responses, setResponses] = useState([]);
  
  const submitQuestion = async () => {
    const response = await fetch('/api/tutor/ask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ courseId, lessonId, query })
    });
    
    const data = await response.json();
    setResponses([...responses, { question: query, answer: data.response }]);
    setQuery('');
  };
  
  return (
    <div className="tutor-container">
      {/* Conversation UI */}
    </div>
  );
}`
  },
  {
    id: 'project3',
    title: 'Music Personality App',
    summary: 'Web and iOS application that uses music as therapy to improve mood. Led a team of four engineers in development.',
    description: 'A therapeutic application that analyzes user music preferences to create personalized playlists for mood enhancement. The app incorporates psychological principles to suggest music that can help with stress reduction, focus improvement, and emotional regulation.',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80',
    fullImage: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&h=900&q=80',
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
      github: 'https://github.com/ibrahimsheikh02/music-personality-app'
    }
  },
  {
    id: 'project4',
    title: 'Emotion Detection System',
    summary: 'Computer vision system that detects facial expressions with 11% improved accuracy. Part of NYU research project.',
    description: 'An advanced computer vision system that accurately identifies and classifies human facial expressions in real-time. The system uses a combination of traditional feature extraction techniques and deep learning models to achieve high accuracy across diverse demographics.',
    image: 'https://images.unsplash.com/photo-1575708582830-c2c029688a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80',
    fullImage: 'https://images.unsplash.com/photo-1575708582830-c2c029688a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&h=900&q=80',
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
    },
    codeSnippet: `// C++ code for optimized emotion detection
#include <opencv2/opencv.hpp>
#include <torch/script.h>

class EmotionDetector {
private:
    torch::jit::script::Module model;
    cv::CascadeClassifier face_cascade;
    
public:
    EmotionDetector(const std::string& model_path) {
        // Load model and initialize detector
        model = torch::jit::load(model_path);
        model.eval();
        face_cascade.load("haarcascade_frontalface_default.xml");
    }
    
    std::vector<std::string> detect(const cv::Mat& frame) {
        // Implementation details
    }
};`
  },
  {
    id: 'project5',
    title: 'Nature Publication ML Model',
    summary: 'Machine learning model published in Nature (DOI: 10.1038/s42256-024-00953-0). Novel approach to reinforcement learning.',
    description: 'A groundbreaking reinforcement learning approach that addresses key challenges in sample efficiency and generalization. The model introduces a novel algorithm that significantly outperforms state-of-the-art methods across several benchmark tasks, leading to publication in Nature.',
    image: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80',
    fullImage: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&h=900&q=80',
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
    },
    codeSnippet: `# Advanced reinforcement learning algorithm
import jax
import jax.numpy as jnp
from typing import NamedTuple

class TrainingState(NamedTuple):
    params: jnp.ndarray
    opt_state: Any
    rng: jnp.ndarray
    
def update_step(state: TrainingState, transitions: Batch) -> TrainingState:
    """Update parameters using custom RL algorithm"""
    rng, next_rng = jax.random.split(state.rng)
    
    def loss_fn(params):
        # Advanced algorithm implementation
        # ...
        return loss, metrics
    
    grad_fn = jax.value_and_grad(loss_fn, has_aux=True)
    (loss, metrics), grads = grad_fn(state.params)
    
    updates, new_opt_state = optimizer.update(
        grads, state.opt_state, state.params)
    new_params = optax.apply_updates(state.params, updates)
    
    return TrainingState(
        params=new_params,
        opt_state=new_opt_state,
        rng=next_rng
    )`
  },
  {
    id: 'project6',
    title: 'ML-Powered Escalation Classifier',
    summary: 'Built for Citigroup to classify internal app issues, reducing escalation rate from 10% to 3%. Automated issue classification system.',
    description: 'An automated issue classification system developed for Citigroup that uses machine learning to identify, categorize, and prioritize internal application issues. The system incorporates email sentiment analysis and statistical pattern detection to reduce unnecessary escalations.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80',
    fullImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&h=900&q=80',
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
