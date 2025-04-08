import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ email: '', message: '' });
    alert('Thanks for your message! We will get back to you soon.');
  };

  return (
    <footer className="bg-light py-10 md:py-16" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get in touch
            </h2>
            <p className="text-gray-700 md:max-w-md">
              if you have any questions that you'd like to ask us,
              feel free to get in touch or book a consultation
            </p>
          </div>

          <div className="md:w-1/2">
            <div className="bg-gray-100 rounded-lg p-8">
              <div className="flex justify-center mb-6">
                <img
                  src="/images/get-started-icon.png"
                  alt="Get Started"
                  className="w-16 h-16"
                />
              </div>

              <h3 className="text-2xl font-bold text-center mb-6">
                Get Started
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter Your Email"
                    className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Type your message here"
                    className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary py-3"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactForm;
