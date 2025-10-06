import  { useState } from 'react';
import { IoCallOutline, IoMailOutline, IoTimeOutline, IoLocationOutline } from 'react-icons/io5';
import LocationMap from './LocationMap';

const ContactInfoItem = ({ icon, title, children }) => (
  <div className="flex items-start gap-4">
    <div className="text-sky-500 mt-1">
      {icon}
    </div>
    <div>
      <h3 className="font-semibold text-gray-700">{title}</h3>
      <p className="text-gray-500">{children}</p>
    </div>
  </div>
);


const ContactUs = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    alert('Thank you for your message!');
    setFormData({
        name: '',
        email: '',
        phone: '',
        course: '',
        message: '',
    });
  };

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-sky-500 uppercase tracking-wider">
            Contact Us
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        
          <div>
            <h2 className="text-2xl font-bold text-sky-500 mb-4">Let's Talk</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              For all your needs, Bdcalling Academy is there. For information about the course, contact the number below or visit Bdcalling Academy directly. And you can send messages through Facebook.
            </p>
            <div className="space-y-6">
              <ContactInfoItem icon={<IoCallOutline size={24} />} title="Give us a call">
                +88 01321231802
              </ContactInfoItem>
              <ContactInfoItem icon={<IoMailOutline size={24} />} title="Chat with us">
                info@bdcallingacademy.com
              </ContactInfoItem>
              <ContactInfoItem icon={<IoTimeOutline size={24} />} title="Office Visit Time">
                Saturday- Friday 9:00 am to 6:00 pm
              </ContactInfoItem>
              <ContactInfoItem icon={<IoLocationOutline size={24} />} title="Visit us">
                Daisy Garden, House 14,Block A, Banasree, main road, Dhaka-1219
              </ContactInfoItem>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-sky-500 mb-4">Inbox your queries</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="input input-bordered w-full focus:border-sky-400 focus:ring-sky-400"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="input input-bordered w-full focus:border-sky-400 focus:ring-sky-400"
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone number"
                  className="input input-bordered w-full focus:border-sky-400 focus:ring-sky-400"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  placeholder="course name"
                  className="input input-bordered w-full focus:border-sky-400 focus:ring-sky-400"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message here."
                  className="textarea textarea-bordered w-full h-32 focus:border-sky-400 focus:ring-sky-400"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="btn bg-sky-500 hover:bg-sky-600 text-white border-none normal-case px-8"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <LocationMap />
    </section>
  );
};

export default ContactUs;