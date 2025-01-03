import React from 'react';

interface CardProps {
  title: string;
  description: string;
}

export default function Card({ title, description }: CardProps) {
  return (
    <div className="w-72 p-6 bg-black/40 backdrop-blur-xl rounded-xl border border-white/10 hover:border-white/20 transition-all hover:translate-y-[-4px]">
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}