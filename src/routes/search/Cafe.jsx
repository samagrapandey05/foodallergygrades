function Cafe() {
    console.log('Landing Page')
    return (
      <div>
        <h1>Notes</h1>
        <article className="bg-gray-900">
        <Hero />
        <Partners />
        <Feature />
        <Cta g loggedIn={loggedIn} />
        <Stats />
        <Pricing loggedIn={loggedIn} />
        <Testimonials />
        <Team />
        <Comparison loggedIn={loggedIn} />
        <Newsletter />
        </article>
      </div>
    );
  }
  
  export default Cafe;