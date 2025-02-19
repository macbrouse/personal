export const About = () => {
    const skills = [
      { name: 'JavaScript', color: 'bg-yellow-400' },
      { name: 'React', color: 'bg-blue-400' },
      { name: 'Node.js', color: 'bg-green-400' },
      { name: 'TypeScript', color: 'bg-blue-600' }
    ];
  
    return (
      <section id="about" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-16">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
            <h2 className="text-4xl font-bold">
              About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
          </div>
          <div className="flexbox md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I&#39m a passionate developer focused on creating elegant solutions to complex problems.
                With expertise in modern web technologies, I build scalable applications that deliver
                exceptional user experiences.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[ 'JavaScript', 'Node.js', 'React', 'MongoDB'].map((skill) => (
                  <div key={skill} className="group relative bg-gray-900/50 backdrop-blur-sm p-4 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-pink-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };