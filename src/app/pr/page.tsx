import React from 'react'

const PRPage = () => {
  const prHighlights = [
    {
      title: 'Media Coverage',
      description: 'Featured in top publications and media outlets worldwide',
      stats: '50+ Publications'
    },
    {
      title: 'Speaking Engagements',
      description: 'Our leaders speak at major conferences and events',
      stats: '100+ Events'
    },
    {
      title: 'Community Impact',
      description: 'Empowering thousands of women across the globe',
      stats: '10,000+ Women'
    },
    {
      title: 'Success Stories',
      description: 'Transformative journeys of women leaders',
      stats: '500+ Stories'
    }
  ]

  const pressReleases = [
    {
      date: 'January 2026',
      title: 'Her Lead Launches New Leadership Initiative',
      excerpt: 'Introducing groundbreaking programs to support women in executive roles...'
    },
    {
      date: 'December 2025',
      title: 'Record-Breaking Year for Women in Leadership',
      excerpt: 'Her Lead celebrates unprecedented growth and impact in 2025...'
    },
    {
      date: 'November 2025',
      title: 'Partnership Announcement with Fortune 500 Companies',
      excerpt: 'Strategic partnerships to create more opportunities for women leaders...'
    }
  ]

  return (
    <div className='min-h-screen w-full bg-gray-900 p-8'>
      <div className='max-w-7xl mx-auto'>
        <h1 className='text-7xl font-bold text-white mb-4 text-center'>Public Relations</h1>
        <p className='text-xl text-gray-300 mb-12 text-center max-w-3xl mx-auto'>
          Making waves in women's leadership and empowerment
        </p>
        
        {/* PR Highlights */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16'>
          {prHighlights.map((highlight, index) => (
            <div 
              key={index}
              className='bg-purple-900 p-6 rounded-lg shadow-2xl text-center'
            >
              <h3 className='text-3xl font-bold text-white mb-2'>{highlight.stats}</h3>
              <h4 className='text-xl font-semibold text-purple-200 mb-2'>{highlight.title}</h4>
              <p className='text-gray-300 text-sm'>{highlight.description}</p>
            </div>
          ))}
        </div>
        
        {/* Press Releases */}
        <div className='mb-12'>
          <h2 className='text-4xl font-bold text-white mb-8 text-center'>Latest Press Releases</h2>
          <div className='space-y-6'>
            {pressReleases.map((release, index) => (
              <div 
                key={index}
                className='bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700 hover:border-purple-500 transition-colors'
              >
                <p className='text-purple-400 text-sm mb-2'>{release.date}</p>
                <h3 className='text-2xl font-bold text-white mb-3'>{release.title}</h3>
                <p className='text-gray-300'>{release.excerpt}</p>
                <button className='mt-4 text-purple-400 hover:text-purple-300 font-semibold'>
                  Read More →
                </button>
              </div>
            ))}
          </div>
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

export default PRPage
