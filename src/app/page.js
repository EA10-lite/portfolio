import { Navbar } from "@/components/main";
import { LuExternalLink } from "react-icons/lu";


export default function Home() {
  return (
    <div className="app">
      <div className="container mx-auto">
        <Navbar />
        <div className="head">
          <div className="py-[60px]">
            <div className="w-[64px] md:w-[120px] h-[64px] md:h-[120px] flex items-center justify-center rounded-full mx-auto mb-[32px]">
              <img src="https://cdn-icons-png.flaticon.com/128/456/456212.png" className="w-[48px] md:w-[80px] h-[48px] md:h-[80px] object-cover" />
            </div>
            <h1 className="text-center text-[28px] md:text-[42px] leading-[40px] md:leading-[52px] mx-auto font-[600]"> Hi, Anyigor Emmanuel <br /> Fullstack Developer </h1>

            <a href="/" className="bg-black text-white text-xs font-[600] px-[12px] py-[10px] rounded-[133.333px] flex items-center gap-2 justify-center w-[160px] mx-auto mt-[40px] shadow hover:bg-white hover:text-black transition-all delay-1500ms">
              <span> My Projects</span>
              <LuExternalLink className="text-[18px]" />
            </a>
          </div>
        </div>

        <div className="body mb-[80px]">
          <div className="tools">
            <h2 className="text-center"> Skills And Tools </h2>
          </div>
          <div className="services">
            <h2 className="text-center mb-[40px]"> Services </h2>
            <div className="divider relative w-full border-t border-[gainsboro]">
              <div className="services-header w-[fit-content] mx-auto bg-white px-[20px] py-[8px] rounded-[133.333px] absolute top-[-20px] text-sm font-[600]"> Services</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
