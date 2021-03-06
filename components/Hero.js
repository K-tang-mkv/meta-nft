import React from "react"
import Link from "next/link"
const style = {
    wrapper: `relative`,
    container: `before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('/Brian1.jpeg')] before:bg-cover before:bg-center before:opacity-30 before:blur`,
    contentWrapper: `flex h-screen relative flex-wrap items-center justify-center`,
    copyContainer: `w-1/2`,
    title: `text-white text-[26px] font-semibold text-center`,
    description: `text-[#8a939b] container-[400px] text-center text-xl mt-[0.8rem] mb-[1.5rem]`,

    ctaContainer: `flex relative justify-center`,
    accentedButton: ` relative text-lg font-semibold px-6 py-4 bg-purple-700 rounded-lg mr-5 text-white hover:bg-[#42a0ff] `,
    button: ` relative text-lg font-semibold px-6 py-4 bg-[#FFFFFF] rounded-lg  border-2 border-purple-300 mr-5 text-[#2081E2] hover:shadow-xl `,

    cardContainer: `w-[20rem] mt-6 mb-6`,
    infoContainer: ` bg-[#313338] p-4 rounded-b-xl flex items-center text-white`,
    author: `flex flex-col justify-center ml-4`,
    name: ``,
    infoIcon: `flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold`,
}

const Hero = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <div className={style.contentWrapper}>
                    <div className={style.copyContainer}>
                        <div className={style.title}>
                            Discover, collect, and sell extraordinary NFTs
                        </div>
                        <div className={style.description}>
                            OpenSea is the world&apos;s first and largest market
                        </div>
                        <div className={style.ctaContainer}>
                            <Link href="/explore">
                                <button className={style.accentedButton}>Explore</button>
                            </Link>
                            
                            <button className={style.button}>Create</button>
                        </div>
                        
                    </div>    
                    
                    <div className={style.cardContainer}>
                        <img 
                            className="rounded-t-xl h-[20rem]"
                            src="https://lh3.googleusercontent.com/oKW6TW7wFc56bOf0aRwdKctVQajRom8CR6-K1pWyxD-s0_rDwD-UKoHlR4801P3dxe7YUKeUksauwFJ0m8_EXjhM5ckUglA2a_GRr8M=s0"
                            alt=""
                        />
                        <div className={style.infoContainer}>
                             
                                <img
                                    className="h-[2.25rem] rounded-full"
                                    src="/face.JPG"
                                    alt=""
                                /> 
                                <div className={style.author}>
                                <div className={style.name}>Jolly ZEN</div>
                                <a 
                                    className="text-[#1868b7]"
                                    href="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/2324922113504035910649522729980423429926362207300810036887725141691069366277">
                                    Holad Vanka
                                </a>
                                
                             </div>
                        </div>
                       
                    </div>
                </div> 
                
            </div>
        </div>
    )
}

export default Hero;