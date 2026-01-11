import React from 'react'

const ServicesPage = () => {
  const services = [
    {
      title: 'Leadership Coaching',
      description: 'One-on-one coaching sessions to help women develop their leadership skills and confidence.',
      icon: '👑'
    },
    {
      title: 'Career Development',
      description: 'Strategic career planning and guidance to help you reach your professional goals.',
      icon: '📈'
    },
    {
      title: 'Networking Events',
      description: 'Connect with other women leaders and build meaningful professional relationships.',
      icon: '🤝'
    },
    {
      title: 'Workshops & Training',
      description: 'Interactive workshops on leadership, communication, and professional development.',
      icon: '📚'
    },
    {
      title: 'Mentorship Programs',
      description: 'Get paired with experienced mentors who can guide your career journey.',
      icon: '🌟'
    },
    {
      title: 'Public Speaking',
      description: 'Build confidence and skills in public speaking and presentation.',
      icon: '🎤'
    }
  ]

  return (
    <div className='min-h-screen w-full bg-gray-900 p-8'>
      <div className='max-w-7xl mx-auto'>
        <h1 className='text-7xl font-bold text-white mb-4 text-center'>Our Services</h1>
        <p className='text-xl text-gray-300 mb-12 text-center max-w-3xl mx-auto'>
          Empowering women through comprehensive leadership development programs
        </p>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
          {services.map((service, index) => (
            <div 
              key={index}
              className='bg-gray-800 p-6 rounded-lg shadow-2xl hover:shadow-purple-500/50 transition-shadow border border-gray-700 hover:border-purple-500'
            >
              <div className='text-5xl mb-4'>{service.icon}</div>
              <h3 className='text-2xl font-bold text-white mb-3'>{service.title}</h3>
              <p className='text-gray-300'>{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className='text-center'>
          <a 
            href='/home'
            className='text-purple-400 hover:text-purple-300 underline text-lg'
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  )
}

export default ServicesPage
