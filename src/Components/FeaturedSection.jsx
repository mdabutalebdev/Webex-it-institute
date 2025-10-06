import { FaBrain, FaUserGraduate, FaAward, FaUser } from "react-icons/fa";

 
const features = [
  {
    icon: <FaBrain className="text-white text-5xl" />,
    title: "Learn The",
    subtitle: "Essential Skills",
  },
  {
    icon: <FaAward className="text-white text-5xl" />,
    title: "Earn Certificates",
    subtitle: "And Degrees",
  },
  {
    icon: <FaUserGraduate className="text-white text-5xl" />,
    title: "Get Ready for The",
    subtitle: "Next Career",
  },
  {
    icon: <FaUser className="text-white text-5xl" />,
    title: "Master at",
    subtitle: "Different Areas",
  },
];
const FeaturedSection = () => {
return (
  <div className="bg-blue-600 py-5">
    <div className="container mx-auto flex items-center justify-around">
      {features.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-4 text-white"
        >
          {item.icon}
          <div>
            <h3 className="font-medium text-xl  ">
              {item.title}
            </h3>
            <p className="font-medium text-xl  ">
              {item.subtitle}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
)};

export default FeaturedSection;


 