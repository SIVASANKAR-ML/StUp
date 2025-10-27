import { ArrowRight, Smartphone, Globe, Settings, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-image.jpg';
import project1 from '@/assets/proj 1.png';
import project2 from '@/assets/project2.jpg';
import project3 from '@/assets/project3.jpg';

const Index = () => {
  const services = [
    {
      icon: Smartphone,
      title: 'Website Development',
      description: 'Native iOS and Android apps that deliver exceptional user experiences.',
    },
    {
      icon: Globe,
      title: 'Web Applications',
      description: 'Scalable web applications built with modern frameworks and best practices.',
    },
    {
      icon: Settings,
      title: 'Custom Software Solutions',
      description: 'Tailored software solutions designed to meet your unique business needs.',
    },
  ];

  const testimonials = [
    {
      text: "DevCraft transformed our business with an incredible mobile app. The team's expertise and dedication exceeded our expectations.",
      author: 'Sarah Johnson',
      role: 'CEO, TechStart',
      rating: 5,
    },
    {
      text: "Professional, reliable, and innovative. They delivered our project on time and within budget.",
      author: 'Michael Chen',
      role: 'CTO, DataCorp',
      rating: 5,
    },
    {
      text: "The quality of their work is outstanding. Our web application performs flawlessly and looks amazing.",
      author: 'Emily Rodriguez',
      role: 'Founder, GrowthLab',
      rating: 5,
    },
  ];

  const featuredProjects = [
    {
      title: 'E-Commerce Website',
      category: 'Web Development',
      image: project1,
      link: 'https://tab-tawny.vercel.app/', // 🔗 Added Vercel link
    },
    {
      title: 'Analytics Dashboard',
      category: 'Web Application',
      image: project2,
    },
    {
      title: 'Banking Platform',
      category: 'Custom Software',
      image: project3,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-gradient section-padding pt-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">
                Crafting Digital
                <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Experiences
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                We build innovative mobile apps and web applications that drive business growth and delight users.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <Link to="/contact" className="btn-hero inline-flex items-center justify-center space-x-2">
                  <span>Start Your Project</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/portfolio" className="btn-secondary inline-flex items-center justify-center space-x-2">
                  <span>View Our Work</span>
                </Link>
              </div>
            </div>
            <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl" />
              <img
                src={heroImage}
                alt="Modern technology and development"
                className="relative w-full rounded-3xl shadow-[var(--shadow-large)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            What We Do
          </h2>
          <p className="text-xl text-muted-foreground mb-16 max-w-3xl mx-auto">
            We specialize in creating cutting-edge digital solutions that help businesses thrive in the modern world.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="card-elevated group hover:-translate-y-2 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section-padding bg-muted/50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground mb-16 max-w-3xl mx-auto">
            Take a look at some of our recent work and see how we've helped businesses achieve their goals.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <div
                key={project.title}
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
                </div>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold text-foreground mt-4">
                  {project.title}
                </h3>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block btn-secondary"
                  >
                    View Live Demo
                  </a>
                )}
              </div>
            ))}
          </div>
          
          <Link to="/portfolio" className="btn-hero inline-flex items-center space-x-2">
            <span>View All Projects</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground mb-16 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.author}
                className="card-elevated"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground italic mb-6">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '100+', label: 'Projects Completed' },
              { number: '50+', label: 'Happy Clients' },
              { number: '5+', label: 'Years Experience' },
              { number: '99%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <div key={stat.label} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how we can help bring your vision to life with our proven development process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-hero inline-flex items-center space-x-2">
              <span>Get Started Today</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/services" className="btn-secondary inline-flex items-center space-x-2">
              <span>Learn More</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
