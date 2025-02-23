import React from "react";
import { MdOutlineMailOutline, MdOutlineWhatsapp } from "react-icons/md";


const Footer = () => {
    return (
        <footer className="footer bg-white rounded-t-[16x] md:rounded-t-[64px] lg:rounded-t-[132px]">
            <div className="container px-[16px] md:px-[24px] mx-auto">
                <div className="top-footer-content py-[32px] md:py-[64px]">
                    <div className="mx-auto w-[90px] md:w-[109px] h-[90px] md:h-[109px] rounded-full flex items-center justify-center mb-[24px] bg-primary">
                        <img src="https://cdn-icons-png.flaticon.com/128/493/493881.png" className="w-[64px] md:w-[72px] object-cover h-auto" />
                    </div>
                    <h4 className="text-center text-black text-[28px] leading-[40px] lg:text-[46px] lg:leading-[52px] mb-[32px] font-[500] max-w-[560px] mx-auto"> Tell me about your new project! </h4>
                    <div className="flex items-center gap-4 justify-center">
                        <a href="" className="flex items-center justify-center gap-2 rounded-[133.333px] border border-[2px] border-dark bg-black text-white text-xs px-[12px] py-[8px] w-[119px] shadow">
                            <MdOutlineMailOutline className="text-[18px]" />
                            <span> Email Me </span>
                        </a>
                        <a href="" className="rounded-[133.333px] border border-[2px] border-primary text-xs py-[8px] px-[12px] w-[119px] flex items-center justify-center gap-2 shadow"> 
                            <span>Whatsapp </span>
                            <MdOutlineWhatsapp className="text-[18px]" />
                        </a>
                    </div>
                </div>

                <div className="py-[24px] border-t border-[gainsboro]">
                    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-2">
                        <p className="text-xs"> &copy; {new Date().getFullYear() } All rights reserved. </p>

                        <div className="flex items-center gap-2 text-xs">
                            <a href="https://github.com/EA10-lite" target="_blank" rel="noreferrer"> Github </a>
                            <span>/</span>
                            <a href="https://x.com/Anyigoremmanue4" target="_blank" rel="noreferrer"> Twitter </a>
                            <span>/</span>
                            <a href="/"> LinkedIn </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;