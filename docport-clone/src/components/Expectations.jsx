const Expectations = () => {
  return (
    <section className="py-10 md:py-16" id="expectations">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="md:w-9/12 mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What should you expect?
            </h2>
            <p className="text-gray-700 max-w-2xl">
              Docport hosts a variety of features that aim to make your life
              easier and provide a better overview of all of your logistics
              processes
            </p>
          </div>

          <div className="md:w-3/12 flex justify-center">
            <a href="#contact" className="btn-primary">
              Get Started
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div>
            <img
              src="/images/desktop-app.png"
              alt="Desktop and App"
              className="w-full rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Desktop and App</h3>
            <p className="text-gray-600">
              creating and tracking shipments has never been this easy. everything can be done
              with a simple link share
            </p>
          </div>

          <div>
            <img
              src="/images/documents.png"
              alt="Documents"
              className="w-full rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Documents</h3>
            <p className="text-gray-600">
              at docport we generate documents like CMR for you and make them easily
              accessible whenever, wherever
            </p>
          </div>

          <div>
            <img
              src="/images/analytics.png"
              alt="Analytics"
              className="w-full rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Analytics</h3>
            <p className="text-gray-600">
              docport dashboard provides a comprehensive overview of all of your processes by
              visualising your data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expectations;
