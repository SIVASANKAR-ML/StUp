import { Target, Heart, Lightbulb, Users, Award, Coffee } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for perfection in every line of code and pixel of design.',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'We love what we do and it shows in the quality of our work.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We embrace new technologies and creative solutions.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients as true partners.',
    },
  ];

  const team = [
    {
      name: 'Alex Johnson',
      role: 'CEO & Lead Developer',
      bio: '10+ years building scalable applications for Fortune 500 companies.',
      image: '/api/placeholder/300/300',
    },
    {
      name: 'Sarah Chen',
      role: 'CTO & Mobile Expert',
      bio: 'Former Apple engineer with expertise in iOS and Android development.',
      image: '/api/placeholder/300/300',
    },
    {
      name: 'Michael Rodriguez',
      role: 'Lead Designer',
      bio: 'Award-winning UX/UI designer focused on user-centered design.',
      image: '/api/placeholder/300/300',
    },
    {
      name: 'Emily Davis',
      role: 'Project Manager',
      bio: 'Agile expert ensuring projects are delivered on time and budget.',
      image: '/api/placeholder/300/300',
    },
  ];

  const stats = [
    { number: '100+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '5', label: 'Years of Experience' },
    { number: '24/7', label: 'Support Available' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="section-padding pt-32 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">
            About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">DevCraft</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            We're a passionate team of developers and designers dedicated to crafting exceptional digital experiences.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At DevCraft, we believe that great software has the power to transform businesses and improve lives. 
                Our mission is to partner with forward-thinking companies to create innovative digital solutions that 
                drive growth, enhance user experiences, and solve real-world problems.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We combine technical expertise with creative vision to deliver applications that not only meet your 
                current needs but are built to scale and evolve with your business.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl" />
              <div className="relative bg-card rounded-3xl p-8 shadow-[var(--shadow-large)]">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                      <div className="text-muted-foreground text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-muted/50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Our Values
          </h2>
          <p className="text-xl text-muted-foreground mb-16 max-w-3xl mx-auto">
            These core values guide everything we do and shape the way we work with our clients and each other.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="card-elevated text-center group hover:-translate-y-2 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Meet Our Team
          </h2>
          <p className="text-xl text-muted-foreground mb-16 max-w-3xl mx-auto">
            Our diverse team brings together expertise from design, development, and business strategy.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="card-elevated text-center group hover:-translate-y-2 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-24 h-24 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="section-padding bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="card-elevated text-center p-6">
                  <Coffee className="w-8 h-8 text-primary mx-auto mb-4" />
                  <div className="text-2xl font-bold text-foreground mb-2">∞</div>
                  <div className="text-muted-foreground text-sm">Cups of Coffee</div>
                </div>
                <div className="card-elevated text-center p-6">
                  <Award className="w-8 h-8 text-primary mx-auto mb-4" />
                  <div className="text-2xl font-bold text-foreground mb-2">15+</div>
                  <div className="text-muted-foreground text-sm">Awards Won</div>
                </div>
                <div className="card-elevated text-center p-6 col-span-2">
                  <Heart className="w-8 h-8 text-primary mx-auto mb-4" />
                  <div className="text-2xl font-bold text-foreground mb-2">100%</div>
                  <div className="text-muted-foreground text-sm">Client Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Culture
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We foster a collaborative environment where creativity thrives and innovation is encouraged. 
                Our team is our greatest asset, and we invest in continuous learning and professional growth.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From flexible work arrangements to regular team building activities, we create a workplace 
                where everyone can do their best work while maintaining a healthy work-life balance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;