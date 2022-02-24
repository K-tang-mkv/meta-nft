import React from "react";
import Link from "next/link";
import Image from "next/image";
import openseaLogo from "../assets/opensea.png";
import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";


const style = {
    wrapper: `bg-[#FFFFF] w-screen px-[1.2rem] py-[0.8rem] flex justify-between shadow-md rounded-b-lg`,
    logoContainer: `flex items-center cursor-pointer`,
    logoText: ` ml-[0.8rem] text-[#FFFFFF] font-semibold font-sans text-2xl`,
    searchBar: `flex flex-1 mx-[0.8rem] w-max-[520px] items-center bg-gray-50 rounded-[0.8rem] hover:bg-gray-100`,
    searchIcon: `text-[#8a939b] mx-3 font-bold text-lg`,
    searchInput: `h-[1.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 font-sans placeholder:text-[#8a939b]`,
    headerItems: ` items-center justify-end hidden md:flex`,
    headerItem: `text-white px-4 font-bold text-[#c8cacd] hover:text-white cursor-pointer`,
    headerIcon: `text-[#8a939b] text-3xl font-black px-4 hover:text-white cursor-pointer`,
    menu: `md:hidden flex items-center`,
    menuButton: `outline-none mobile-menu-button`
}

export default function Header() {
    return (
       <div className={style.wrapper}>
           <Link href="/">
               <div className={style.logoContainer}>
                   <Image src={openseaLogo} height={40} width={40}/>
                   <div className={style.logoText}>OpenSea</div>
               </div>
           </Link>
           <div className={style.searchBar}>
               <div className={style.searchIcon}>
                   <AiOutlineSearch />
               </div>
               <input className={style.searchInput} 
                      placeholder="Search NFT ">
                </input>
           </div>
           <div className={style.headerItems}>
               <Link href="/collections/0xBc9e3870b1fe27Db07D1b13414F46f454D3Fa5E8">
                    <div className={style.headerItem}>Collections</div>
               </Link>
               
               <div className={style.headerItem}>Stats</div>
               <div className={style.headerItem}>Resources</div>
               <div className={style.headerItem}>Create</div>
               <div className={style.headerIcon}>
                   <CgProfile />
               </div>
               <div className={style.headerIcon}>
                   <MdOutlineAccountBalanceWallet />
               </div>

           </div>
           <div className={style.menu}>
	        <button className={style.menuButton}>
               <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
</svg>
            
            </button>
    
        </div>
       </div>
    )
}
