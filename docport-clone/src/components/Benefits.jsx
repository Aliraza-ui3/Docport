const Benefits = () => {
  const benefits = [
    "Overview of all of your processes",
    "Easily usable",
    "Unlimited partners",
    "Simple document management",
    "Integrations"
  ];

  return (
    <section className="py-10 md:py-16" id="benefits">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center">
          <div className="md:w-1/2 mt-10 md:mt-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              DocPort gives you:
            </h2>
            <ul className="space-y-6">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center">
                  <div className="cri-container mr-4">
                    <div className="cri"></div>
                  </div>
                  <p className="text-lg">{benefit}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <img
              src="/images/benefits.png"
              alt="DocPort Benefits"
              className="w-full max-w-md rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
