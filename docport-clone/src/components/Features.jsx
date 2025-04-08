const Features = () => {
  return (
    <section className="bg-light py-10 md:py-16" id="features">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-7/12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What is docport and how can we help?
            </h2>
            <p className="text-gray-700 md:max-w-lg">
              Docport hosts a variety of features that aim to make your life easier,
              streamline your logistics processes and provide a better overview of all of
              your logistics processes
            </p>
          </div>

          <div className="md:w-5/12 space-y-6">
            <div className="flex items-start gap-4 bg-white rounded-lg p-4 shadow-sm">
              <img
                src="/images/collaboration-icon.png"
                alt="Collaboration"
                className="w-10 h-10 mt-1"
              />
              <div>
                <h3 className="text-xl font-bold mb-2">Collaboration</h3>
                <p className="text-gray-600">
                  Plan, collaborate, and share your shipments with partners, carriers and everyone that's
                  involved
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white rounded-lg p-4 shadow-sm">
              <img
                src="/images/dashboard-icon.png"
                alt="Dashboard"
                className="w-10 h-10 mt-1"
              />
              <div>
                <h3 className="text-xl font-bold mb-2">Dashboard</h3>
                <p className="text-gray-600">
                  docport dashboard brings all of your analytics to life by visualising your data for
                  you
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white rounded-lg p-4 shadow-sm">
              <img
                src="/images/engagement-icon.png"
                alt="Engagement"
                className="w-10 h-10 mt-1"
              />
              <div>
                <h3 className="text-xl font-bold mb-2">Engagement</h3>
                <p className="text-gray-600">
                  Quickly add partners, share journeys, access documents and more with the desktop
                  program and mobile app
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
