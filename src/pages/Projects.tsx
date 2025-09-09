import { ArrowRight, Star } from 'lucide-react';
import project1 from '@/assets/proj 1.png';
import project2 from '@/assets/project2.jpg';
import project3 from '@/assets/project3.jpg';

const Projects = () => {
  const featuredProjects = [
    {
      id: 1,
      title: 'E-Commerce Web Site',
      subtitle: 'Revolutionary Shopping Experience',
      description:
        'A comprehensive e-commerce mobile application that transformed online shopping for over 100,000 users. Features include AI-powered product recommendations, seamless payment integration, and real-time inventory management.',
      image: project1,
      liveLink: 'https://tab-tawny.vercel.app/', // 🔥 Vercel link added
      results: [],
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Express ', 'Postman'],
      testimonial: {}
    },
    {
      id: 2,
      title: 'DataViz Analytics Platform',
      subtitle: 'Business Intelligence Redefined',
      description:
        'A powerful analytics dashboard that processes millions of data points to provide actionable business insights. Built with modern web technologies to ensure fast performance and intuitive data visualization.',
      image: project2,
      client: 'DataTech Solutions',
      duration: '8 months',
      team: '12 developers',
      results: [
        '60% faster data processing',
        '90% improvement in report generation',
        '25% increase in user productivity'
      ],
      technologies: ['React', 'TypeScript', 'D3.js', 'Python', 'PostgreSQL'],
      testimonial: {
        text: "The platform has revolutionized how we analyze our business data. It's incredibly powerful yet easy to use.",
        author: 'Michael Chen',
        role: 'Data Director, DataTech'
      }
    },
    {
      id: 3,
      title: 'SecureBank Mobile',
      subtitle: 'Next-Generation Banking',
      description:
        'A cutting-edge mobile banking application with bank-grade security, biometric authentication, and advanced financial management tools. Serving over 50,000 active users with zero security incidents.',
      image: project3,
      client: 'First National Bank',
      duration: '10 months',
      team: '15 developers',
      results: [
        '500% increase in mobile banking adoption',
        '99.9% uptime reliability',
        'Zero security breaches'
      ],
      technologies: ['Flutter', 'Kotlin', 'Swift', 'Firebase', 'Blockchain'],
      testimonial: {
        text: "DevCraft's attention to security and user experience made this project a tremendous success.",
        author: 'David Rodriguez',
        role: 'VP Digital, First National Bank'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="section-padding pt-32 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">
            Featured{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p
            className="text-xl text-muted-foreground mb-12 animate-fade-in-up"
            style={{ animationDelay: '0.1s' }}
          >
            Dive deep into our most successful projects and discover the impact we've made for our
            clients.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto space-y-32">
          {featuredProjects.map((project, index) => (
            <div key={project.id} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Content */}
              <div className={`space-y-8 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {project.title}
                  </h2>
                  <h3 className="text-xl text-primary font-semibold mb-6">{project.subtitle}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Results */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4"></h4>
                  <ul className="space-y-2">
                    {project.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center space-x-3">
                        <Star className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-muted-foreground">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                {project.testimonial.text && (
                  <div className="p-6 bg-muted/50 rounded-2xl border border-border">
                    <p className="text-muted-foreground italic mb-4">
                      "{project.testimonial.text}"
                    </p>
                    <div>
                      <div className="font-semibold text-foreground">{project.testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{project.testimonial.role}</div>
                    </div>
                  </div>
                )}

                {/* Live Demo Button */}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-hero inline-flex items-center space-x-2"
                  >
                    <span>Live Demo</span>
                    <ArrowRight className="w-5 h-5" />
                  </a>
                )}
              </div>

              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="relative w-full rounded-3xl shadow-[var(--shadow-large)] group-hover:shadow-[var(--shadow-medium)] transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-muted/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how we can help bring your vision to life with our proven development
            process.
          </p>
          <button className="btn-hero inline-flex items-center space-x-2">
            <span>Get Started Today</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Projects;
