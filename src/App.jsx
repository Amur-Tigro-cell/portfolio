import React, { useState } from 'react'

// Icon Components
const GithubIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
)

const LinkedinIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.006 1.422-.103.249-.129.597-.129.946v5.437h-3.554s.05-8.814 0-9.752h3.554v1.381c.43-.664 1.2-1.608 2.923-1.608 2.135 0 3.732 1.39 3.732 4.377v5.602zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.71 0-.956.77-1.71 1.952-1.71 1.18 0 1.914.754 1.939 1.71 0 .952-.759 1.71-1.976 1.71zm1.614 11.597H3.615V9.7h3.336v10.752zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const MailIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

const ExternalLinkIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
)

const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
)

const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
)

const CodeIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
)

const PaletteIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
  </svg>
)

const ZapIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
)

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A fully functional e-commerce website with product filtering, shopping cart, and checkout system.',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=500&q=80',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/Amur-Tigro-cell/ecommerce-platform',
      live: 'https://ecommerce-platform-demo.com'
    },
    {
      title: 'Weather App',
      description: 'Real-time weather application with location search, forecast, and beautiful UI.',
      image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=500&q=80',
      tech: ['React', 'API', 'Tailwind CSS'],
      github: 'https://github.com/Amur-Tigro-cell/weather-app',
      live: 'https://weather-app-demo.com'
    },
    {
      title: 'Admin Dashboard',
      description: 'Comprehensive admin dashboard with charts, analytics, and user management.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80',
      tech: ['React', 'Chart.js', 'Node.js'],
      github: 'https://github.com/Amur-Tigro-cell/admin-dashboard',
      live: 'https://admin-dashboard-demo.com'
    }
  ]

  const skills = {
    proficient: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS'],
    familiar: ['Git', 'Responsive Design', 'REST APIs', 'npm'],
    learning: ['TypeScript', 'Next.js', 'Node.js']
  }

  return (
    <div className="w-full bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-md border-b border-gray-800 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Subro</div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <a href="#about" className="text-gray-300 hover:text-blue-400 transition">About</a>
            <a href="#projects" className="text-gray-300 hover:text-blue-400 transition">Projects</a>
            <a href="#skills" className="text-gray-300 hover:text-blue-400 transition">Skills</a>
            <a href="#contact" className="text-gray-300 hover:text-blue-400 transition">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300"
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700">
            <div className="px-4 py-4 space-y-3">
              <a href="#about" className="block text-gray-300 hover:text-blue-400">About</a>
              <a href="#projects" className="block text-gray-300 hover:text-blue-400">Projects</a>
              <a href="#skills" className="block text-gray-300 hover:text-blue-400">Skills</a>
              <a href="#contact" className="block text-gray-300 hover:text-blue-400">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeIn">
              Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent animate-pulse">Subro</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fadeIn" style={{animationDelay: '0.2s'}}>
              Full-stack Web Developer | Student at BAIUST
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12 animate-fadeIn" style={{animationDelay: '0.4s'}}>
              I build beautiful, responsive websites and applications. Passionate about creating engaging user experiences with modern web technologies.
            </p>
            <div className="flex justify-center gap-4 flex-wrap animate-fadeIn" style={{animationDelay: '0.6s'}}>
              <a 
                href="#projects" 
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="px-8 py-3 border-2 border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400/10 hover:scale-105 hover:border-blue-300 transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          
          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto text-center">
            I'm a second-year student at BAIUST passionate about web development. I love turning ideas into reality through code and creating solutions that make a difference.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 bg-gray-700 rounded-xl hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105 hover:-translate-y-2 transition-all duration-300 group">
              <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                <CodeIcon />
              </div>
              <h3 className="text-xl font-semibold mb-3">Clean Code</h3>
              <p className="text-gray-400">
                I write well-organized, maintainable code that follows best practices and industry standards.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 bg-gray-700 rounded-xl hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105 hover:-translate-y-2 transition-all duration-300 group">
              <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                <PaletteIcon />
              </div>
              <h3 className="text-xl font-semibold mb-3">Beautiful Design</h3>
              <p className="text-gray-400">
                I focus on creating visually appealing and user-friendly interfaces that engage users.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 bg-gray-700 rounded-xl hover:shadow-lg hover:shadow-indigo-500/50 hover:scale-105 hover:-translate-y-2 transition-all duration-300 group">
              <div className="text-indigo-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                <ZapIcon />
              </div>
              <h3 className="text-xl font-semibold mb-3">High Performance</h3>
              <p className="text-gray-400">
                I optimize applications for speed and efficiency, ensuring smooth user experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-105 hover:-translate-y-2 transition-all duration-300 group">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-xs bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full border border-blue-700">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a 
                      href={project.github}
                      className="flex items-center gap-2 text-gray-400 hover:text-blue-400 hover:scale-110 transition-all duration-200"
                    >
                      <GithubIcon />
                      Code
                    </a>
                    <a 
                      href={project.live}
                      className="flex items-center gap-2 text-gray-400 hover:text-blue-400 hover:scale-110 transition-all duration-200"
                    >
                      <ExternalLinkIcon />
                      Live
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Proficient */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Proficient</h3>
              <ul className="space-y-3">
                {skills.proficient.map((skill, index) => (
                  <li key={index} className="text-gray-300">✓ {skill}</li>
                ))}
              </ul>
            </div>

            {/* Familiar */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Familiar</h3>
              <ul className="space-y-3">
                {skills.familiar.map((skill, index) => (
                  <li key={index} className="text-gray-300">✓ {skill}</li>
                ))}
              </ul>
            </div>

            {/* Learning */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-indigo-400">Currently Learning</h3>
              <ul className="space-y-3">
                {skills.learning.map((skill, index) => (
                  <li key={index} className="text-gray-300">→ {skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Work Together</h2>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Have a project in mind? Let's connect and create something amazing together.
          </p>

          <div className="flex justify-center gap-6 flex-wrap">
            <a 
              href="mailto:subroopu@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
            >
              <MailIcon />
              Email Me
            </a>
            <a 
              href="https://github.com/Amur-Tigro-cell"
              className="flex items-center gap-2 px-6 py-3 border-2 border-gray-600 text-gray-300 rounded-lg hover:border-gray-400 hover:text-gray-100 hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              <GithubIcon />
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/subro-sutradhar-02b1883a1"
              className="flex items-center gap-2 px-6 py-3 border-2 border-blue-500 text-blue-400 rounded-lg hover:border-blue-400 hover:text-blue-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
            >
              <LinkedinIcon />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Subro Sutradhar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
