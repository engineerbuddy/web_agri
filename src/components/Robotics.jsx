function Robotics() {
  const robots = [
    {
      name: 'TerraBot',
      status: '',
      icon: 'precision_manufacturing',
      description: 'Autonomous soil sampling and micro-weeding robot. Operates 24/7 with solar charging capabilities.',
      tags: ['LIDAR', 'SOLAR', 'AI NAV'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBodeKzmvtxeAlCd0IcDra56j_Ungt0V3_Jd8u92bGLjfjMdAXVn17wrm2AmlVxL8B7xnByu3kuT-CzO6BhTDrh7PlNZZrKyNfDW7H_cOnZ5PvQDJCuA-AvPwbX6AI1hE24tAHKYFNs-UYluJqf49P-MFfpK6ko03ak1CJ9El0Pa188OVqeq9qSYXXzT8ZJ5s4B-Yi7yclWc9y-9smYK8Aj3bJFb8PywgVO3fWiMJ343BJNQ5AzJi2PdRf42VRQQ3CYD9Dxx39N0g'
    },
    {
      name: 'SkyEye',
      status: '',
      icon: 'flight',
      description: 'Aerial surveillance drone for rapid large-scale crop analysis and targeted micro-spraying.',
      tags: ['4K CAM', 'THERMAL', '5G'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANs-bSqB0ThcoPjB3GNO_RMD_puj63iMcMdnf-ciq4zEtHNTK9u2sQGDk9wDy5oioT8bYsLVTnlHjq-_QfhTx1Q0kVxn19pP5kWeWGb-XG5Mj3l4AmfCMG2j-zrlCD268LK1L2TC37xvF6phixUqNxcg3-cdPFnucTirFIx260QcDIg6Q4Lwcey-XC047pV6DKApVUM1xT0jvhx6cQe96uo0s_ATkAXtszsSL7pQunPLYb43wagITzOAK-5weBkGlkxncWTNY0eA'
    }
  ]

  return (
    <section className="py-20 lg:py-32 w-full bg-[#0B1713] relative overflow-hidden" id="robotics">
      <div 
        className="absolute inset-0 z-0 opacity-10" 
        style={{ backgroundImage: 'radial-gradient(#11d493 1px, transparent 1px)', backgroundSize: '30px 30px' }}
      />
      
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-primary font-bold uppercase tracking-wider text-sm mb-2 block">Coming Soon</span>
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-4">
            Beyond the Screen: <br className="hidden sm:block" /> Autonomous Agriculture
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            The next generation of farming isn't just about reading data—it's about acting on it. Meet our upcoming fleet of autonomous guardians.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {robots.map((robot, index) => (
            <div 
              key={index}
              className="group relative bg-[#152620] border border-[#1E332A] rounded-3xl overflow-hidden hover:border-primary/50 transition-colors duration-300"
            >
              <div 
                className="aspect-video w-full bg-cover bg-center relative" 
                style={{ backgroundImage: `url('${robot.image}')` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#152620] to-transparent" />
              </div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                    {robot.name}
                  </h3>
                  <span className="material-symbols-outlined text-gray-500 group-hover:text-primary transition-colors">
                    {robot.icon}
                  </span>
                </div>
                
                <p className="text-gray-400 mb-6">{robot.description}</p>
                
                <div className="flex gap-2">
                  {robot.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 rounded-md bg-[#1E332A] text-gray-300 text-xs font-bold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Robotics
