import { Smartphone, Globe, Settings, ArrowRight, Check } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native iOS and Android apps built with cutting-edge technologies',
      features: ['iOS & Android Native', 'React Native', 'Flutter', 'App Store Optimization'],
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      icon: Globe,
      title: 'Web Application Development',
      description: 'Scalable web applications with modern frameworks and best practices',
      features: ['React & Next.js', 'TypeScript', 'Cloud Deployment', 'Progressive Web Apps'],
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      icon: Settings,
      title: 'Custom Software Solutions',
      description: 'Tailored software solutions to meet your unique business needs',
      features: ['API Development', 'Database Design', 'Third-party Integrations', 'Maintenance & Support'],
      gradient: 'from-green-500 to-blue-600'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="section-padding pt-32 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">
            Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            We specialize in creating innovative digital solutions that drive business growth and user engagement.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="card-elevated group hover:-translate-y-2 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="flex items-center space-x-2 text-primary font-semibold group-hover:translate-x-1 transition-transform duration-200">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-muted/50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Our Development Process
          </h2>
          <p className="text-xl text-muted-foreground mb-16 max-w-3xl mx-auto">
            We follow a proven methodology to deliver exceptional results on time and within budget.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your needs and goals' },
              { step: '02', title: 'Design', description: 'Creating user-centered designs' },
              { step: '03', title: 'Development', description: 'Building with best practices' },
              { step: '04', title: 'Deployment', description: 'Launching and ongoing support' }
            ].map((phase, index) => (
              <div key={phase.step} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 mx-auto">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{phase.title}</h3>
                <p className="text-muted-foreground">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;