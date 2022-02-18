import React from "react"

const style = {
    wrapper: `relative`,
    container: `before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('/Brian1.jpeg')] before:bg-cover before:bg-center before:opacity-30 before:blur`,
    contentWrapper: `flex h-screen relative justify-center flex-wrap items-center space-y-9`,
    copyContainer: `w-1/2 justify-center`,
    title: ` flex text-white text-[28px] font-semibold text-center`,
    description: `text-[#8a939b] container-[400px] text-center text-xl mt-[0.8rem] mb-[1.5rem]`,

    ctaContainer: `flex relative justify-center`,
    accentedButton: ` relative text-lg font-semibold px-6 py-4 bg-purple-700 rounded-lg mr-5 text-white hover:bg-[#42a0ff] `,
    button: ` relative text-lg font-semibold px-6 py-4 bg-[#FFFFFF] rounded-lg  border-2 border-purple-300 mr-5 text-[#2081E2] hover:shadow-xl `,

    cardContainer: `rounded-[3rem] w-[20rem]`,
    infoContainer: `h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white`,
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
                            <button className={style.accentedButton}>Explore</button>
                            <button className={style.button}>Create</button>
                        </div>
                        
                    </div>    
                    
                    <div className={style.cardContainer}>
                        <img 
                            className="rounded-t-lg"
                            src="/Brian1.jpeg"
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