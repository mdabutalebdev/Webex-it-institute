import { FiGlobe, FiUsers, FiFileText } from "react-icons/fi";
import { IoBulbOutline } from "react-icons/io5";

const AboutPage = () => {
  const StatItem = ({ icon, number, label }) => (
    <div className="flex flex-col items-center text-center p-4">
      <div className="w-24 h-24 rounded-full border-2 border-blue-500 flex items-center justify-center mb-4 text-blue-500 transition-transform transform hover:scale-110">
        {icon}
      </div>
      <p className="text-4xl font-bold text-blue-600">{number}</p>
      <p className="mt-2 text-gray-600 max-w-[200px]">{label}</p>
    </div>
  );

  // Feature Card
  const FeatureCard = ({ imgSrc, title, description }) => (
    <div>
      <div className="relative group overflow-hidden rounded-lg shadow-md">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        <h3 className="absolute bottom-4 left-4 text-white text-xl font-semibold">
          {title}
        </h3>
      </div>
      <p className="mt-4 text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );

  const features = [
    {
      imgSrc:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=60&w=500",
      title: "Who we are",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibheuismod teapm laoreet dolore si amet.",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=60&w=500",
      title: "What we do",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibheuismod teapm laoreet dolore si amet.",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=60&w=500",
      title: "Our mission",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibheuismod teapm laoreet dolore si amet.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero  */}
      <section
        className="relative w-full h-[450px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=60&w=500')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center p-4">
          <div className="absolute top-8 left-8 text-sm">
            <span>Home</span>
            <span className="mx-2">/</span>
            <span className="font-semibold">About us</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Improving Lives <br /> Through Learning
          </h1>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-sm font-bold text-blue-600 tracking-[0.2em] uppercase mb-3">
            START TO SUCCESS
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-snug">
            The Leading Global Marketplace <br /> for Learning and Instruction
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Neque convallis a cras semper auctor. Libero id faucibus nisl
            tincidunt egetnvallis a cras semper auctor. Liberoe convallis a cras
            semper atincidunt egetnval.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="pb-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatItem
            icon={<FiGlobe size={40} />}
            number="15"
            label="Years of Language Education Experience"
          />
          <StatItem
            icon={<IoBulbOutline size={40} />}
            number="253,085"
            label="Learners Enrolled in EduMall Courses"
          />
          <StatItem
            icon={<FiUsers size={40} />}
            number="135"
            label="Qualified teachers and language experts"
          />
          <StatItem
            icon={<FiFileText size={40} />}
            number="2,500+"
            label="Innovative Foreign Language Courses"
          />
        </div>
      </section>

      {/*  Features Section */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">
              What Makes Us Special?
            </h2>
            <p className="mt-2 text-gray-500">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                imgSrc={feature.imgSrc}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/*  Gallery */}
      <section className="max-w-6xl mx-auto mt-24 px-4 pb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            A Great Place to Grow
          </h2>
          <p className="mt-2 text-gray-500">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="row-span-2">
            <img
              src="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=1470"
              alt="Woman working on a laptop"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="md:col-span-2">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1470"
              alt="Collaborative meeting"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=1470"
              alt="Laptop on a desk"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="btn btn-primary bg-blue-600 hover:bg-blue-700 border-none normal-case px-8">
            Join our team
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
