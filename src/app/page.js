import { Navbar } from "@/components/main";
import { LuExternalLink } from "react-icons/lu";

import { FaReact, FaGitAlt, FaPython } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { SiTypescript, SiJavascript, SiMongodb} from "react-icons/si";

import project_img_1 from "@/assets/aerosoft.png";


const Skill = ({ title, Icon, color }) => {
  return (
    <div className="flex items-center gap-2 w-[fit-content] bg-primary px-[20px] py-[8px] rounded-[4px] text-sm font-[500]">
      <span> { title } </span>
      {Icon && <Icon className="text-[18px]" color={color} />}
    </div>
  )
}


export default function Home() {
  return (
    <div className="app">
      <div className="head bg-white">
        <div className="bg-primary">
          <div className="container mx-auto">
            <Navbar />
          </div>

          <div className="container mx-auto p-[24px] py-[100px]">
            <div className="flex items-start md:items-center gap-1 flex-col md:flex-row md:gap-3">
              <div className="font-[600] text-base leading-[32px]"> Your go-to Expert for: </div>
              <div className="flex items-center gap-2">
                <span className="rounded-[133.333px] bg-black text-white px-[12px] py-[6px] text-xs"> Websites </span>
                <span className="rounded-[133.333px] bg-black text-white px-[12px] py-[6px] text-xs"> Mobile Apps </span>
                <span className="rounded-[133.333px] bg-black text-white px-[12px] py-[6px] text-xs"> Backend Services </span>
              </div>
            </div>

            <h2 className="mt-[24px] mb-[40px] text-[32px] leading-[44px] lg:text-[64px] lg:leading-[80px] font-[600]"> Fullstack Delevoper for Brands, Companies and Startups </h2>

            <div className="md:w-[50%]">
              <h4 className="text-base font-[600]"> Whoami?? </h4>
              <p className="lg:text-lg lg:leading-[32px] font-[500]">
                Hello, My name is Emmanuel Anyigor , I’m a software developer with roughly 5years experience building software architectures and design.
              </p>
            </div>
          </div>

        </div>

        <div className="tools py-[24px] md:py-[80px]">
          <div className="container mx-auto">
            <div className="flex items-center justify-center gap-4 overflow-auto hidden">
              <Skill title={"Reactjs"} Icon={FaReact} color="#5ed3fe" />
              <Skill title={"Nodejs"} Icon={FaNodeJs} color="#68a063" />
              <Skill title={"Javascript"} Icon={SiJavascript} color="#edd718" />
              <Skill title={"TypeScript"} Icon={SiTypescript} color="#2f74c0" />
              <Skill title={"Git"} Icon={FaGitAlt} color="#F1502F" />
              <Skill title={"Mongodb"} Icon={SiMongodb} color="#5db050" />
              <Skill title={"Python"} Icon={FaPython} color="#356c9b" />
            </div>
          </div>
        </div>
      </div>

      <div className="body mb-[80px]">
        <div className="container mx-auto">
          <div className="services my-[60px]">
            <h2 className="text-center font-[500] text-[18px] md:text-[22px] leading-[24px] md:leading-[36px] mb-[40px] max-w-[600px] mx-auto mb-[40px]"> I collaborate with brands and agencies to build high-performing web solutions that drive results.</h2>
            <div className="divider relative w-full border-t border-[gainsboro] mb-[60px]">
              <div className="services-header w-[fit-content] mx-auto bg-white px-[20px] py-[8px] rounded-[133.333px] absolute top-[-20px] text-sm font-[600]"> Services</div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-[40px] max-w-[88%] mx-auto">
              <div className="col-span-1">
                <img src="https://cdn-icons-png.flaticon.com/128/13191/13191289.png" className="w-[36px] h-auto object-cover mb-[16px]" />
                <h4 className="service-header mt-[12px] font-[500] text-sm"> UI & UX </h4>
                <p className="text-xs leading-[19px] mt-[12px]"> Designing interface that are intuitive, efficient and enjoyable to use </p>
              </div>
              <div className="col-span-1">
                <img src="https://cdn-icons-png.flaticon.com/128/2335/2335265.png" className="w-[36px] h-auto object-cover mb-[16px]" />
                <h4 className="service-header mt-[12px] font-[500] text-sm"> Web & Mobile </h4>
                <p className="text-xs leading-[19px] mt-[12px]"> Transform your ideas into exceptional web and mobile app experiences. </p>
              </div>
              <div className="col-span-1">
                <img src="https://cdn-icons-png.flaticon.com/128/2857/2857433.png" className="w-[36px] h-auto object-cover mb-[16px]" />
                <h4 className="service-header mt-[12px] font-[500] text-sm"> Design & Creative </h4>
                <p className="text-xs leading-[19px] mt-[12px]"> Crafting visually stunning design that connect with your audience </p>
              </div>
              <div className="col-span-1">
                <img src="https://cdn-icons-png.flaticon.com/128/2010/2010990.png" className="w-[36px] h-auto object-cover mb-[16px]" />
                <h4 className="service-header mt-[12px] font-[500] text-sm"> Development </h4>
                <p className="text-xs leading-[19px] mt-[12px]"> Bringing your vision to life with the latest technologies and design trends. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
