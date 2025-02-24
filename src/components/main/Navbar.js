import React from "react";
import { TfiDownload } from "react-icons/tfi";


const Navbar = () => {
    return (
        <div className="navbar text-xs">
            <div className="p-[24px]">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                        <div className="bg-[#f1efee] rounded-[133.333px] flex items-center gap-2 pl-[12px] border border-[gainsboro]">
                            <p className="text-[11px]"> emanuelanyigor@gmail.com </p>
                            <button className="bg-white rounded-[133.33px] py-[8px] px-[16px]"> copy </button>
                        </div>
                        <div className="">
                            <button className="bg-white text-black flex items-center justify-center gap-1 rounded-[16px] py-[6px] px-[10px] border border-[gainsboro]">
                                <span> CV </span>
                                <TfiDownload className="text-sm" />
                            </button>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center gap-2 text-xs">
                        <a href="https://github.com/EA10-lite" target="_blank" rel="noreferrer"> Github </a>
                        <span>/</span>
                        <a href="https://x.com/Anyigoremmanue4" target="_blank" rel="noreferrer"> Twitter </a>
                        <span>/</span>
                        <a href="/"> LinkedIn </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;