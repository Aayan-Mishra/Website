import React from 'react';
import { Brain, Image, MessageSquare, Cpu } from 'lucide-react';

const projects = [
  {
    icon: <Image className="h-8 w-8 text-blue-500" />,
    name: 'OdysseyXL',
    description: 'State-of-the-art text-to-image generation model with unprecedented quality and control.',
    status: 'Active',
    link: '/projects/odysseyxl'
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-purple-500" />,
    name: 'Hercules-3',
    description: 'Advanced language model pushing the boundaries of natural language understanding.',
    status: 'Active',
    link: '/projects/hercules'
  },
  {
    icon: <Brain className="h-8 w-8 text-green-500" />,
    name: 'Hercules-3-Guard',
    description: 'Next-generation model for AI safety and ethical use.',
    status: 'In Development',
    link: '/projects/neo'
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our cutting-edge AI projects that are pushing the boundaries
            of what's possible in artificial intelligence.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <a
                key={project.name}
                href={project.link}
                className="p-6 bg-black/40 rounded-xl border border-white/10 hover:border-white/20 transition-all hover:translate-y-[-4px]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">{project.icon}</div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold">{project.name}</h3>
                      <span className="px-2 py-1 text-xs rounded-full bg-blue-500/10 text-blue-400">
                        {project.status}
                      </span>
                    </div>
                    <p className="text-gray-300">{project.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}