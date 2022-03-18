import Header from "../../components/Header"
import Link from "next/Link"
const style = {
    wrapper: `flex flex-col justify-items-center grid`,
    heading: `h-[13rem] w-full justify-items-center grid text-[#FFFFFF] font-sans text-5xl`,
    navigator: ` w-full text-[#FFFFFF] flex justify-around font-mono text-lg`
}
export default function Exporle() {
    return (
        <div>
            <Header />
            <div className={style.wrapper}>
                <div className={style.heading}>
                    <h1 className="mt-6 mb-6 mr-10 ml-10 text-center">Exporle Collections</h1>
                </div>

                <ul className={style.navigator}>
                    <li className="">
                        <Link href="/explore">
                            Trending
                        </Link></li>
                    <li>Top</li>
                    <li>Art</li>
                </ul>
            
            </div>
        </div>
        
    )
}