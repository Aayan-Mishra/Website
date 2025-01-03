'use client'

import React, { useState, useEffect } from 'react';
import Button from './ui/Button';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0">
        <img
          src="https://raw.githubusercontent.com/Aayan-Mishra/Images/refs/heads/main/4.0-Grid.png"
          alt="Snow covered mountain peak at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Revolutionizing the{' '}
            <span className="animate-gradient bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-[size:200%] text-transparent bg-clip-text">
              Future of AI
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-2xl">
            Pushing the boundaries of artificial intelligence through groundbreaking research and innovative solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/projects" variant="primary" icon>
              Explore Projects
            </Button>
            <Button href="/contact" variant="secondary">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}