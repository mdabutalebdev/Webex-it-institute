import { IoSearchOutline } from "react-icons/io5";
import HeroRight from "../assets/hero_right.png"
const Hero = () => {
  return (
    <div className="bg-[#F8F8F8] py-20 ">
      <div className="flex justify-around container mx-auto px-5">
        <div className="">
          <p className="font-normal text-blue-700 text-xl uppercase tracking-widest pl-3">
            Start to success
          </p>
          <h1 className="font-medium text-5xl w-[600px] pt-5 leading-[60px]">
            Access To <span className="text-blue-700">5500+</span> Courses from{" "}
            <span className="text-blue-700">480</span> Instructors &
            Institutions
          </h1>
          <p className="text-[#696969] font-normal text-2xl pt-5">
            Take your learning organisation to the next level.
          </p>

         <div className="flex items-center">
           <input
            type="search"
            className="shadow-xl bg-white w-[500px] px-5 py-5 mt-8 rounded-md"
            placeholder="What do you want to learn?"
          >
          </input>
            <IoSearchOutline  className="-translate-x-10 translate-y-4"/>
         </div>
        </div>
        <div className="">
          <img src={HeroRight} alt="HeroRight" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
