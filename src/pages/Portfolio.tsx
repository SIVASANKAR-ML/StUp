import { ExternalLink, Github, Calendar } from 'lucide-react';
import project1 from '@/assets/proj 1.png';
import project2 from '@/assets/project2.jpg';
import project3 from '@/assets/project3.jpg';
import pro4 from '@/assets/pro4.png';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Web Application',
      description: 'A modern shopping Website with seamless user experience and advanced features.',
      image: project1,
      category: 'Web Application',
      technologies: ['React Native', 'Node.js', 'MongoDB'],
      year: '2024',
      client: '',
      link: 'https://tab-tawny.vercel.app/'   // ✅ Vercel link added
    },
    {
      id: 2,
      title: 'Analytics Dashboard',
      description: 'Comprehensive business intelligence platform with real-time data visualization.',
      image: project2,
      category: 'Web Application',
      technologies: ['React', 'TypeScript', 'D3.js'],
      year: '2024',
      client: 'DataTech'
    },
    {
      id: 3,
      title: 'FinTech Banking App',
      description: 'Secure mobile banking solution with advanced financial management features.',
      image: project3,
      category: 'Mobile App',
      technologies: ['Flutter', 'Firebase', 'Stripe'],
      year: '2023',
      client: 'FinanceFirst'
    },
    {
      id: 4,
      title: 'Healthcare Platform',
      description: 'Telemedicine platform connecting patients with healthcare providers.',
      image: pro4,
      category: 'Web Application',
      technologies: ['Next.js', 'PostgreSQL', 'AWS'],
      year: '2023',
      client: 'MedConnect'
    },
    {
      id: 5,
      title: 'Social Media App',
      description: 'Community-focused social platform with real-time messaging and content sharing.',
      image: project2,
      category: 'Mobile App',
      technologies: ['React Native', 'GraphQL', 'Redis'],
      year: '2023',
      client: 'SocialHub'
    },
    {
      id: 6,
      title: 'Project Management Tool',
      description: 'Collaborative workspace for teams with advanced project tracking capabilities.',
      image: project3,
      category: 'Web Application',
      technologies: ['Vue.js', 'Laravel', 'MySQL'],
      year: '2023',
      client: 'TeamWork'
    }
  ];

  const categories = ['All', 'Mobile App', 'Web Application'];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="section-padding pt-32 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">
            Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Portfolio</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Discover our latest projects and see how we've helped businesses transform their digital presence.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-3 bg-secondary text-secondary-foreground rounded-xl hover:bg-muted transition-colors duration-200 font-medium"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="card-elevated group hover:-translate-y-2 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    <button className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                      <Github className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium">
                      {project.category}
                    </span>
                    <div className="flex items-center space-x-1 text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{project.year}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="pt-2 border-t border-border">
                    <span className="text-sm text-muted-foreground">
                      Client: <span className="font-medium text-foreground">{project.client}</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
