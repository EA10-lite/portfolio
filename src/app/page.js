import { Navbar } from "@/components/main";

export default function Home() {
  return (
    <div className="app">
      <div className="container mx-auto">
        <Navbar />
        <div className="head">
          <div className="py-[60px]">
            <div className="w-[120px] h-[120px] rounded-full border border-[2px] border-white mx-auto mb-[32px]"/>
            <h1 className="text-center text-[42px] leading-[52px] mx-auto font-[600]"> Anyigor Emmanuel <br /> Software Developer </h1>

            <a href="/" className="bg-black text-white text-xs font-[600] px-[12px] py-[7px] rounded-[133.333px]"> My Projects </a>
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
