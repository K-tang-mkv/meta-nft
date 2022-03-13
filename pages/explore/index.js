import Header from "../../components/Header"

const style = {
    wrapper: `flex flex-col justify-items-center grid`,
    heading: `h-[10rem] w-full justify-items-center grid text-[#FFFFFF] font-sans text-[2rem]`,
    navigator: ` w-full text-[#FFFFFF] flex justify-around`
}
export default function Exporle() {
    return (
        <div>
            <Header />
            <div className={style.wrapper}>
                <div className={style.heading}>
                    <h1 className="mt-6 mb-6">Exporle Collections</h1>
                </div>

                <ul className={style.navigator}>
                    <li className="">Trending</li>
                    <li>Top</li>
                    <li>Art</li>
                </ul>
            
            </div>
        </div>
        
    )
}