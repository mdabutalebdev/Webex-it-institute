import React from 'react';

const LocationMap = () => {
  return (
    <div className="w-full py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">
          Our Location
        </h2>
        <div className="overflow-hidden rounded-lg shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.4848763752702!2d90.4242318758974!3d23.76574208818619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c740f58538d9%3A0x24b88001005eb461!2sBdcalling%20Academy!5e0!3m2!1sen!2sbd!4v1759781699849!5m2!1sen!2sbd"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Daisy Garden Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;