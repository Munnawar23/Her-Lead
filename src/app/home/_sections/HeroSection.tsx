import React from 'react'

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Main Heading - Poppins Bold */}
          <h1 className="font-body font-bold text-6xl md:text-7xl text-text">
            Her Lead
          </h1>
          
          {/* Subheading - Poppins SemiBold */}
          <h2 className="font-heading font-semibold text-3xl md:text-4xl text-primary">
            A 360° Digital Elevation Agency
          </h2>
          
          {/* Body Text - DM Sans Regular */}
          <p className="font-body text-lg md:text-xl text-text leading-relaxed">
            We empower women entrepreneurs to build powerful digital presences. 
            From branding to web development, we handle everything so you can 
            focus on what you do best.
          </p>
          
          {/* Emphasized Text - DM Sans Medium */}
          <p className="font-body font-medium text-xl md:text-2xl text-primary">
            Professional. Bold. Impactful.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex gap-4 pt-6">
            <button className="font-heading font-semibold px-8 py-4 bg-primary text-background rounded-lg hover:opacity-90 transition-opacity">
              Get Started
            </button>
            <button className="font-body font-medium px-8 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-background transition-all">
              Learn More
            </button>
          </div>

          {/* Typography Showcase */}
          <div className="mt-16 pt-16 border-t-2 border-primary/20 space-y-6">
            <h3 className="font-heading font-bold text-2xl text-text">
              Typography & Color Showcase
            </h3>
            
            <div className="space-y-4">
              <div className="p-4 bg-primary/10 rounded-lg">
                <p className="font-heading font-bold text-sm text-text mb-1">Poppins Bold (Headings)</p>
                <h4 className="font-heading font-bold text-3xl text-text">The Quick Brown Fox</h4>
              </div>
              
              <div className="p-4 bg-primary/10 rounded-lg">
                <p className="font-heading font-bold text-sm text-text mb-1">Poppins SemiBold (Subheadings)</p>
                <h5 className="font-heading font-semibold text-2xl text-primary">The Quick Brown Fox</h5>
              </div>
              
              <div className="p-4 bg-primary/10 rounded-lg">
                <p className="font-heading font-bold text-sm text-text mb-1">DM Sans Regular (Body)</p>
                <p className="font-body text-base text-text">The quick brown fox jumps over the lazy dog. This is regular body text for reading.</p>
              </div>
              
              <div className="p-4 bg-primary/10 rounded-lg">
                <p className="font-heading font-bold text-sm text-text mb-1">DM Sans Medium (Emphasized)</p>
                <p className="font-body font-medium text-lg text-primary">The quick brown fox jumps over the lazy dog.</p>
              </div>
            </div>

            {/* Color Palette */}
            <div className="mt-8 space-y-4">
              <h3 className="font-heading font-bold text-2xl text-text">Color Palette</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-6 bg-background border-2 border-text rounded-lg">
                  <div className="w-full h-20 bg-background rounded mb-3"></div>
                  <p className="font-body font-medium text-text">Background</p>
                  <p className="font-body text-sm text-text">#F5F5DC</p>
                </div>
                <div className="p-6 bg-text rounded-lg">
                  <div className="w-full h-20 bg-text rounded mb-3"></div>
                  <p className="font-body font-medium text-background">Text</p>
                  <p className="font-body text-sm text-background">#2C2C2C</p>
                </div>
                <div className="p-6 bg-primary rounded-lg">
                  <div className="w-full h-20 bg-primary rounded mb-3"></div>
                  <p className="font-body font-medium text-background">Primary</p>
                  <p className="font-body text-sm text-background">#D4A574</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HeroSection
