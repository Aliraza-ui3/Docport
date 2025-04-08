const Hero = () => {
  return (
    <section className="bg-secondary py-10 md:py-16" id="hero">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Increase your productivity
              <br />
              with docport
            </h1>
            <div className="my-4">
              <img
                src="/images/hero-divider.svg"
                alt="Divider"
                className="w-full max-w-md"
              />
            </div>
            <p className="text-gray-700 mb-8 md:max-w-lg">
              docport brings all of your logistics processes into
              one place, helps you keep an eye on everything
              at all times and makes it easier to see the big
              picture
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#features"
                className="btn-primary"
              >
                Find out more
              </a>
              <a
                href="#expectations"
                className="flex items-center gap-2 text-dark hover:text-primary transition-colors"
              >
                <img
                  src="/images/view-more-icon.png"
                  alt="View more"
                  className="w-8 h-8"
                />
                <span>view more</span>
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="/images/hero-image.png"
              alt="DocPort Dashboard"
              className="w-full max-w-lg mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
