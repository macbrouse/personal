'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';

export const Projects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/macbrouse/repos');
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        const pinned=new Array();
      data.forEach(repo => {
        if (repo.description) {
          pinned.push(repo);
        }
      })
        setRepos(pinned);
      } catch (err) {
        console.error(err);
      }
    };
    fetchRepos();
  }, []);

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12">
          Featured <span className="text-blue-400">Projects</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {repos.map((item) => (
              <div key={item.id} className="group relative bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 hover:-translate-y-2">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-pink-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="h-48 mb-6 rounded-lg bg-gray-800/50 overflow-hidden">
                    < Image 
                        height={200}
                        width={300}
                        src={`/${item.name}.png`}
                        alt='Project Preview'
                        className="w-full h-full object-scale-down mb 4"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2"> {item.name}</h3>
                  <p className="text-gray-400 mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-blue-400">{item.language}</span>
                    {/* <span className="text-sm text-purple-400">Node.js</span>
                    <span className="text-sm text-pink-400">React</span> */}
                  </div>
                  <a
          href={item.homepage}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          View Project
          <ChevronRight size={16} />
        </a>
                </div>
              </div>
            ))}
      </div>
    </section>
  );
};