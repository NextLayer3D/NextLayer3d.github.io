export default function About() {
  const teamMembers = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "CEO & Founder",
      description: "15+ years in additive manufacturing and product development",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300"
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Technical Director",
      description: "Expert in 3D modeling and printing optimization",
      image: "https://pixabay.com/get/gecf9d99c68b66b661d19b82ade201d1941d010df5c025207bbaa0739f27d8f63bef53888e736c490caa713a1e85cb79e2f984cd7dbf10944f1610742f40b0493_1280.jpg"
    },
    {
      id: 3,
      name: "Mike Rodriguez",
      role: "Production Manager",
      description: "Ensures quality control and timely delivery",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300"
    },
    {
      id: 4,
      name: "Emily Davis",
      role: "Design Specialist",
      description: "Creative solutions for complex design challenges",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300"
    }
  ];

  const stats = [
    { value: "500+", label: "Projects Completed" },
    { value: "50+", label: "Happy Clients" },
    { value: "3", label: "Years Experience" }
  ];

  return (
    <div>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About Our Team
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the experts behind NextLayer 3D printing excellence
            </p>
          </div>

          {/* Company Story */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Founded in 2020, NextLayer 3D has grown from a small startup to a leading 
                  provider of precision 3D printing services. Our mission is to transform ideas 
                  into reality through cutting-edge technology and exceptional craftsmanship.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  We serve clients across industries including automotive, healthcare, aerospace, 
                  and consumer products, delivering solutions that exceed expectations for quality 
                  and innovation.
                </p>
                
                <div className="grid grid-cols-3 gap-6 text-center">
                  {stats.map((stat, index) => (
                    <div key={index}>
                      <div className="text-3xl font-bold text-primary mb-2">
                        {stat.value}
                      </div>
                      <div className="text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <img
                  src="https://pixabay.com/get/gf314af11e488beb8ab81aebd00dc64370de81f54b5ef2eeb51505fafcea339a526e00a0ba78e383af83386d3bb0126255ed8826022890fb4afe7f5dae90f6626_1280.jpg"
                  alt="Modern 3D printing facility with multiple professional printers"
                  className="rounded-xl shadow-lg w-full"
                />
              </div>
            </div>
          </div>

          {/* Team Members */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Meet Our Team
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="text-center bg-neutral-50 rounded-xl p-8 hover:shadow-lg transition-shadow"
                >
                  <img
                    src={member.image}
                    alt={`Professional headshot of ${member.name}`}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
