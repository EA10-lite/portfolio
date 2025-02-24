import { Navbar } from "@/components/main";
import { LuExternalLink } from "react-icons/lu";

import { FaReact, FaGitAlt, FaPython } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { SiTypescript, SiJavascript, SiMongodb} from "react-icons/si";


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

          <div className="container mx-auto">
            <div className="py-[60px]">
              <div className="w-[88px] md:w-[120px] h-[88px] md:h-[120px] flex items-center justify-center rounded-full mx-auto mb-[20px] md:mb-[32px]">
                <img src="https://cdn-icons-png.flaticon.com/128/149/149071.png" className="w-[72px] md:w-[80px] h-[72px] md:h-[80px] object-cover" />
              </div>
              <h1 className="text-center text-[28px] md:text-[42px] leading-[40px] md:leading-[52px] mx-auto font-[600]"> Hi, Anyigor Emmanuel <br /> Fullstack Developer </h1>

              <a href="/" className="bg-black text-white text-xs font-[600] px-[12px] py-[10px] rounded-[133.333px] flex items-center gap-2 justify-center w-[160px] mx-auto mt-[20px] md:mt-[40px] shadow hover:bg-white hover:text-black transition-all delay-1500ms">
                <span> My Projects</span>
                <LuExternalLink className="text-[18px]" />
              </a>
            </div>
          </div>
        </div>

        <div className="tools py-[24px] md:py-[80px]">
          <div className="container mx-auto">
            <div className="flex items-center justify-center gap-4 overflow-auto">
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
