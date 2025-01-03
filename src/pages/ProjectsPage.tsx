import React from 'react';
import { Brain, Image, MessageSquare, Cpu } from 'lucide-react';

const projects = [
  {
    icon: <Image className="h-8 w-8 text-blue-500" />,
    name: 'OdysseyXL',
    description: 'State-of-the-art text-to-image generation model with unprecedented quality and control.',
    status: 'Active',
    link: '/projects/odysseyxl',
    images: [
      '/projects/odyssey/1.png',
      '/projects/odyssey/2.webp',
      '/projects/odyssey/3.png'
    ]
  },
  {
    icon: <Brain className="h-8 w-8 text-purple-500" />,
    name: 'Hercules-3',
    description: 'Advanced language model pushing the boundaries of natural language understanding.',
    status: 'Active',
    link: '/projects/hercules',
    images: [
    ]
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-8 text-center">Our Projects</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center mb-16">
            Exploring the frontiers of artificial intelligence through innovative research and development.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                className="group relative overflow-hidden rounded-2xl bg-black/30 border border-white/10 p-8 transition-all duration-300 hover:bg-black/40 hover:border-blue-500/50"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-white/5 backdrop-blur-sm">
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                      {project.name}
                    </h3>
                    <span className={`text-sm px-3 py-1 rounded-full ${
                      project.status === 'Active' ? 'bg-green-500/20 text-green-400' :
                      project.status === 'In Development' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-blue-500/20 text-blue-400'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">{project.description}</p>
                
                {/* Project Images */}
                <div className="grid grid-cols-3 gap-4">
                  {project.images.map((image, imageIndex) => (
                    <div 
                      key={imageIndex} 
                      className="aspect-square rounded-lg overflow-hidden"
                    >
                      <img 
                        src={image} 
                        alt={`${project.name} preview ${imageIndex + 1}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}